import mongoose, { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  images: [{type: String}],
  category: {type: mongoose.Types.ObjectId, ref: 'Category'},
  properties: {type: Object},
}, {versionKey: false, timestamps: true});

export const Product = models.Product || model('Product', productSchema);