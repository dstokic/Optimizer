import {useEffect, useState} from 'react'
import Goal from './Goal'
import './Preferences.css'

const Preferences = () => {
    const goals = ["Travel", "Save", "Invest"];
    // const [goals, setGoals] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:8080/api/movies')
    //     .then(response => response.json())
    //     .then(json => setGoals(json))
    // }, [])
    return (
        <div>
            <h1 className="title">Choose a Goal</h1>
            <div className="goals">
                {goals.map((goal) => (
                    <Goal name={goal.name}/>
                ))}
            </div>
        </div>
    )
}

export default Preferences
