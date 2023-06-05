const express = require('express');
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/crearLibro', authMiddleware.authenticate, bookController.createBook);
router.get('/obtenerlibroId/:id', bookController.getBook);
router.get('/obtenerTodosLibros', bookController.getAllBooks);
router.put('/modificarLibroID/:id', authMiddleware.authenticate, bookController.updateBook);
router.delete('/borrarLibro/:id', authMiddleware.authenticate, bookController.deleteBook);

module.exports = router;
