const express = require('express');

const router = express.Router();
const libraryController = require('../controllers/libraryController');

const { isAuthenticated } = require('../middlewares/authentication')



router.post('/createLibrary', isAuthenticated,libraryController.createLibrary);
router.get('/obtener-por-id/:id', libraryController.getLibrary);
router.get('/obtener-todas-librerias', libraryController.getAllLibraries);
router.put('/modificar-libreria/:id', isAuthenticated, libraryController.updateLibrary);
router.delete('/borrar-libreria/:id', isAuthenticated, libraryController.deleteLibrary);
router.post('/createBookinlibrary/:id', isAuthenticated, libraryController.addBook);

module.exports = router;
