import mongoose, { model, Document, Schema } from "mongoose";

interface URLDocument extends Document {
  urlCode: string;
  originalLink: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  //   clicks: number;
}

const urlSchema = new Schema<URLDocument>({
  urlCode: { type: String, required: true },
  originalLink: { type: String, unique: true },
  userId: { type: String, unique: true, sparse: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  //   clicks: { type: Number, default: 0 },
});

urlSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const URLModel = model<URLDocument>("Url", urlSchema);

export default URLModel;
