import * as mongoose from 'mongoose';

export const ParticipantSchema = new mongoose.Schema({
    name: String,
    email: String,
    friend: String,
});