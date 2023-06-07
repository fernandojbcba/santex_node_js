const express = require('express');
const bookController = require('../controllers/bookController');
const { isAuthenticated } = require('../middlewares/authentication')
const router = express.Router();

router.post('/crearLibro', isAuthenticated, bookController.createBook);
router.get('/obtenerlibroId/:id', bookController.getBook);
router.get('/obtenerTodosLibros', bookController.getAllBooks);
router.put('/modificarLibroID/:id', isAuthenticated, bookController.updateBook);
router.delete('/borrarLibro/:id', isAuthenticated, bookController.deleteBook);

module.exports = router;
