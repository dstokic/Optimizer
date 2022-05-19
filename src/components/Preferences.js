import {useEffect, useState} from 'react'
import Goal from './Goal'
import './Preferences.css'

const Preferences = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/api/movies')
        .then(response => response.json())
        .then(json => setData(json))
    }, [])
    return (
        <div>
            <h1 className="title">Choose a Goal</h1>
            <div className="goals">
                {data.map((goal) => (
                    <Goal name={goal.name}/>
                ))}
            </div>
        </div>
    )
}

export default Preferences
