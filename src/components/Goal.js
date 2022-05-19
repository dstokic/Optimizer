import React from 'react'
import './Goal.css'

const Goal = ({name}) => {
    return (
        <button className="goal" onclick="updateSelection({goal})">
            {name}
        </button>
    )
}

export default Goal