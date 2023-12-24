import React from 'react'

function Section({ children }) {
    return (
        <section className="flex flex-col gap-[50px]" >
            {children}
        </section>
    )
}


export default Section
