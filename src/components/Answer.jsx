import React from 'react'

function Answer({ answer,  selectAnswer,selectedOptions ,question_index,correctAnswer,isChecking }) {
    let index = selectedOptions.findIndex(e => e.index == question_index)
    let bg_color = 'bg-slate-600'
    if(isChecking && answer == correctAnswer){
        bg_color = 'bg-lime-600'
    }else if(index > -1 && selectedOptions[index].selected === answer){
        bg_color = 'bg-blue-300'
    }
    const styles = index > -1 && selectedOptions[index].selected === answer ? {backgroundColor:'red'}:{backgroundColor:'blue'}
    return (
            <button type="button"  onClick={()=>selectAnswer(answer)} className={`inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mr-3 ${bg_color}`}>{answer}</button>
    )
}
export default Answer