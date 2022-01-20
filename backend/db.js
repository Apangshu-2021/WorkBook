const mongoose = require('mongoose')

const connectToMongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error:${error.messsage}`)
    process.exit(1)
  }
}

module.exports = connectToMongo
