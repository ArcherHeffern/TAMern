import mongoose from "mongoose"

const MongoDBUrl = process.env.ATLAS_URI
mongoose.connect(MongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
console.log("Connected to mongoose".cyan.underline)

db.on("error", (err) => {
  console.error(err)
})

db.on("open", () => {
  console.info("Connection to MongoDB successful")
})
