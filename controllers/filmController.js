import FilmModel from '../models/Film.js'
import CastModel from '../models/Cast.js'

export const create = async (req, res) => {
  try {
    const doc = new FilmModel({
      filmName: req.body.filmName,
      rating: req.body.rating,
      tags: req.body.tags.split(','),
      duration: req.body.duration,
      description: req.body.description,
      date: req.body.date,
      mmpa: req.body.mmpa,
      imageUrl: req.body.imageUrl,
      country: req.body.country,
      trailerLink: req.body.trailerLink,
      otherPhotos: req.body.otherPhotos.split(','),
      director: req.body.director.split(','),
      // director: [{ type: Schema.Types.ObjectId, ref: 'Cast' }],
      stars: req.body.stars.split(','),
      writer: req.body.writer.split(','),
      crew: req.body.crew.split(','),
      comments: req.body.comments.split(','),
      similarFilms: req.body.similarFilms.split(',')
    })

    const film = await doc.save()
    res.json(film)
  } catch (err) {
    console.log('Film creating failed: ', err)
    res.status(500).json({ message: 'Film creating failed:' })
  }
}

export const getAll = async (req, res) => {
  try {
    const films = await FilmModel.find().populate('director').populate('stars').populate('writer').populate('crew')
    res.json(films)
  } catch (err) {
    console.log('Film getting failed: ', err)
    res.status(500).json({ message: 'Film getting failed:' })
  }
}

export const getOne = async (req, res) => {
  try {
    const filmId = req.params.id
    const film = await FilmModel.findOne({ _id: filmId })

    res.json(film)
  } catch (err) {
    console.log('One film getting failed: ', err)
    res.status(500).json({ message: 'One film getting failed:' })
  }
}
