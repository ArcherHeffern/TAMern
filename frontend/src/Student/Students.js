import React from "react";
import "./Students.css";
import Student from "./Student.js";

function Students({ students, removeStudent }) {
    return (
        students.map((student => {
            return <Student student={student} removeStudent={removeStudent} />;
        }
        )));
}

export default Students;