const connectToMongo = require('./db')
const dotenv = require('dotenv')
const express = require('express')
var cors = require('cors')

dotenv.config()
connectToMongo()
const app = express()

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

const port = process.env.BACKEND_PORT || 5000

app.listen(port, () => {
  console.log(`WorkBook backend listening at http://localhost:${port}`)
})
