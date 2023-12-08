// import mongoose, { model, Document, Schema } from "mongoose";

// export interface URLDocument extends Document {
//   urlCode: string;
//   originalLink: string;
//   name?: string;
//   createdAt: Date;
//   updatedAt: Date;
//   clicks: number;
// }

// const urlSchema = new Schema<URLDocument>({
//   urlCode: { type: String, required: true, unique: true },
//   originalLink: { type: String, required: true, unique: true },
//   name: { type: String },
//   clicks: { type: Number, default: 0 },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// });

// urlSchema.set("toJSON", {
//   virtuals: true,
//   versionKey: false,
//   transform: function (doc, ret) {
//     delete ret._id;
//   },
// });

// const URLModel = model<URLDocument>("Url", urlSchema);

// export default URLModel;

import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  urlCode: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  originalLink: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  name: {
    type: String,
    required: false,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: String,
    default: Date.now(),
  },
  updatedAt: {
    type: String,
    default: Date.now(),
  },
});

urlSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const URLModel = mongoose.model("Url", urlSchema);
export default URLModel;
