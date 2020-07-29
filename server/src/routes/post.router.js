const express = require('express')
const postRouter = express.Router()
const Post = require('../models/Post.model')

// get all posts
postRouter.get('/', (req, res, next) => {
  Post.find({}, (err, result) => {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      })
    }
    res.status(200).send({
      success: true,
      data: result,
    })
  })
})

// get single post
postRouter.get('/:post_id', (req, res, next) => {
  Post.findById(req.params.post_id, (err, result) => {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      })
      res.status(200).send({
        success: true,
        data: result,
      })
    }
  })
})

// add single post
postRouter.post('/', (req, res, next) => {
  const { title, body, author } = req.body
  let newPost = {
    title,
    body,
    author,
  }
  Post.create(newPost, (err, result) => {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      })
    }
    res.status(201).send({
      success: true,
      data: result,
      message: 'Post created successfully',
    })
  })
})

// edit single post
postRouter.put('/:post_id', (req, res, next) => {
  let fieldsToUpdate = req.body
  Post.findByIdAndUpdate(
    req.params.post_id,
    { $set: fieldsToUpdate },
    { new: true },
    (err, result) => {
      if (err) {
        res.status(400).send({
          success: false,
          error: err.message,
        })
      }
      res.status(200).send({
        success: true,
        data: result,
        message: 'Post updated successfully',
      })
    }
  )
})

// delete single post
postRouter.delete('/:post_id', (req, res, next) => {
  Post.findByIdAndDelete(req.params.post_id, (err, result) => {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      })
    }
    res.status(200).send({
      success: true,
      data: result,
      message: 'Post deleted successfully',
    })
  })
})

module.exports = postRouter
