import React from 'react'

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => {

    return(
    <div>
        <p className='number'>
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>
            {answers.map(answers => {
                <div>
                    <button disabled={userAnswer} onClick={callback}></button>
                    <span dangerouslySetInnerHTML={{__html: answers}}></span>
                </div>
            })}
        </div>
    </div>
    )
}

export default QuestionCard