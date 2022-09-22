import express from 'express'
import cors from 'cors'
import router from './routes/data.js'
import morgan from 'morgan'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
dotenv.config()

// connectDB()

const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/api/students', router)
const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`server is live at http://localhost:${port}`))
// mongoose.set('useFindAndModify', false);