import { BookModel } from './model.js';
import { IBook } from './interface.js';

export class BookRepository {
  async create(data: IBook): Promise<IBook> {
    return await BookModel.create(data);
  }

  async findAll(): Promise<IBook[]> {
    return await BookModel.find().lean();
  }

  async findById(id: string): Promise<IBook | null> {
    return await BookModel.findById(id).lean();
  }

  async update(id: string, data: Partial<IBook>): Promise<IBook | null> {
    return await BookModel.findByIdAndUpdate(id, data, { new: true }).lean();
  }

  async delete(id: string): Promise<IBook | null> {
    return await BookModel.findByIdAndDelete(id).lean();
  }
}