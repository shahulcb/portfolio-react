import React from 'react'
import Layout from "../Layout"
import Section from "../../components/Section"
import SubmitButton from "../../components/Form/SubmitButton"
import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup';

function Contact() {
    const initialValues = {
        name: '',
        email: '',
        comment: ''
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Please enter your name'),
        email: Yup.string().required('Please enter your email').email('Email format is invaid'),
        comment: Yup.string().required('Please enter a comments')
    })
    const onSubmit = values => {
        console.log(values);
    }
    return (
        <Layout>
            <Section className={"border-none max-w-[700px] mx-auto lg:px-0"}>
                <h1 className="text-[32px] font-normal lg:text-[40px]">Let's Chat</h1>
                <p className='text-base text-customTextColor font-light'>If you'd like to talk about a potential project or just say hi, send me a message or email me at <a href="" className='text-white hover:text-yellow-500 transition ease-in-out duration-500'>theshahulofcl@gmail.com</a></p>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-3 flex-col md:flex-row'>
                                <div className='form-control'>
                                    <label htmlFor='name'>Name</label>
                                    <Field type="text" placeholder="name" name="name" id="name" />
                                    <ErrorMessage name='name' component="span" />
                                </div>
                                <div className='form-control'>
                                    <label htmlFor='email'>Email</label>
                                    <Field type="email" placeholder="Eamil" name="email" id="email" />
                                    <ErrorMessage name='email' component="span" />
                                </div>
                            </div>
                            <div className='form-control'>
                                <label htmlFor='comment'>Leave a comment here</label>
                                <Field as="textarea" rows={5} placeholder="Leave a comment here" name="comment" id="comment" />
                                <ErrorMessage name='comment' component="span" />
                            </div>
                            <SubmitButton>Send</SubmitButton>
                        </div>
                    </Form>
                </Formik>
            </Section>
        </Layout>
    )
}

export default Contact
