import React from 'react'

function SubmitButton({ children }) {
    return (
        <button type='submit' className='w-full h-[50px] bg-yellow-500 text-base font-semibold text-black hover:bg-yellow-600 border-none rounded-md transition ease-in-out duration-500'>
            {children}
        </button>
    )
}

export default SubmitButton
