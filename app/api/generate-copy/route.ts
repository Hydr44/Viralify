import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(request: NextRequest) {
  try {
    const { transcript, clips } = await request.json();

    if (!transcript || !clips) {
      return NextResponse.json(
        { error: "Missing transcript or clips" },
        { status: 400 }
      );
    }

    const enhancedClips = await Promise.all(
      clips.map(async (clip: any, index: number) => {
        const prompt = `Based on this video transcript, generate a catchy title and engaging caption for a ${clip.duration}-second social media clip (clip ${index + 1}).

Transcript excerpt: "${transcript.slice(index * 200, (index + 1) * 200)}"

Generate:
1. A short, catchy title (max 60 characters)
2. An engaging caption with 2-3 relevant hashtags (max 150 characters)

Format your response as:
TITLE: [title here]
CAPTION: [caption here]`;

        const completion = await openai.chat.completions.create({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content:
                "You are a social media expert who creates viral content for TikTok, Instagram Reels, and YouTube Shorts.",
            },
            { role: "user", content: prompt },
          ],
          max_tokens: 200,
          temperature: 0.8,
        });

        const response = completion.choices[0].message.content || "";
        const titleMatch = response.match(/TITLE:\s*(.+)/);
        const captionMatch = response.match(/CAPTION:\s*(.+)/);

        return {
          ...clip,
          title: titleMatch ? titleMatch[1].trim() : `Clip ${index + 1}`,
          caption: captionMatch
            ? captionMatch[1].trim()
            : "Check out this amazing clip! #viral #trending",
        };
      })
    );

    return NextResponse.json({ clips: enhancedClips });
  } catch (error) {
    console.error("Generate copy error:", error);
    return NextResponse.json(
      { error: "Failed to generate copy" },
      { status: 500 }
    );
  }
}
