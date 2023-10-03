import { Schema, model, Types } from 'mongoose'

const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    avatarUrl: String,
    favoriteFilms: [{ type: Types.ObjectId, ref: 'Film' }]
  },
  {
    timestamps: true
  }
)

export default model('User', UserSchema)
