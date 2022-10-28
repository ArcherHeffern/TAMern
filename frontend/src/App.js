//TODO: add to database

import Loading from './Loading/Loading'
import Header from './Header/Header'
import Students from './Student/Students'
import Popup from './Popup/Popup'
import React, { useState, useEffect } from 'react'

const getStudentsUrl = 'http://localhost:9000/api/students/getStudents'
const newStudentUrl = "http://localhost:9000/api/students/newStudent"
const removeStudentUrl = "http://localhost:9000/api/students/deleteStudent"

function App() {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [closed, setClosed] = useState(false)


  const removeStudent = async (email) => {
    const newItems = items.filter((student) => student.email !== email)
    setItems(newItems)

    // remove student from DB
    // !validate data or something
    let response = await fetch(removeStudentUrl, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    if (response.status === 200) {
      window.alert("Successfully deleted Student")
    } else {
      window.alert(`Failed to delete student with status code ${response.status}`)
    }
  }



  const togglePopup = () => {
    setClosed(!closed)
  }

  const fetchData = async () => {
    try {
      const data = await fetch(getStudentsUrl)
      const response = await data.json()
      setItems(response)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const addData = async (newData) => {
    let duplicate = false
    items.forEach((item) => {
      if (item.email === newData.email) {
        duplicate = true
      }
    })
    if (duplicate) window.alert('Duplicate email')
    else {

      items.push(newData)
      setItems(items)
      setClosed(false)

      console.log(newData)

      // Add item to database
      const response = await fetch(newStudentUrl, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      })
      if (response.status === 201) {
        window.alert("Successfully added new student")
      }
      else {
        window.alert(`Request failed with response code ${response.status}`)
      }
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (items.length === 0) {
    return (
      <main>
        <Header />
        <div className='no-items-msg'>No items</div>
        <div className='btn-container'>
          <button onClick={togglePopup} className='addItem'>Add item</button>
          {closed && <Popup togglePopup={togglePopup} addData={addData} />}
        </div>
        {items &&
          <div className='no-items-button-container'></div>
        }
      </main>
    )
  }
  return (
    <main>
      <Header />
      <div className='btn-container'>
        <button onClick={togglePopup} className='addItem'>Add item</button>
      </div>
      <Students students={items} removeStudent={removeStudent} />
      {closed && <Popup togglePopup={togglePopup} addData={addData} />}
    </main>
  )
}

export default App;
