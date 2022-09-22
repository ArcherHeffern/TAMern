import './Students.css'

function HiddenBar({ grades }) {
    let counter = 0
    return (
        grades.map((grade) => {
            counter++
            return <span>PA{counter}: {grade}pts</span>
        })
    )

}

export default HiddenBar