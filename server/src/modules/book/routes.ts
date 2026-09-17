import { Router } from 'express';
import { BookController } from './controller.js';

const router = Router();
const controller = new BookController();

router.post('/', controller.createBook);
router.get('/', controller.getAllBooks);
router.get('/:id', controller.getBookById);
router.put('/:id', controller.updateBook);
router.delete('/:id', controller.deleteBook);

export default router;