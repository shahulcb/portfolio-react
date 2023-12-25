import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

function BackButton() {
    return (
        <div className='w-full text-base font-light text-customTextColor flex items-center gap-3 cursor-pointer hover:text-yellow-500 hover:gap-5 transition-all ease-in-out duration-500'>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Back</span>
        </div>
    )
}

export default BackButton
