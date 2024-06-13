import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export const Notes = mongoose.model("Notes", NotesSchema);
