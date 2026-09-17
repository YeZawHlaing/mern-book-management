import { Request, Response } from 'express';
import { BookService } from './service.js';

export class BookController {
  private service: BookService;

  constructor() {
    this.service = new BookService();
  }

  public createBook = async (req: Request, res: Response): Promise<void> => {
    try {
      const book = await this.service.createBook(req.body);
      res.status(201).json({ success: true, data: book });
    } catch (err) {
      res.status(400).json({ success: false, message: (err as Error).message });
    }
  };

  public getAllBooks = async (_req: Request, res: Response): Promise<void> => {
    const books = await this.service.getAllBooks();
    res.status(200).json({ success: true, data: books });
  };

  public getBookById = async (req: Request, res: Response): Promise<void> => {
    const book = await this.service.getBookById(String(req.params.id));
    if (!book) {
      res.status(404).json({ success: false, message: 'Book not found' });
      return;
    }
    res.status(200).json({ success: true, data: book });
  };

  public updateBook = async (req: Request, res: Response): Promise<void> => {
    const book = await this.service.updateBook(String(req.params.id), req.body);
    if (!book) {
      res.status(404).json({ success: false, message: 'Book not found' });
      return;
    }
    res.status(200).json({ success: true, data: book });
  };

  public deleteBook = async (req: Request, res: Response): Promise<void> => {
    const book = await this.service.deleteBook(String(req.params.id));
    if (!book) {
      res.status(404).json({ success: false, message: 'Book not found' });
      return;
    }
    res.status(200).json({ success: true, message: 'Book deleted successfully' });
  };
}