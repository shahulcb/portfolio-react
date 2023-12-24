import React from 'react'

function ToolButton({ imageSrc, title, tag }) {
    return (
        <div className='border border-customBorderColor rounded-md p-3 flex items-center gap-4 cursor-pointer hover:bg-customHoverColor transition ease-in-out duration-500'>
            <div className='w-9 h-9 rounded-sm'>
                <img src={imageSrc} alt="" className='rounded-sm' />
            </div>
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl font-normal'>{title}</h1>
                <p className='text-base font-light text-customTextColor'>{tag}</p>
            </div>
        </div>
    )
}
export default ToolButton
