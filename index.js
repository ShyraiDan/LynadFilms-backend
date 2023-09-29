import express from 'express'
import mongoose from 'mongoose'

import FilmModel from './models/Film.js'
import CastModel from './models/Cast.js'

import { FilmController, CastController } from './controllers/index.js'

const PORT = process.env.PORT || 4444

mongoose
  .connect('mongodb+srv://danshirayy:1234567Qq@cluster0.cawe89m.mongodb.net/lynadfilms?retryWrites=true&w=majority')
  .then(() => {
    console.log('DB Ok')
  })
  .catch((err) => {
    console.log('DB error', err)
  })

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello to LynadFilms')
})

// Films

app.get('/films', FilmController.getAll)

app.post('/films', FilmController.create)

mongoose.connection.on('open', async () => {
  // const film = await FilmModel.create({
  //   filmName: 'Mission: Impossible - Dead Reckoning Part One',
  //   rating: 8.0,
  //   tags: ['Action', 'Adventure', 'Thriller'],
  //   duration: 163,
  //   description:
  //     "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
  //   date: 'July 12, 2023',
  //   mmpa: 'PG-13',
  //   imageUrl: 'link',
  //   country: 'USA',
  //   trailerLink: 'link',
  //   otherPhotos: ['photo'],
  //   director: [],
  //   stars: [],
  //   writer: [],
  //   crew: [],
  //   comments: ['comment'],
  //   similarFilms: ['film']
  // })
  // --------
  // const cast = await CastModel.create({
  //   castName: 'David Ellison',
  //   role: ['Producer'],
  //   photo: 'photo',
  //   country: 'USA',
  //   bio: 'David Ellison is an American film producer and CEO of Skydance Media. He is the son of the Oracle Corporation CTO Larry Ellison.',
  //   photos: ['photo'],
  //   videos: ['video'],
  //   birth: 'January 12, 1983',
  //   height: 185,
  //   movies: '65170f44c619ea42fd01184b'
  // })
})

// cast
app.post('/cast', CastController.create)

// port
app.listen(PORT, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('Server Ok')
})
