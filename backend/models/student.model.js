import mongoose, { Schema } from 'mongoose'

//student = { email: 'a7cher@gmail.com', firstName: 'archer', lastName: 'heffern', grade: 100, TA: 'archer' }

const studentSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    }
})



