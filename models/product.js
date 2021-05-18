import mongoose, { Mongoose } from "mongoose";
export const MODEL_NAME = "Product";
let Schema = mongoose.Schema;
const info = mongoose.Schema({
  fa: String,
  en: String,
});
let product = new Schema({
  title: info,
  shortDescription: info,
  longDescription: info,
  time: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, product);
