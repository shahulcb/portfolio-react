import React from 'react'
import Layout from '../Layout'
import Section from '../../components/Section'
import SubmitButton from '../../components/Form/SubmitButton'
import TextArea from '../../components/Form/TextArea'

function EditAbout() {
    return (
        <Layout>
            <Section>
                <div className='flex flex-col gap-5'>
                    <img src="https://framerusercontent.com/images/iRzmTweh5r606MPztBlitVggyps.webp" alt="" className='max-h-[400px] w-full object-cover rounded-md' />
                    <SubmitButton>Change photo</SubmitButton>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="" className='ml-2 text-customTextColor'>Description</label>
                        <TextArea rows={10} value={`With a background in product design, I thrive on crafting digital experiences that seamlessly blend aesthetics, functionality, and user-centered design principles. My journey in the world of design has equipped me with a keen eye for detail, a deep understanding of user behavior, and the ability to transform complex concepts into intuitive, visually appealing products.
                        
                        What sets me apart is my expertise in no-code development. I believe that technology should be accessible to all, regardless of technical expertise. By harnessing the potential of no-code tools, I bridge the gap between design and implementation, bringing concepts to life without the need for traditional coding. My proficiency in various no-code platforms empowers me to rapidly prototype, iterate, and build functional applications that resonate with users.
                        `} />
                    </div>
                    <div className='flex gap-5'>
                        <SubmitButton>Discard</SubmitButton>
                        <SubmitButton>Save</SubmitButton>
                    </div>
                </div>
            </Section>
        </Layout >
    )
}

export default EditAbout
