import { Movie } from '../models/movie.model.js'

export let getAllMovies = async (req, res) => {
  try {
    const movie = await Movie.find()
    res.status(201).json({
      status: 'SUCCEESS',
      length: movie.length,
      data: {
        movie
      }
    })
  } catch (error) {
    res.status(400).json({
      status: 'FAIL',
      message: error.message
    })
  }
}
export let getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
    res.status(201).json({
      status: 'SUCCEESS',
      data: {
        movie
      }
    })
  } catch (error) {
    res.status(400).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

export let updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runvalidator: true
    })
    res.status(204).json({
      status: 'SUCCEESS',
      data: {
        movie
      }
    })
  } catch (error) {
    res.status(404).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

export let deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status: 'SUCCEESS',
      data: {
        movie: Movie.name
      }
    })
  } catch (error) {
    res.status(404).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

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
      status: 'FAIL',
      message: error.message
    })
  }
}

// module.exports = { getAllMovies, getMovie, updateMovie, deleteMovie, createMovie };
