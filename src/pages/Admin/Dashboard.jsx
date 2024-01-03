import React from 'react'
import Layout from '../Layout'
import Section from '../../components/Section'
import TextArea from '../../components/Form/TextArea'
import SubmitButton from '../../components/Form/SubmitButton'
import Input from '../../components/Form/Input'

function Dashboard() {
    return (
        <Layout>
            <Section>
                <div className='flex flex-col gap-5'>
                    <div className='w-[100px] flex flex-col gap-2'>
                        <img src="https://framerusercontent.com/images/oIyuUF3XQRzJcoPj4QE687vFhCo.jpg?scale-down-to=512" alt="" className='w-[100px] h-[100px] rounded-md object-cover' />
                        <input type="file" name="" id="image" className='hidden' />
                        <label htmlFor="image" className='w-full h-full cursor-pointer'>
                            Upload photo
                        </label>
                    </div>
                    <div className='flex gap-5 flex-col md:flex-row'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="" className='ml-2 text-customTextColor'>Name</label>
                            <Input value={"theshahul"} />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="" className='ml-2 text-customTextColor'>Title</label>
                            <Input value={"MERN Stack Developer"} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="" className='ml-2 text-customTextColor'>Welcome note</label>
                        <TextArea value={"Hey, I'm Shahul — I'm a Product Designer & No-Code Expert"} />
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="" className='ml-2 text-customTextColor'>Description</label>
                        <TextArea rows={5} value={"I am a seasoned product designer with 5 years of experience specializing in SaaS solutions, crafting user-centric experiences that drive innovation and efficiency."} />
                    </div>
                    <div className='flex gap-5'>
                        <SubmitButton>Discard</SubmitButton>
                        <SubmitButton>Save</SubmitButton>
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

export default Dashboard
