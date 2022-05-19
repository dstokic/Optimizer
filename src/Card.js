import React from 'react'
import './Card.css'

const Card = ({id, name, image, bank, 
    forStudents, lowInterest, goodCashBack, 
    annualFee, minCreditScore, forTravel}) => {
    return (
        <div className="card">
            <img src={image}></img>
            <p className="cardName">{name}</p>
            <p className="cardBank">{brand}</p>
            <p className="cardFee">{annualFee}</p>
            <p className="cardMinScore">{creditScoreReq}</p>
            <p className="cardBenefits">{benefits}</p>
        </div>
    )
}

export default Card