import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, ' name is required field'],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'discription  is a  required field'],
    trim: true
  },
  duration: {
    type: String,
    required: [true, ' Duration is required field']
  },
  ratings: {
    type: Number
  },
  totalRating: {
    type: Number
  },
  releaseYear: {
    type: Number,
    required: true
  },
  releaseDate: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  generes: {
    type: [String],
    required: [true, ' genere is required field']
  },
  directors: {
    type: [String],
    required: [true, 'Director required field']
  },
  coverImage: {
    type: [String],
    required: [true, 'cover Image is required field']
  },
  actors: {
    type: [String],
    required: [true, 'Actors is required field']
  },
  price: {
    type: Number,
    required: [true, 'Price is required field']
  }
})

const Movie = mongoose.model('Movie', movieSchema)
export { Movie }
