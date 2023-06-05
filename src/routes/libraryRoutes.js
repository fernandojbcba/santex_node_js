const express = require('express');

const router = express.Router();
const libraryController = require('../controllers/libraryController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rutas de la entidad Library


router.post('/createLibrary', authMiddleware.authenticate,libraryController.createLibrary);
router.get('/obtener-por-id/:id', libraryController.getLibrary);
router.get('/obtener-todas-librerias', libraryController.getAllLibraries);
router.put('/modificar-libreria/:id', authMiddleware.authenticate, libraryController.updateLibrary);
router.delete('/borrar-libreria/:id', authMiddleware.authenticate, libraryController.deleteLibrary);
router.post('/createBookinlibrary/:id', authMiddleware.authenticate, libraryController.addBook);

module.exports = router;
