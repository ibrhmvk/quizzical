import React, { useState, useEffect } from 'react'
import Answer from './Answer'


function Question({ question,question_number, incorrectAnswers, correctAnswer  }) {

    const [answers, setAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    useEffect(() => {
        const newAnswers = [...incorrectAnswers];
        const randomIndex = Math.floor(Math.random() * 4);
        newAnswers.splice(randomIndex, 0, correctAnswer);
        setAnswers(newAnswers);
    }, []);


    const selectAnswer=(i)=>{
     setSelectedAnswer(i)
    }

    const answersElements = answers.map((item, index) => {
        return <Answer key={item}  answer={item} question_index={question_number}  selectAnswer={selectAnswer}/>
    })
    
    return (
        <div className="grid place-items-center">
            <div>
                <h1 className="font-karla text-base font-bold text-[#293264] leading-5" >{question_number}- {question}</h1>
                <div className="mt-5 flex justify-start items-center">
                    {answersElements}
                </div>
                <hr className="my-8"/>
            </div>
        </div>
    )
}

export default Question