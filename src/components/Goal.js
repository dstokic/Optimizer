import React from 'react'
import './Goal.css'

const Goal = ({name}) => {
    return (
        <button className="goal">
            {name}
        </button>
    )
}

export default Goal