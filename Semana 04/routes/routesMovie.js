const express = require('express');
const ControllerMovie = require('../controllers/ControllerMovie');
const router = express.Router();

router.get('/cadastrar', ControllerMovie.cadastrarMovie);
router.post('/cadastrar', ControllerMovie.MovieCreate);

router.get('/', ControllerMovie.listarMovies);

router.get('/update/:id_filme', ControllerMovie.UpdateMovie);
router.post('/update', ControllerMovie.MovieUpdate);

router.post('/remover', ControllerMovie.removerMovie);

module.exports = router;