import React, { useState, useEffect } from 'react'
import './App.css'
import { BlobBottom, BlobTop } from './assets/Assets'
import Question from './components/Question'
import { nanoid } from 'nanoid'
import Start from './components/Start'
import Button from './components/button'

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=5&type=multiple`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData.results);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    getData()

  }, [])
  console.log(data)

 

  const QuestionElement = data && data.map((item, index) => {
    return <Question key={index}
    question_number={index}
      question={item.question}
      incorrectAnswers={item.incorrect_answers}
      correctAnswer={item.correct_answer}
       />
  })

  return (
    <div className="h-screen bg-[#F5F7FB] relative">
      {loading && <div className="min-h-screen flex justify-center items-center bg-[#F5F7FB]">

        <div className="loader bg-[#dee5b0] p-5 rounded-full flex space-x-3">
          <div className="w-5 h-5 bg-gray-500 rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-gray-500 rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-gray-500 rounded-full animate-bounce"></div>
        </div>

      </div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {!quizStarted ? <Start startQuiz={() => setQuizStarted(prevState => !prevState)} /> :
        <div className='flex flex-col justify-between items-start h-screen ml-52 py-20 px-32'>
          {QuestionElement}
          <Button value="Check answers" />
        </div>}
      <div className="absolute top-0 right-0">
        <BlobTop />
      </div>
      <div className="absolute bottom-0 left-0">
        <BlobBottom />
      </div>
    </div>
  )
}

export default App
