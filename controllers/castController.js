import CastModel from '../models/Cast.js'

export const getAll = async (req, res) => {
  try {
    const actors = await CastModel.find().populate('movies')
    res.json(actors)
  } catch (err) {
    console.log('Film getting failed: ', err)
    res.states(500).json({ message: 'Actors getting failed' })
  }
}

export const getOne = async (req, res) => {
  try {
    const actorId = req.params.id
    const actor = await CastModel.findOne({ _id: actorId }).populate('movies')
    res.json(actor)
  } catch (err) {
    console.log('One actor getting failed: ', err)
    res.status(500).json({ message: 'One actor getting failed' })
  }
}
