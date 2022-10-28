import express from "express"
import { getStudent, getStudents, addStudent, updateStudentName, deleteStudent, deleteAllStudents } from "../controllers/students.js"
const router = express.Router()

// gets student
router.get("/getStudent", getStudent)

// get all students
router.get("/getStudents", getStudents)

// add single student
router.post("/newStudent", addStudent)

// edit student name by email
router.patch("/updateStudent", updateStudentName)

// delete single student
router.delete("/deleteStudent", deleteStudent)

// delete all students
router.delete("/deleteAllStudents", deleteAllStudents)

export default router
