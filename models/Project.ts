import { Schema, model, models } from 'mongoose';

export interface IClip {
  title: string;
  caption: string;
  startTime: number;
  endTime: number;
  duration: number;
  url?: string;
}

export interface IProject {
  userId: string;
  clerkId: string;
  title: string;
  originalVideoUrl: string;
  videoDuration: number;
  transcript: string;
  clips: IClip[];
  status: 'processing' | 'completed' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}

const ClipSchema = new Schema<IClip>({
  title: { type: String, required: true },
  caption: { type: String, required: true },
  startTime: { type: Number, required: true },
  endTime: { type: Number, required: true },
  duration: { type: Number, required: true },
  url: String,
});

const ProjectSchema = new Schema<IProject>(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    clerkId: {
      type: String,
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
    },
    originalVideoUrl: {
      type: String,
      required: true,
    },
    videoDuration: {
      type: Number,
      required: true,
    },
    transcript: {
      type: String,
      default: '',
    },
    clips: [ClipSchema],
    status: {
      type: String,
      enum: ['processing', 'completed', 'failed'],
      default: 'processing',
    },
  },
  {
    timestamps: true,
  }
);

export const Project = models.Project || model<IProject>('Project', ProjectSchema);
