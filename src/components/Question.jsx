import React, { useState, useEffect } from 'react'
import Answer from './Answer'


function Question({ question,question_number, incorrectAnswers,setSelected,selectedOptions,isChecking, correctAnswer  }) {

    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const newAnswers = [...incorrectAnswers];
        const randomIndex = Math.floor(Math.random() * 4);
        newAnswers.splice(randomIndex, 0, correctAnswer);
        setAnswers(newAnswers);
    }, []);


    const selectAnswer=(i)=>{
        let obj = {
            index:question_number,
            selected: i
        }
        setSelected(obj)
    }

    const answersElements = answers.map((item, index) => {
        return <Answer key={item}  id={item} answer={item} question_index={question_number} selectedOptions={selectedOptions} isChecking={isChecking} correctAnswer={correctAnswer}  selectAnswer={selectAnswer}/>
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