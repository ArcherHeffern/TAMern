import React, { useReducer } from "react"
import './Popup.css'
// const actionURL = 'http://localhost:3000/api/'
//action={actionURL} method="POST"

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value
  }
}

function Popup({ togglePopup, addData }) {

  const [formData, setFormData] = useReducer(formReducer, {});


  const handleSubmit = event => {
    event.preventDefault();
    const { email, firstName, lastName, TA, PA1, PA2, PA3, PA4, PA5 } = formData
    const grades = [PA1, PA2, PA3, PA4, PA5]
    let grade = 100
    grades.forEach(element => {
      grade -= element
    });
    const personObject = { email, name: { firstName, lastName }, grade, graderName: TA }
    addData(personObject)

    /*
grab data
check if email is already existing
if exists then
    alert and dont add to DB
else 
convert to object
addData(newPerson)
    */
  }

  return (
    <div className="popup-box">
      <div className='content'>
        <span className="close-icon" onClick={togglePopup}>x</span>
        <form className="form" onSubmit={handleSubmit}>
          <p>Add new Student Grades</p>
          <label for='firstName'>First Name: </label>
          <input type={"text"} id='fname' required onChange={setFormData} name='firstName'></input>
          <br />
          <label for='lastName'>Last Name: </label>
          <input type={"text"} id='lname' required onChange={setFormData} name='lastName'></input>
          <br />
          <label for='email'>Email: </label>
          <input type={"email"} id='email' required onChange={setFormData} name='email'></input>
          <br />
          {/* <label for='grade'>Grade: </label>
                    <input type={"number"} max={100} min={0} id='grade' required></input>
                    <br /> */}
          <label for='TA'>TA: </label>
          <input type={"text"} id='TA' required onChange={setFormData} name='TA'></input>
          <br />
          <label for='PA1'>Points off from PA1: </label>
          <input type={"number"} id='PA1' required onChange={setFormData} name='PA1'></input>
          <br />
          <label for='PA2'>Points off from PA2: </label>
          <input type={"number"} id='PA2' required onChange={setFormData} name='PA2'></input>
          <br />
          <label for='PA3'>Points off from PA3: </label>
          <input type={"number"} id='PA3' required onChange={setFormData} name='PA3'></input>
          <br />
          <label for='PA4'>Points off from PA4: </label>
          <input type={"number"} id='PA4' required onChange={setFormData} name='PA4'></input>
          <br />
          <label for='PA5'>Points off from PA5: </label>
          <input type={"number"} id='PA5' required onChange={setFormData} name='PA5'></input>
          <br />



          <input type={'reset'} id='reset'></input>

          <button type={'submit'} id='submit'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Popup