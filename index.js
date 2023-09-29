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
  //   filmName: 'Oppenheimer',
  //   rating: 8.6,
  //   tags: ['Biography,Drama,History'],
  //   duration: 181,
  //   description:
  //     'The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.',
  //   date: 'July 11, 2023',
  //   mmpa: 'PG-13',
  //   imageUrl: 'link',
  //   country: 'USA',
  //   trailerLink: 'link',
  //   otherPhotos: ['photo'],
  //   director: '6516a8dba56279c911e4c22c',
  //   stars: ['star'],
  //   writer: ['writer'],
  //   crew: ['crew'],
  //   comments: ['comment'],
  //   similarFilms: ['film']
  // })
  // const cast = await CastModel.create({
  //   // castName: 'Christopher Nolan',
  //   // role: ['director'],
  //   // photo: 'photo',
  //   // country: 'United Kingdom',
  //   // bio: 'Christopher Edward Nolan CBE is a British and American filmmaker. Known for his Hollywood blockbusters with complex storytelling, Nolan is considered a leading filmmaker of the 21st century. His films have grossed $5 billion worldwide. The recipient of many accolades, he has been nominated for five Academy Awards, five BAFTA Awards and six Golden Globe Awards. In 2015, he was listed as one of the 100 most influential people in the world by Time, and in 2019, he was appointed Commander of the Order of the British Empire for his contributions to film. Nolan developed an interest in filmmaking from a young age. After studying English literature at University College London, he made several short films before his feature film debut with Following (1998). Nolan gained international recognition with his second film, Memento (2000), for which he was nominated for the Academy Award for Best Original Screenplay. He transitioned from independent to studio filmmaking with Insomnia (2002), and found further critical and commercial success with The Dark Knight trilogy (2005–2012), The Prestige (2006) and Inception (2010); the last of these earned Nolan two Oscar nominations—Best Picture and Best Original Screenplay. This was followed by Interstellar (2014), Dunkirk (2017), Tenet (2020) and Oppenheimer (2023). For Dunkirk, he earned two Academy Award nominations, including his first for Best Director.',
  //   // photos: ['photo'],
  //   // videos: ['video'],
  //   // birth: 'June 30, 1970',
  //   // height: 181,
  //   // movies: film
  //   castName: 'Cillian Murphy',
  //   role: ['Actor'],
  //   photo: 'photo',
  //   country: 'Ireland',
  //   bio: 'Striking Irish actor Cillian Murphy was born in Douglas, the oldest child of Brendan Murphy, who works for the Irish Department of Education, and a mother who is a teacher of French. He has three younger siblings. Murphy was educated at Presentation Brothers College, Cork. He went on to study law at University College Cork, but dropped out after about a year. During this time Murphy also pursued an interest in music, playing guitar in various bands. Upon leaving University, Murphy joined the Corcadorca Theater Company in Cork, and played the lead role in "Disco Pigs", amongst other plays.',
  //   photos: ['photo'],
  //   videos: ['video'],
  //   birth: 'May 25, 1976',
  //   height: 172,
  //   movies: '6516c47c3dd3bf3a12904dc2'
  // })
  // console.log(cast)
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
