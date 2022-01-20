const connectToMongo = require('./db')
const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
var cors = require('cors')

dotenv.config()
connectToMongo()
const app = express()

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

const port = process.env.BACKEND_PORT || 5000

app.listen(port, () => {
  console.log(`WorkBook backend listening at http://localhost:${port}`)
})
