import React from 'react'
import Layout from "./Layout"
import Section from '../components/Section'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

function About() {
    return (
        <Layout>
            <Section className={"border-none max-w-[700px] mx-auto lg:px-0"}>
                <h1 className="text-[32px] font-normal lg:text-[40px]">About</h1>
                <div className='flex flex-col gap-4'>
                    <p className='text-base font-light'>I'm a passionate and innovative product designer with a flair for creating exceptional user experiences and a knack for turning ideas into reality using the power of no-code solutions.</p>
                    <img src="https://framerusercontent.com/images/iRzmTweh5r606MPztBlitVggyps.webp" alt="" className='max-h-[400px] w-full object-cover rounded-md' />
                </div>
                <p className='text-base font-light text-customTextColor'>With a background in product design, I thrive on crafting digital experiences that seamlessly blend aesthetics, functionality, and user-centered design principles. My journey in the world of design has equipped me with a keen eye for detail, a deep understanding of user behavior, and the ability to transform complex concepts into intuitive, visually appealing products.</p>
                <p className='text-base font-light text-customTextColor'>What sets me apart is my expertise in no-code development. I believe that technology should be accessible to all, regardless of technical expertise. By harnessing the potential of no-code tools, I bridge the gap between design and implementation, bringing concepts to life without the need for traditional coding. My proficiency in various no-code platforms empowers me to rapidly prototype, iterate, and build functional applications that resonate with users.</p>
                <p className='text-base font-light text-customTextColor'>Whether it's crafting captivating user interfaces, optimizing user flows, or bringing an app from concept to fruition, I'm dedicated to delivering high-quality design solutions that not only meet but exceed expectations. My commitment to staying updated with the latest design trends and no-code advancements ensures that my work is always at the forefront of innovation.</p>
                <p className='text-base font-light text-customTextColor'>I invite you to explore my portfolio, where you'll discover a collection of projects that showcase my versatility as a product designer and my mastery of no-code tools. From user-centered mobile apps to visually striking web interfaces, each project reflects my passion for creating meaningful experiences that leave a lasting impact.</p>
                <Link to={"/contact"}>
                    <Button>Let's Talk</Button>
                </Link>
            </Section>
        </Layout>
    )
}

export default About
