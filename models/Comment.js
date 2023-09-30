import { Schema, model, Types } from 'mongoose'

const CommentSchema = new Schema(
  {
    title: {
      type: String,
      require: true
    },
    rating: {
      type: Number,
      require: true
    },
    user: [{ type: Types.ObjectId, ref: 'User', required: true }],
    text: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true
  }
)

export default model('Comment', CommentSchema)
