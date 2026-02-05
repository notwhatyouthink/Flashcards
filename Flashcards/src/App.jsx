import './App.css';
import { useState } from 'react';
import Card from './components/Card';

const App = () => {

  const cards = [
    { question: "What does HTML stand for?", answer: "HyperText Markup Language" },
    { question: "What does CSS stand for?", answer: "Cascading Style Sheets" },
    { question: "What is a variable?", answer: "A container for storing data values" },
    { question: "What does API stand for?", answer: "Application Programming Interface" },
    { question: "What is a function?", answer: "A reusable block of code that performs a specific task" },
    { question: "What does SQL stand for?", answer: "Structured Query Language" },
    { question: "What is debugging?", answer: "The process of finding and fixing errors in code" },
    { question: "What is Git?", answer: "A version control system for tracking changes in code" },
    { question: "What does JSON stand for?", answer: "JavaScript Object Notation" },
    { question: "What is React?", answer: "A JavaScript library for building user interfaces" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  }

  const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentIndex(randomIndex);
    setIsFlipped(false);
  }

  return (
    <div className="App">
      <h1>🧠 Computer Science Flashcards</h1>
      <h3>Test your CS knowledge! Sharnica Jeudy Z23582376</h3>
      <h4>Number of cards: {cards.length}</h4>

      <Card 
        question={cards[currentIndex].question}
        answer={cards[currentIndex].answer}
        isFlipped={isFlipped}
        onCardClick={handleCardClick}
      />

      <button onClick={handleNextCard}>Next Card →</button>
    </div>
  )
}

export default App;
