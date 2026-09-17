import { Schema, model } from 'mongoose';
import { IBook } from './interface.js';



const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    publishedYear: { type: Number, required: true },
    genre: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

export const BookModel = model<IBook>('Book', bookSchema);