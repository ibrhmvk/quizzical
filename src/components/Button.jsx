import React from 'react'

function Button({ value, onPress,disabled }) {

    console.log(disabled,'disabled')
    return (
        <button onClick={onPress} disabled={disabled} > 
         <div type="button" className={`inline-block px-6 py-2.5 bg-[#4D5B9E] text-white font-medium text-base font-inter leading-tight rounded shadow-md hover:bg-[#293264] hover:shadow-lg focus:bg-[#616db0] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ${disabled ? 'bg-slate-900':''} `}>{value}</div>
        </button>

    )
}

export default Button