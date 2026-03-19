"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload, Scissors, ArrowLeft, Download, Sparkles } from "lucide-react";
import Link from "next/link";

type ProcessingStep = "upload" | "transcribe" | "analyze" | "split" | "generate" | "complete";

interface Clip {
  id: string;
  title: string;
  caption: string;
  duration: number;
  url: string;
}

export default function Dashboard() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState<ProcessingStep>("upload");
  const [progress, setProgress] = useState(0);
  const [clips, setClips] = useState<Clip[]>([]);
  const [transcript, setTranscript] = useState("");

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith("video/")) {
      setFile(droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const processVideo = async () => {
    if (!file) return;

    setIsProcessing(true);
    setCurrentStep("upload");
    setProgress(10);

    try {
      const formData = new FormData();
      formData.append("video", file);

      setCurrentStep("transcribe");
      setProgress(30);
      const transcribeRes = await fetch("/api/transcribe", {
        method: "POST",
        body: formData,
      });
      const transcribeData = await transcribeRes.json();
      setTranscript(transcribeData.transcript);

      setCurrentStep("analyze");
      setProgress(50);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setCurrentStep("split");
      setProgress(70);
      const splitRes = await fetch("/api/split", {
        method: "POST",
        body: formData,
      });
      const splitData = await splitRes.json();

      setCurrentStep("generate");
      setProgress(85);
      const generateRes = await fetch("/api/generate-copy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transcript: transcribeData.transcript, clips: splitData.clips }),
      });
      const generateData = await generateRes.json();

      setClips(generateData.clips);
      setCurrentStep("complete");
      setProgress(100);
    } catch (error) {
      console.error("Processing error:", error);
      alert("Error processing video. Please try again.");
      setIsProcessing(false);
    }
  };

  const getStepLabel = (step: ProcessingStep) => {
    const labels = {
      upload: "Uploading video...",
      transcribe: "Transcribing audio...",
      analyze: "Analyzing content...",
      split: "Creating clips...",
      generate: "Generating captions...",
      complete: "Complete!",
    };
    return labels[step];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800">
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Scissors className="h-8 w-8 text-pink-400" />
              <span className="text-2xl font-bold text-white">SnappClip</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {!file && !isProcessing && currentStep === "upload" && (
          <Card className="border-white/10 bg-white/5 p-12 backdrop-blur-sm">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`rounded-lg border-2 border-dashed p-12 text-center transition-colors ${
                isDragging
                  ? "border-pink-400 bg-pink-400/10"
                  : "border-white/20 hover:border-white/40"
              }`}
            >
              <Upload className="mx-auto h-16 w-16 text-purple-200" />
              <h2 className="mt-4 text-2xl font-bold text-white">Upload Your Video</h2>
              <p className="mt-2 text-purple-200">
                Drag and drop your video here, or click to browse
              </p>
              <p className="mt-1 text-sm text-purple-300">
                Supports MP4, MOV, AVI (max 30 minutes)
              </p>
              <input
                type="file"
                accept="video/*"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button className="mt-6 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600" asChild>
                  <span>Choose File</span>
                </Button>
              </label>
            </div>
          </Card>
        )}

        {file && !isProcessing && currentStep === "upload" && (
          <Card className="border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{file.name}</h3>
                <p className="text-purple-200">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => setFile(null)}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Cancel
                </Button>
                <Button
                  onClick={processVideo}
                  className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Process Video
                </Button>
              </div>
            </div>
          </Card>
        )}

        {isProcessing && currentStep !== "complete" && (
          <Card className="border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-500">
                <Sparkles className="h-8 w-8 animate-pulse text-white" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-white">
                {getStepLabel(currentStep)}
              </h2>
              <p className="mb-6 text-purple-200">
                This may take a few minutes. Please don't close this tab.
              </p>
              <Progress value={progress} className="mb-4" />
              <p className="text-sm text-purple-300">{progress}% complete</p>
            </div>
          </Card>
        )}

        {currentStep === "complete" && clips.length > 0 && (
          <div>
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-white">Your Clips Are Ready! 🎉</h2>
              <p className="mt-2 text-purple-200">
                {clips.length} clips generated from your video
              </p>
            </div>

            {transcript && (
              <Card className="mb-8 border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-3 text-lg font-semibold text-white">Transcript</h3>
                <p className="max-h-40 overflow-y-auto text-sm text-purple-200">
                  {transcript}
                </p>
              </Card>
            )}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clips.map((clip) => (
                <Card key={clip.id} className="border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mb-4 aspect-video rounded-lg bg-black/50" />
                  <Badge className="mb-2 bg-pink-500">{clip.duration}s</Badge>
                  <h3 className="mb-2 text-lg font-semibold text-white">{clip.title}</h3>
                  <p className="mb-4 text-sm text-purple-200">{clip.caption}</p>
                  <Button
                    className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600"
                    onClick={() => window.open(clip.url, "_blank")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                onClick={() => {
                  setFile(null);
                  setIsProcessing(false);
                  setCurrentStep("upload");
                  setProgress(0);
                  setClips([]);
                  setTranscript("");
                }}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Process Another Video
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
