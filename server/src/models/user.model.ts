import mongoose, { model, Document, Schema } from "mongoose";

interface UserDocument extends Document {
  //   originalURL: string;
  //   shortURL: string;
  //   customAlias?: string;
  fullName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  //   clicks: number;
}

const userSchema = new Schema<UserDocument>({
  fullName: { type: String, required: true },
  email: { type: String, unique: true, required: true, index: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  //   clicks: { type: Number, default: 0 },
});

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const UserModel = model<UserDocument>("Url", userSchema);

export default UserModel;
