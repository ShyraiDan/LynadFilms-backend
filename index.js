import express from 'express'
import mongoose from 'mongoose'

import FilmModel from './models/Film.js'
import CastModel from './models/Cast.js'
import CommentModel from './models/Comment.js'
import UserModel from './models/User.js'
import NewsModel from './models/News.js'

import { FilmController, CastController, NewsController, UserController } from './controllers/index.js'

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

app.use('/uploads', express.static('uploads'))

app.get('/', (req, res) => {
  res.send('Hello to LynadFilms')
})

// Films

app.get('/films', FilmController.getAll)

app.get('/films/:id', FilmController.getOne)

// Cast

app.get('/cast', CastController.getAll)

app.get('/cast/:id', CastController.getOne)

// News

app.get('/news', NewsController.getAll)

app.get('/news/:id', NewsController.getOne)

// User

app.post('/login', UserController.login)

app.post('/register', UserController.register)

mongoose.connection.on('open', async () => {
  // -------- film
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
  // -------- actor
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
  // -------- news
  // const news = await NewsModel.create({
  //   title: 'The Equalizer 3’ Shoots Past ‘Barbie’ Atop U.K., Ireland Box Office',
  //   description:
  //     'Sony’s “The Equalizer 3” has finally toppled the six-week reign of “Barbie” atop the U.K. and Ireland box office. Antoine Fuqua’s action thriller, headlined by Denzel Washington and Dakota Fanning, debuted with £2.7 million ($3.4 million), per numbers from Comscore. In its seventh weekend, Warner Bros.’ “Barbie” slid down to second place with £1.6 million for a mighty total of £92.5 million. It is the highest grossing film of 2023 and occupies seventh position on the all-time charts for the territory behind “Spectre,” which has £95.2 million. Also in its seventh weekend, Universal’s “Oppenheimer” slid down a spot to third with £960,504. With £55.4 million, it is the second highest grossing film of 2023 and is level with “Bohemian Rhapsody” at No. 34 on the all-time chart. Angel’s “Sound of Freedom,” a massive success Stateside, debuted in fourth place with £760,060. Rounding off the top five was Paramount’s “Teenage Mutant Ninja Turtles: Mutant Mayhem,” which earned £618,912 in its fifth weekend for a total of £9.1 million. The only other debut in the top 10 was Lionsgate’s “Cobweb,” which debuted in 10th position with £325,904. The week ahead sees two releases on the Thursday. CinemaLive is bowing opera “Madama Butterfly On The Lake.” Yash Raj Films is opening Bollywood superstar Shah Rukh Khan’s “Jawan.” The star’s “Pathaan” is the highest grossing Indian film of 2023. On the Friday, the two wide releases are both sequels. Warner Bros. is opening “The Nun II” and Universal “My Big Fat Greek Wedding 3” across more than 300 locations each. Trinity CineAsia is opening Chinese blockbuster “No More Bets,” while Studiocanal is bowing the acclaimed “Past Lives.” Munro is releasing 1MDB saga documentary “Man on the Run,” while Bulldog is bowing another documentary, “A Life on the Farm,” about a filmmaking farmer and the inspiring legacy of his long-lost home movies. Meanwhile, the future of beloved London cinema Curzon Mayfair is under threat. The venue’s lease will expire in March 2024 and the landlord has threatened its residency at the site. To showcase the cinema this September and October it is hosting a program of films that previously played to great success there, from Fellini’s “La Dolce Vita” to Tarkovsky’s “Solaris.” Kicking off the efforts to save the cinema is a 4K restoration of Max Ophuls’ “La Ronde,” which played a 76-week unbroken run at Curzon Mayfair from April 1951 to October 1952.',
  //   tags: ['Sony', 'The Equalizer 3'],
  //   image: 'photo'
  // })
  // -------- user
})

// port
app.listen(PORT, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('Server Ok')
})
