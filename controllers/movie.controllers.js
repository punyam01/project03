import { Movie } from '../models/movie.model.js'

export let getAllMovies = (req, res) => {
  res.send('Get all movies')
}
export let getMovie = (req, res) => {}

export let updateMovie = (req, res) => {}

export let deleteMovie = (req, res) => {}

export let createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body)
    res.status(201).json({
      status: 'SUCCEESS',
      data: {
        movie
      }
    })
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}

// module.exports = { getAllMovies, getMovie, updateMovie, deleteMovie, createMovie };
