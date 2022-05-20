import React from 'react'
import './ShowCard.css';

const ShowCard = () => {
  return (
    <div>
        <h1>A credit card that fits your indicated preferences and experience is...</h1>
		<img src='https://www.economywatch.com/wp-content/uploads/2021/10/Capital-One-Venture-Rewards-Credit-Card.jpg'/>

            <p>Capital One Venture Rewards Card</p>
        <div className='description'>
            <p>Rewards:</p>
            <ul>
                <li>Earn unlimited 2 miles per dollar on every purchase</li>
                <li>Earn unlimited 5 miles per dollar on hotels and rental cars booked through Capital One Travel</li>
                <li>Earn 75,000 bonus miles once you spend $4,000 on purchases within the first 3 months from account opening</li>
                <li>Up to a $100 credit for Global Entry or TSA PreCheck®</li>
                <li>2 free visits per year to Capital One Lounges</li>
            </ul>
            
            <p className='bottom'>16.24% - 24.24% variable APR</p>
            <p className='bottom'>Annual Fee: $95</p>
        </div>        

    </div>
  )
}

export default ShowCard