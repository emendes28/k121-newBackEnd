import { Document } from 'mongoose';

export interface Participant extends Document {
  readonly name: string;
  readonly email: string;
  readonly friend: string;
}