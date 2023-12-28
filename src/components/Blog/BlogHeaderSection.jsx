import React from 'react'

function BlogHeaderSection({ tag, title }) {
    return (
        <div className='flex flex-col gap-4'>
            <p className='text-xs font-medium text-yellow-500'>{tag}</p>
            <h1 className='text-[40px] font-normal leading-[120%]'>{title}</h1>
        </div>
    )
}

export default BlogHeaderSection
