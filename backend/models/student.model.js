import mongoose, { Schema } from "mongoose"

// student = { email: 'a7cher@gmail.com', firstName: 'archer', lastName: 'heffern', grade: 100, TA: 'archer' }

const studentSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    }
  },
  grade: {
    type: Number
  },
  graderName: {

    type: String
  }
})

const student = mongoose.Model("student", studentSchema)
module.exports = student
