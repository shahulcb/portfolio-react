import React from 'react'

function BlogContentSection({ title, description }) {
    return (
        <div className='flex flex-col gap-4'>
            <h3 className='text-[28px] font-normal'>{title}</h3>
            <p className='text-base font-light text-customTextColor'>{description}</p>
        </div>
    )
}

export default BlogContentSection
