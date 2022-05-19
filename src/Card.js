import React from 'react'
import './Card.css'

const Card = ({id, name, image, bank, 
    forStudents, lowInterest, hasCashBack, 
    annualFee, minCreditScore, forTravel}) => {
    return (
        <div className="card">
            <img src={image}></img>
            <p className="cardName">{name}</p>
            <p className="cardBank">{bank}</p>
            <p className="cardForStudents">{forStudents}</p>
            <p className="cardLowInterest">{lowInterest}</p>
            <p className="cardHasCashBack">{hasCashBack}</p>
            <p className="cardFee">{annualFee}</p>
            <p className="cardMinScore">{minCreditScore}</p>
            <p className="cardForTravel">{forTravel}</p>
        </div>
    )
}

export default Card