import React from 'react'
import { Fade } from "react-awesome-reveal"

function Section({ children, className }) {
    return (
        <Fade duration={1000} delay={200}>
            <section className={`p-6 lg:p-12 flex flex-col gap-[50px] border-b border-customBorderColor bg-[#121212] ${className}`} >
                {children}
            </section>
        </Fade>
    )
}


export default Section
