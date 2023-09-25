import mongoose from 'mongoose'

const CastSchema = new mongoose.Schema({
  castName: {
    type: String,
    require: true
  },
  role: {
    type: Array,
    require: true
  },
  photo: {
    type: String,
    require: true
  },
  country: {
    type: String,
    require: true
  },
  bio: {
    type: String,
    require: true
  },
  photos: {
    type: Array,
    required: true
  },
  videos: {
    type: Array,
    required: true
  },

  birth: {
    type: Date,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  movies: {
    type: Array,
    required: true
  }
})

export default mongoose.model('Cast', CastSchema)
