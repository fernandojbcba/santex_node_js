const Book = require('../models/book');
const Library = require('../models/library');

// Create a new book
const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a book by ID
const getBook = async (req, res) => {
  try {
    const book = await Book.findOne({
      where: {
        id: req.params.id,
        deletelogical: false,
      },
    });
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      where: {
        deletelogical: false,
      },
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a book by ID
const updateBook = async (req, res) => {
  try {
    const book = await Book.findOne({
      where: {
        id: req.params.id,
        deletelogical: false,
      },
    });
    if (book) {
      await book.update(req.body);
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a book by ID (logical deletion)
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findOne({
      where: {
        id: req.params.id,
        deletelogical: false,
      },
    });
    if (book) {
      book.deletelogical = true; // Set the "deletelogical" flag to true
      await book.save();
      res.json({ message: 'Book deleted successfully' });
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBook,
  getBook,
  getAllBooks,
  updateBook,
  deleteBook,
};