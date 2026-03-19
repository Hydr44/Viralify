# SnappClip 🎬

AI-powered video editing platform that automatically transforms long-form videos into viral clips optimized for TikTok, Instagram Reels, and YouTube Shorts.

## Features

- 🎥 **Video Upload**: Drag & drop interface for easy video uploads
- 🎙️ **AI Transcription**: Automatic audio transcription using OpenAI Whisper
- ✂️ **Smart Splitting**: Intelligent video segmentation into engaging clips
- ✨ **AI-Generated Copy**: Automatic titles, captions, and hashtags with GPT-4
- 📱 **Social Media Ready**: Clips optimized for all major platforms
- 🚀 **Fast Processing**: Efficient pipeline with real-time progress tracking

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, TailwindCSS
- **UI Components**: shadcn/ui
- **AI**: OpenAI (Whisper, GPT-4)
- **Video Processing**: FFmpeg
- **Deployment**: Vercel

## Prerequisites

- Node.js 18+
- FFmpeg installed (`brew install ffmpeg` on macOS)
- OpenAI API key

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
OPENAI_API_KEY=your_openai_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Usage

1. Navigate to the dashboard
2. Upload your video (max 30 minutes)
3. Wait for AI processing (2-5 minutes)
4. Review generated clips with titles and captions
5. Download your clips

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/snappclip)

1. Push to GitHub
2. Import project on Vercel
3. Add `OPENAI_API_KEY` environment variable
4. Deploy!

## License

MIT
