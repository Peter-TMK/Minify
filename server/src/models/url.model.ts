import mongoose, { model, Document, Schema } from "mongoose";

interface URLModel extends Document {
  originalURL: string;
  shortURL: string;
  customAlias?: string;
  createdAt: Date;
  updatedAt: Date;
  clicks: number;
}

const urlSchema = new Schema<URLModel>({
  originalURL: { type: String, required: true },
  shortURL: { type: String, required: true, unique: true },
  customAlias: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  clicks: { type: Number, default: 0 },
});

const URLModel = model<URLModel>("Url", urlSchema);

export default URLModel;
