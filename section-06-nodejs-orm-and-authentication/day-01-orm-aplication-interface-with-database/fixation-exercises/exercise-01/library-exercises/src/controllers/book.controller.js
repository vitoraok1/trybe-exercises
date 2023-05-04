const BookService = require('../services/book.service');

const errorMessage = 'Ocorreu um erro';

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: errorMessage });
  }
};


const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: errorMessage });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await BookService.createBook({ title, author, pageQuantity });
    return res.status(201).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: errorMessage });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    const { id } = req.params;
    const updatedBook = await BookService.updateBook(id, title, author);

    if (!updatedBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: errorMessage });
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
};