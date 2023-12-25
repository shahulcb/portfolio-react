import React from 'react'

function Input({ type, placeholder, onChange = () => { }, name, value }) {
    return (
        <input type={type} placeholder={placeholder} onChange={(event) => onChange(event)} name={name} value={value} className='w-full h-[50px] bg-customHoverColor border-none rounded-md focus:outline-none text-base text-white font-normal px-3 py-2 placeholder:text-customTextColor' />
    )
}

export default Input
