import React from 'react'
import './Card.css'

const Card = ({id, name, bank, 
    forStudents, lowInterest, hasCashBack, 
    annualFee, minCreditScore, forTravel}) => {
    return (
        <div className="card">
           
            <p className="cardName">{name}</p>
            <p className="cardBank">{bank}</p>
            <p className="cardForStudents">{forStudents}</p>
            <p className="cardLowInterest">{lowInterest}</p>
            <p className="cardHasCashBack">{hasCashBack}</p>
            <p className="cardFee">{annualFee}</p>
            <p className="cardMinCreditScore">{minCreditScore}</p>
            <p className="cardForTravel">{forTravel}</p>
        </div>
    )
}

export default Card