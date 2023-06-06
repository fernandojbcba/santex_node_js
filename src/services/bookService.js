const Book = require('../models/book');

// crea un nuevo libro
const createBook = async (bookData) => {
  try {
    const book = await Book.create(bookData);
    return book;
  } catch (error) {
    throw error;
  }
};

// obtiene libro por id
const getBookById = async (id) => {
  try {
    const book = await Book.findOne({
      where: {
        id,
        deletelogical: false,
      },
    });
    return book;
  } catch (error) {
    throw error;
  }
};

// obtiene todos los libros
const getAllBooks = async () => {
  try {
    const book = await Book.findAll({
      where: {
        deletelogical: false,
      },
    });
    return book;
  } catch (error) {
    throw error;
  }
};

// modifica libro por id 
const updateBookById = async (id, bookData) => {
  try {
    const book = await Book.findOne({
      where: {
        id,
        deletelogical: false,
      },
    });
    if (book) {
      const book = await book.update(bookData);
      return book;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

// borrar de forma logica un libro
const deleteBookById = async (id) => {
  try {
    const book = await Book.findOne({
      where: {
        id,
        deletelogical: false,
      },
    });
    if (book) {
      book.deletelogical = true; // seteo deletelogical a verdadero para saber que fue borrado
      await book.save();
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createBook,
  getBookById,
  getAllBooks,
  updateBookById,
  deleteBookById,
};
