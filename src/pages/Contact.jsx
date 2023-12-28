import React from 'react'
import Layout from "./Layout"
import Section from "../components/Section"
import Input from "../components/Form/Input"
import TextArea from "../components/Form/TextArea"
import SubmitButton from "../components/Form/SubmitButton"

function Contact() {
    return (
        <Layout>
            <Section className={"border-none max-w-[700px] mx-auto lg:px-0"}>
                <h1 className="text-[32px] font-normal lg:text-[40px]">Let's Chat</h1>
                <p className='text-base text-customTextColor font-light'>If you'd like to talk about a potential project or just say hi, send me a message or email me at <a href="" className='text-white hover:text-yellow-500 transition ease-in-out duration-500'>theshahulofcl@gmail.com</a></p>
                <form className='flex flex-col gap-3'>
                    <div className='flex gap-3'>
                        <Input type={"text"} placeholder={"First name"} />
                        <Input type={"text"} placeholder={"Last name"} />
                    </div>
                    <Input type={"email"} placeholder={"Email"} />
                    <TextArea placeholder={"Leave a comment here"} rows={5} />
                    <SubmitButton>Send Message</SubmitButton>
                </form>
            </Section>
        </Layout>
    )
}

export default Contact
