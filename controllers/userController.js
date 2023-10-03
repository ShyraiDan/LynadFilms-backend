import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import UserModel from '../models/User.js'

export const register = async (req, res) => {
  try {
    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const doc = new UserModel({
      email: req.body.email,
      fullName: req.body.fullName,
      avatarUrl: req.body.avatarUrl,
      passwordHash: hash
    })

    const user = await doc.save()

    const token = jwt.sign(
      {
        _id: user.id
      },
      'secret123',
      {
        expiresIn: '1d'
      }
    )

    const { passwordHash, ...userData } = user._doc
    res.json({ ...userData, token })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Registration failed' })
  }
}

export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const isValid = await bcrypt.compare(req.body.password, user._doc.passwordHash)

    if (!isValid) {
      return res.status(400).json({ message: 'Email or password incorrect' })
    }

    const token = jwt.sign(
      {
        _id: user.id
      },
      'secret123',
      {
        expiresIn: '1d'
      }
    )

    const { passwordHash, ...userData } = user._doc

    res.json({ ...userData, token })
  } catch (err) {
    console.log(error)
    res.status(500).json({ message: 'Auth failed' })
  }
}

export const getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const { passwordHash, ...userData } = user._doc
    res.json(user.Data)
  } catch (err) {
    console.log('User getting failed: ', err)
    res.status(500).json({ message: 'User getting failed' })
  }
}

export const updateUser = async (req, res) => {
  try {
    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    await UserModel.updateOne(
      { _id: req.body._id },
      {
        avatarUrl: req.body.avatarUrl,
        fullName: req.body.fullName,
        favoriteFilms: req.body.favoriteFilms.split(','),
        passwordHash: hash
      }
    ).then(() => res.json({ success: true }))
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'User updating failed' })
  }
}
