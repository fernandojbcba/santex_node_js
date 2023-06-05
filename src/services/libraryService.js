const  Library  = require('../models/library');
const Book  = require('../models/book')


const createLibrary = async (name, location, telefono) => {
  try {
    const library = await Library.create({
      name,
      location,
      telefono,
    });
    return library;
  } catch (error) {
    throw error;
  }
};

const getLibraryById = async (id) => {
  try {
    const library = await Library.findOne({
      where: { id, deletelogical: false },
      include: Book,
    });

    return library;
  } catch (error) {
    throw error;
  }
};

const getAllLibraries = async () => {
  try {
    const libraries = await Library.findAll({
      where: { deletelogical: false }
        });
    return libraries;
  } catch (error) {
    throw error;
  }
};

const updateLibrary = async (id, name, location, telefono) => {
  try {
    const library = await Library.findOne({ where: { id } });
    if (!library) {
      throw new Error('Library not found');
    }
    library.name = name;
    library.location = location;
    library.telefono = telefono;
    await library.save();
    return library;
  } catch (error) {
    throw error;
  }
};

const deleteLibrary = async (id) => {
  const library = await Library.findByPk(id);
  if (library) {
    return await library.update({ deletelogical: true });
  }
  return null;
}
;

const addBookToLibrary = async (libraryId, bookData) => {
  try {
    const library = await Library.findOne({ where: { id: libraryId } });
    if (!library) {
      throw new Error('Library not found');
    }
    const book = await Book.create({
      ...bookData,
      'library':libraryId,
    });
    return book;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createLibrary,
  getLibraryById,
  getAllLibraries,
  updateLibrary,
  deleteLibrary,
  addBookToLibrary,
};
