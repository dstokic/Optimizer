import React, { useState } from 'react';
import Card from './Card';
import './App.css';
import ShowCard from './ShowCard';

export default function App() {
	const questions = [
		{
			questionText: 'What is your main goal?',
			answerOptions: [
				{ answerText: 'Save Money', caterTo: ['lowInterest', true]},
				{ answerText: 'Build Credit', caterTo: []},
				{ answerText: 'Earn Rewards', caterTo: []},
			],
		},
		{
			questionText: 'Where does your credit score fall into?',
			answerOptions: [
				{ answerText: 'No Credit Score', caterTo: ['minCreditScore', 0]},
				{ answerText: '300-499', caterTo: ['minCreditScore', 499]},
				{ answerText: '500-699', caterTo: ['minCreditScore', 699]},
				{ answerText: '700-', caterTo: ['minCreditScore', 800]},
			],
		},
		{
			questionText: 'Is this your first credit card?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: [] },
				{ answerText: 'No', isCorrect: [] },
			],
		},
		{
			questionText: 'Are you a student?',
			answerOptions: [
				{ answerText: 'Yes', caterTo: ['forStudents', true]},
				{ answerText: 'No', caterTo: []},
			],
		},
    {
			questionText: 'Choose a bank you have established a history with.',
			answerOptions: [
				{ answerText: 'Capital One', caterTo: ['bank', 'Bank1']},
        { answerText: 'Wells Fargo', caterTo: ['bank', 'Bank2']},
		{ answerText: 'Citi', caterTo: ['bank', 'Bank2']},
		{ answerText: 'Another Bank', caterTo: ['bank', 'Bank1']},
		{ answerText: 'No history', caterTo: ['bank', 'Bank1']},
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
	var cards = [];

  function initializeData() { // add cards to list of cards
    cards.length = 0;
    // Card 1, for a student
    cards.push(new Card({
      name: "Card1", image:"", bank:"Bank1", 
      forStudents:true, lowInterest:true, hasCashBack:false, 
      annualFee:0,minCreditScore:0, forTravel:false
    }));

    cards.push(new Card({
      name: "Card2", image:"", bank:"Bank2", 
      forStudents:false, lowInterest:true, hasCashBack:true, 
      annualFee:50,minCreditScore:400, forTravel:false
    }));

    cards.push(new Card({
      name: "Card3", image:"", bank:"Bank2", 
      forStudents:false, lowInterest:false, hasCashBack:true, 
      annualFee:150,minCreditScore:690, forTravel:true
    }));

  }

  function filterCards(card, prop, val) {
    switch(prop) {
      case 'bank': cards = cards.filter(card.bank === val); return;
      case 'forStudents': cards = cards.filter(card.forStudents); return;
      case 'lowInterest': cards = cards.filter(card.lowInterest); return;
      case 'hasCashBack': cards = cards.filter(card.hasCashBack); return;
      case 'annualFee': cards = cards.filter(card.annualFee <= val); return;
      case 'minCreditScore': cards = cards.filter(card.minCreditScore <= val); return;
      case 'cardForTravel': cards = cards.filter(card.forTravel); return;
      default: return;
    }
  }

	const handleAnswerOptionClick = (caterTo) => {
    setScore(0);
		// for each card in cards, filter
    for (let i = 0; i < cards.length; i++) { // go through cards
      let card = cards[i];
      // go through properties to compare
      for (let propertyIdx = 0; propertyIdx < caterTo.length; propertyIdx ++) {
        let property = caterTo[propertyIdx][0];
        let value = caterTo[propertyIdx][1];
        filterCards(card, property, value);
      }

    }
		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					<ShowCard/>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.caterTo)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
