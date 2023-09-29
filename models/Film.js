import { Schema, model, SchemaTypes, Types } from 'mongoose'

const FilmSchema = new Schema({
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
  director: [{ type: Types.ObjectId, ref: 'Cast', required: true }],
  stars: [{ type: Types.ObjectId, ref: 'Cast', required: true }],
  writer: [{ type: Types.ObjectId, ref: 'Cast', required: true }],
  crew: [{ type: Types.ObjectId, ref: 'Cast', required: true }],
  comments: {
    type: Array
  },
  similarFilms: {
    type: Array
  }
})

export default model('Film', FilmSchema)
