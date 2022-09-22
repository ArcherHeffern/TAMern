import React, { useState } from 'react'
import './Students.css'
import HiddenBar from './HiddenBar'

function Student({ student, removeStudent }) {
    const [showMore, setShowMore] = useState(false)
    const { email, firstName, LastName, grade, grades, TA } = student

    return (
        <section className="character">
            <div className='main-info'>
                <p>{firstName}</p>
                <p>{LastName}</p>
                <p>{email}</p>
                <p>Grade: {grade}</p>
                <p>TA: {TA}</p>
            </div>
            <div className='hidden-items'>
                {showMore && <HiddenBar grades={grades} />}
            </div>
            <div className='button-container'>
                <button className='show-more' onClick={() => {
                    setShowMore(!showMore)
                }}>{showMore ? 'Show less' : 'Show more'}</button>
                <button onClick={() => {
                    removeStudent(email)
                }}>Remove item</button>
            </div>
        </section>
    )
}

export default Student;