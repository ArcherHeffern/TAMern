import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const connection_url = process.env.ATLAS_URI
        const conn = mongoose.connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Connected to mongoose'.cyan.underline)
    }
    catch (err) {
        console.log(err)
    }
}

export default connectDB