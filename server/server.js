const express = require('express')
const app = express()
const PORT = 8080
const bodyParser = require('body-parser')

// routes
const postRouter = require('./src/routes/post.router')

require('./src/database')

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(bodyParser.json())
app.use('/posts', postRouter)

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`)
})
