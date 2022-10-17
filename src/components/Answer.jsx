import React from 'react'

function Answer({ answer,  selectAnswer,selectedOptions ,question_index,correctAnswer }) {
    let index = selectedOptions.findIndex(e => e.index == question_index)
    console.log(selectedOptions[index],'answer')
    const styles = index > -1 && selectedOptions[index].selected === answer ? {backgroundColor:'red'}:{backgroundColor:'blue'}
    return (
            <button type="button"  onClick={()=>selectAnswer(answer)} style={styles} className={`inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mr-3 ${isChecking && correctAnswer === answer ? 'bg-lime-600':''}`}>{answer}</button>
    )
}
export default Answer