// requirements: getStudent, getStudents, addStudent, deleteStudent, deleteAllStudents
import Student from "../models/student.js"

// gets single student based on email
export const getStudent = (req, res) => {
  if (!req.body.email) {
    res.status(400).send("No student specified")
  } else {
    Student.findOne({ email: req.body.email }, (err, doc) => {
      if (err) {
        res.status(500).send("Error fetching student")
      } else if (!doc) {
        res.status(404).send("Student not found")
      } else {
        res.status(200).send(doc)
      }
    })
  }
}

export const getStudents = (req, res) => {
  Student.find({}, (err, doc) => {
    if (err) {
      res.status(500).send("Error while fetching students")
    } else if (!doc) {
      res.status(404).send("Students not found")
    } else {
      res.status(200).send(doc)
    }
  })
}

export const addStudent = (req, res) => {
  if (!req.body) {
    res.status(400).send("Bad request")
  } else {
    new Student(req.body).save((err, doc) => {
      if (err) {
        console.error(err)
        res.status(500).send("Error adding student")
      } else {
        res.status(201).send("Created new student")
      }
    })
  }
}

export const updateStudentName = (req, res) => {
  if (!req.body.name || !(req.body.email && req.body.name.firstName && req.body.name.lastName)) {
    res.status(400).send("Bad request")
  } else {
    Student.findOneAndUpdate({ email: req.body.email }, { name: { firstName: req.body.name.firstName, lastName: req.body.name.lastName } }, (err, doc) => {
      if (err) {
        res.status(500).send("Error updating student information")
      } else {
        res.status(200).send("Successfully updated student information")
      }
    })
  }
}

export const deleteStudent = (req, res) => {
  if (!req.body.email) {
    res.status(400).send("Bad request")
  } else {
    Student.deleteOne({ email: req.body.email }, (err, doc) => {
      if (err) {
        console.err("Error deleting from database")
        res.status(500).send("Error deleting from database")
      } else if (!doc) {
        res.status(404).send("Email not found")
      } else {
        res.status(200).send("Successfully deleted")
      }
    })
  }
}

export const deleteAllStudents = (req, res) => {
  Student.deleteMany({}, (err, doc) => {
    if (err) {
      console.err("Error deleting from database")
    } else {
      res.status(200).send("Successfully deleted")
    }
  })
}
