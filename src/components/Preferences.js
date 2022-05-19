import {useEffect, useState} from 'react'
import Goal from './Goal'
import './Preferences.css'

const Preferences = () => {
    const goals = ["Travel", "Save", "Invest"];

    return (
        <div>
            <h1 className="title">Choose a Goal</h1>
            <div className="goals">
                {goals.map((goal) => (
                    <Goal name={goal}/>
                ))}
            </div>
        </div>
    )
}

export default Preferences
