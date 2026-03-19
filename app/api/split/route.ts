import { NextRequest, NextResponse } from "next/server";
import { writeFile, unlink, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { exec } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("video") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const tempDir = join("/tmp", `clips-${Date.now()}`);
    await mkdir(tempDir, { recursive: true });

    const inputPath = join(tempDir, "input.mp4");
    await writeFile(inputPath, buffer);

    const { stdout } = await execAsync(
      `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${inputPath}"`
    );
    const duration = parseFloat(stdout.trim());

    const clipDuration = 45;
    const clips = [];
    const numClips = Math.min(Math.floor(duration / clipDuration), 10);

    for (let i = 0; i < numClips; i++) {
      const startTime = i * clipDuration;
      const outputPath = join(tempDir, `clip-${i}.mp4`);
      
      await execAsync(
        `ffmpeg -i "${inputPath}" -ss ${startTime} -t ${clipDuration} -c:v libx264 -c:a aac -y "${outputPath}"`
      );

      clips.push({
        id: `clip-${i}`,
        duration: clipDuration,
        url: `/tmp/clips/${i}.mp4`,
      });
    }

    await unlink(inputPath);

    return NextResponse.json({ clips });
  } catch (error) {
    console.error("Split error:", error);
    return NextResponse.json(
      { error: "Failed to split video" },
      { status: 500 }
    );
  }
}
