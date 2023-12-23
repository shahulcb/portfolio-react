import React from 'react'

function SocialButton({ children }) {
    return (
        <div className='border border-customBorderColor rounded-md w-12 h-12 flex items-center justify-center cursor-pointer text-customTextColor hover:bg-customHoverColor hover:text-white transition ease-in-out duration-500'>
            {children}
        </div>
    )
}

export default SocialButton
