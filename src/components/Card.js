import React from 'react'
import './Movie.css'

const Card = ({id, name, brand, image, annualFee, creditScoreReq, benefits}) => {
    return (
        <div className="card">
            <img src={image}></img>
            <p className="cardName">{name}</p>
            <p className="cardBrand">{brand}</p>
            <p className="cardAnnualFee">{annualFee}</p>
            <p className="cardCreditScoreReq">{creditScoreReq}</p>
            <p className="cardBenefits">{benefits}</p>
        </div>
    )
}

export default Card