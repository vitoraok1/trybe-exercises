const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const createBook = async ({ title, author, pageQuantity }) => {
  const newBook = await Book.create({ title, author, pageQuantity });
  return newBook;
};

const updateBook = async (id, title, author) => {
  const [updatedBook] = await Book.update(
    { title, author },
    { where: { id } },
  );
  return updatedBook;
};

const removeBook = async (id) => {
  const book = await Book.destroy(
    { where: { id } },
  );
  return book;
};


module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  removeBook,
};