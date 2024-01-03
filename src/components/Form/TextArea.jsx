import React from 'react'

function TextArea({ name, rows, value, onChange = () => { }, placeholder }) {
    return (
        <textarea name={name} rows={rows} value={value} placeholder={placeholder} onChange={(event) => onChange(event)} className='w-full bg-customHoverColor border-none rounded-md focus:outline-none text-base text-white font-normal px-3 py-2 placeholder:text-customTextColor resize-none'>

        </textarea>
    )
}

export default TextArea
