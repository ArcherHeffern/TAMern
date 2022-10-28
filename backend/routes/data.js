import express from "express"
import { getStudent, getStudents, addStudent, deleteStudent, deleteAllStudents } from "../controllers/students.js"
const router = express.Router()

// gets student
router.get("/getStudent", getStudent)

// get all students
router.get("/getStudents", getStudents)

// add single student
router.post("newStudent", addStudent)

// delete single student
router.delete("deleteStudent", deleteStudent)

// delete all students
router.delete("/deleteAllStudents", deleteAllStudents)

export default router
