import { Schema, model, Types } from 'mongoose'

const NewsSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    tags: {
      type: [String],
      required: true
    },
    image: {
      type: String,
      required: true
    },
    comments: [{ type: Types.ObjectId, ref: 'Comment' }]
  },
  {
    timestamps: true
  }
)

export default model('News', NewsSchema)
