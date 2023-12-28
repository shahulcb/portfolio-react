import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function WorkContentSection({ title, content }) {
    return (
        <div className='flex gap-8 flex-col lg:flex-row'>
            <div className='flex-1'>
                <h1 className='text-[28px] font-normal flex items-center gap-5'>
                    <FontAwesomeIcon icon={faSquare} color='#eab308' width={"20px"} />
                    {title}
                </h1>
            </div>
            <div className='flex-1 flex flex-col gap-4'>
                {content?.map((item, index) => (
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-xl font-normal'>{item.title}</h3>
                        <p className='text-base font-light text-customTextColor'>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkContentSection
