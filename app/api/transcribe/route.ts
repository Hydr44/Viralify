import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/lib/openai";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("video") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const tempPath = join("/tmp", `upload-${Date.now()}.mp4`);
    await writeFile(tempPath, buffer);

    const transcription = await openai.audio.transcriptions.create({
      file: await fetch(`file://${tempPath}`).then((r) => r.blob()),
      model: "whisper-1",
      language: "en",
    });

    await unlink(tempPath);

    return NextResponse.json({
      transcript: transcription.text,
    });
  } catch (error) {
    console.error("Transcription error:", error);
    return NextResponse.json(
      { error: "Failed to transcribe video" },
      { status: 500 }
    );
  }
}
