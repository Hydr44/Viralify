import mongoose, { Schema, model, models } from 'mongoose';
import { PlanType } from '@/lib/stripe';

export interface IUser {
  clerkId: string;
  email: string;
  plan: PlanType;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  subscriptionStatus?: 'active' | 'canceled' | 'past_due';
  videosProcessedThisMonth: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    plan: {
      type: String,
      enum: ['FREE', 'PRO', 'ENTERPRISE'],
      default: 'FREE',
    },
    stripeCustomerId: String,
    stripeSubscriptionId: String,
    subscriptionStatus: {
      type: String,
      enum: ['active', 'canceled', 'past_due'],
    },
    videosProcessedThisMonth: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const User = models.User || model<IUser>('User', UserSchema);
