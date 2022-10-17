import React from 'react'
import Button from './button'

function Start({startQuiz}) {
    return (
        <div className="grid place-items-center h-screen">
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-karla font-bold text-[32px] text-[#293264]">Quizzical</h1>
                <p className="font-inter font-normal text-base text-[#293264] mt-1 mb-6">Awesome place to test your knwoledge</p>
                <div onClick={startQuiz}>
                <Button value="Start quiz" />
                </div>
                
            </div>
        </div>
    )
}

export default Start