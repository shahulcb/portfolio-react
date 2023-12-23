import React from 'react'

function Button({ children }) {
    return (
        <div className='border border-customBorderColor w-full h-[50px] rounded-md flex justify-center items-center overflow-hidden cursor-pointer hover:bg-customHoverColor transition ease-in-out duration-500 group'>
            <div className='relative text-nowrap transition ease-in-out duration-500 group-hover:-translate-y-[50px]'>
                <span className=''>{children}</span>
                <span className='absolute top-[50px] left-0'>{children}</span>
            </div>
        </div>
    )
}

export default Button
