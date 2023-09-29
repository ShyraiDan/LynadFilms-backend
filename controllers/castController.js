import CastModel from '../models/Cast.js'

export const create = async (req, res) => {
  try {
    const doc = new CastModel({
      castName: req.body.castName,
      role: req.body.role.split(','),
      photo: req.body.photo,
      country: req.body.country,
      bio: req.body.bio,
      photos: req.body.photos.split(','),
      videos: req.body.videos.split(','),
      birth: req.body.birth,
      height: req.body.height,
      movies: req.body.movies.split(',')
    })
    const cast = await doc.save()
    res.json(cast)
  } catch (err) {
    console.log('Cast creating failed: ', err)
    res.status(500).json({ message: 'Cast creating failed:' })
  }
}
