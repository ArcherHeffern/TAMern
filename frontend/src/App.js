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
    await fetch(removeStudentUrl, {
      method: "DELETE",
      body: JSON.stringify({ email: email })
    })
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

      // Add item to database
      await fetch(newStudentUrl, {
        method: "POST",
        body: JSON.stringify(newData)
      })
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
