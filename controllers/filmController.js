import FilmModel from '../models/Film.js'

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
      .populate('director')
      .populate('stars')
      .populate('writer')
      .populate('crew')

    res.json(film)
  } catch (err) {
    console.log('One film getting failed: ', err)
    res.status(500).json({ message: 'One film getting failed:' })
  }
}
