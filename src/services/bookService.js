const Book = require('../models/book');

// Create a new book
const createBook = async (bookData) => {
  try {
    const book = await Book.create(bookData);
    return book;
  } catch (error) {
    throw error;
  }
};

// Get a book by ID
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

// Get all books
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

// Update a book by ID
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

// Delete a book by ID (logical deletion)
const deleteBookById = async (id) => {
  try {
    const book = await Book.findOne({
      where: {
        id,
        deletelogical: false,
      },
    });
    if (book) {
      book.deletelogical = true; // Set the "deletelogical" flag to true
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
