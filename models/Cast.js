import { Schema, model, Types } from 'mongoose'

const CastSchema = new Schema({
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
  movies: [{ type: Types.ObjectId, ref: 'Film', required: true }]
})

export default model('Cast', CastSchema)
