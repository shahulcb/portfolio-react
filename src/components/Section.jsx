import React from 'react'

function Section({ children, className }) {
    return (
        <section className={`flex flex-col gap-[50px] ${className}`} >
            {children}
        </section>
    )
}


export default Section
