import React from 'react'

function Card({ cardType, tag, title }) {
    return (
        <div className={`w-full h-full rounded-md flex ${cardType === "type1" ? "flex-col" : "flex-col lg:flex-row"} gap-4 cursor-pointer group`}>
            <div className={`${cardType === "type1" ? "w-full h-80" : "h-80 w-full lg:h-40 lg:w-60"} rounded-md overflow-hidden`}>
                <img src="https://framerusercontent.com/images/isuy4zvThkzCNgjg9FrXesN4DJA.webp" alt="" className='w-full h-full object-cover rounded-md group-hover:scale-110 transition-all ease-in-out duration-500' />
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-customTextColor text-xs font-medium'>{tag}</p>
                <h3 className='text-xl font-normal group-hover:text-yellow-500 transition-all ease-in-out duration-500'>{title}</h3>
            </div>
        </div>
    )
}

export default Card
