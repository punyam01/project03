import express from 'express'
import {
  getAllMovies,
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie
} from '../controllers/movie.controllers.js'

const router = express.Router()

// Define routes
router.route('/').get(getAllMovies).post(createMovie)

router.route('/:id').get(getMovie).patch(updateMovie).delete(deleteMovie)

export default router
