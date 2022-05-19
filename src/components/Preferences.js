// import {useEffect, useState} from 'react'
import Goal from './Goal'
import './Preferences.css'

const Preferences = () => {
    const goals = ["Travel", "Save", "Entertainment"];
    var selection;

    function updateSelection(goal) {
        selection = goal;
        console.log(selection);
    }

    return (
        <div>
            <h1 className="title">Choose a Goal</h1>
            <div className="goals">
                {goals.map((goal) => (
                        <button className="goal" onclick="selection = {goal}">
                            {goal}
                        </button>
                ))}
            </div>
            <br></br>
            <button className="button" onclick="window.location.href='/results';">Next</button>
        </div>
    )
}

export default Preferences
