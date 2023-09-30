import NewsModel from '../models/News.js'

export const getAll = async (req, res) => {
  try {
    const news = await NewsModel.find()
    res.json(news)
  } catch (err) {
    console.log('News getting failed: ', err)
    res.status(500).json({ message: 'News getting failed:' })
  }
}

export const getOne = async (req, res) => {
  try {
    const newsId = req.params.id
    const news = await NewsModel.findOne({ _id: newsId })
    res.json(news)
  } catch (err) {
    console.log('One news getting failed: ', err)
    res.status(500).json({ message: 'One news getting failed' })
  }
}
