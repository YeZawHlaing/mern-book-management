import { BookRepository } from './repository.js';
import { IBook } from './interface.js';

export class BookService {
  private repository: BookRepository;

  constructor() {
    this.repository = new BookRepository();
  }

  async createBook(data: IBook): Promise<IBook> {
    if (!data.title || !data.author) {
      throw new Error('Title and Author are required.');
    }
    return await this.repository.create(data);
  }

  async getAllBooks(): Promise<IBook[]> {
    return await this.repository.findAll();
  }

  async getBookById(id: string): Promise<IBook | null> {
    return await this.repository.findById(id);
  }

  async updateBook(id: string, data: Partial<IBook>): Promise<IBook | null> {
    return await this.repository.update(id, data);
  }

  async deleteBook(id: string): Promise<IBook | null> {
    return await this.repository.delete(id);
  }
}