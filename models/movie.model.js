import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, ' name is required field'],
    unique: true
  },
  description: {
    type: String
  },
  duration: {
    type: String,
    required: [true, ' Duration is required field']
  },
  rating: {
    type: Number,
    default: 1.0
  }
})

const Movie = mongoose.model('Movie', movieSchema)
export { Movie }
