const libraryService = require('../services/libraryService');

const createLibrary = async (req, res) => {
  const { name, location, telefono } = req.body;

  try {
    const library = await libraryService.createLibrary(name, location, telefono);
    res.status(201).json(library);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getLibrary = async (req, res) => {
  const { id } = req.params;

  try {
    const library = await libraryService.getLibraryById(id);
    if (!library) {
      return res.status(404).json({ error: 'Library not found' });
    }
    res.json(library);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllLibraries = async (req, res) => {
  try {
    const libraries = await libraryService.getAllLibraries();
    if (!library) {
      return res.status(404).json({ error: 'Libraries not found' });
    }
    res.json(libraries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateLibrary = async (req, res) => {
  const { id } = req.params;
  const { name, location, telefono } = req.body;

  try {
    const library = await libraryService.updateLibrary(id, name, location, telefono);
    res.json(library);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteLibrary = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedLibrary = await libraryService.deleteLibrary(id);
    if (deletedLibrary) {
      res.json(deletedLibrary);
    } else {
      res.status(404).json({ error: 'Library not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const addBook = async (req, res) => {
  const { id } = req.params;
  const bookData = req.body;
  
  try {
    const book = await libraryService.addBookToLibrary(id, bookData);
    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createLibrary,
  getLibrary,
  getAllLibraries,
  updateLibrary,
  deleteLibrary,
  addBook,
};
