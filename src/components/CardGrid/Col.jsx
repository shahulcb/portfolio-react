import React from 'react'

function Col({ children, colFor = "type1" }) {
    return (
        <div className={`${colFor == "type1" ? "w-full md:basis-1/2-gap-6 lg:basis-1/3-gap-6" : "w-full"}`}>
            {children}
        </div>
    )
}

export default Col
