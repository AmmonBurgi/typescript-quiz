import React, {useState} from 'react';
import {fetchQuizQuestions} from './API'
import QuestionCard from './Components/QuestionCard'

//Types
import {Difficulty} from './API'

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setloading] = useState(false);
  const [questions, setQuestion] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true)

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className='start' onClick={startTrivia}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p className=''>Loading Questions...</p>
      {/* <QuestionCard
      questionNr={number + 1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
      /> */}
      <button className='next' onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
