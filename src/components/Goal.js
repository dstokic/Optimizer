import React from 'react'
import './Goal.css'

const Goal = ({name}) => {
    return (
        <div className="goal">
            <p className="goalName">{name}</p>
        </div>
    )
}

export default Goal