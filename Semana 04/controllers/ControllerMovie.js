const Movie = require('../models/Movie');

module.exports = class MovieController {
  static cadastrarMovie(req, res) {
    res.render('movies/cadastrar');
  }
  // create
  static async MovieCreate(req, res) {
    const movie = {
      titulo: req.body.titulo,
      categoria: req.body.categoria,
      genero: req.body.genero,
      link: req.body.link
    }
    await Movie.create(movie);
    // res.send('Cadastro executado com sucesso!')
    res.redirect('/');
  }
  // read
  static async listarMovies(req, res) {
    const movie = await Movie.findAll({raw: true});
    res.render('movies/listar', {movie});
  }
  // update
  static async UpdateMovie(req, res) {
    const id_filme = req.params.id_filme;
    const movie = await Movie.findOne({where: {id_filme: id_filme}, raw: true})
    res.render('movies/update', {movie});
    }
  static async MovieUpdate(req, res) {
  const id_filme = req.body.id_filme;
  const movie = {
      titulo: req.body.titulo,
      categoria: req.body.categoria,
      genero: req.body.genero,
      link: req.body.link
    }
  await Movie.update(movie, {where: {id_filme: id_filme}})
  res.redirect('/')
  }
  // delete
  static async removerMovie(req, res) {
    const id_filme = req.body.id_filme;
    await Movie.destroy({where: {id_filme: id_filme}})
    res.redirect('/')
  }
}
