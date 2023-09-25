import mongoose from 'mongoose'

const FilmSchema = new mongoose.Schema({
  filmName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  mmpa: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  trailerLink: {
    type: String,
    required: true
  },
  otherPhotos: {
    type: Array,
    required: true
  },
  director: {
    type: Array,
    required: true
  },
  stars: {
    type: Array,
    required: true
  },
  writer: {
    type: Array,
    required: true
  },
  crew: {
    type: Array,
    required: true
  },
  comments: {
    type: Array
  },
  similarFilms: {
    type: Array
  }
})

export default mongoose.model('Film', FilmSchema)
