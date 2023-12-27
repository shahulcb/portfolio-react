import React from 'react'

function Section({ children, className }) {
    return (
        <section className={`p-6 lg:p-12 flex flex-col gap-[50px] border-b border-customBorderColor ${className}`} >
            {children}
        </section>
    )
}


export default Section
