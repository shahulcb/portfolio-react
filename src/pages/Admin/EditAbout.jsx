import React from 'react'
import Layout from '../Layout'
import Section from '../../components/Section'
import FormButton from '../../components/Form/FormButton'
import TextArea from '../../components/Form/TextArea'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"

function EditAbout() {
    const aboutDescription = `With a background in product design, I thrive on crafting digital experiences that seamlessly blend aesthetics, functionality, and user-centered design principles. My journey in the world of design has equipped me with a keen eye for detail, a deep understanding of user behavior, and the ability to transform complex concepts into intuitive, visually appealing products.

What sets me apart is my expertise in no-code development. I believe that technology should be accessible to all, regardless of technical expertise. By harnessing the potential of no-code tools, I bridge the gap between design and implementation, bringing concepts to life without the need for traditional coding. My proficiency in various no-code platforms empowers me to rapidly prototype, iterate, and build functional applications that resonate with users.
    `
    return (
        <Layout>
            <Section>
                <div className='flex flex-col gap-5'>
                    <img src="https://framerusercontent.com/images/iRzmTweh5r606MPztBlitVggyps.webp" alt="" className='max-h-[400px] w-full object-cover rounded-md' />
                    <Formik initialValues={{ aboutPhoto: '' }} validationSchema={Yup.mixed({ phaboutPhotooto: Yup.object().required("required") })}>
                        {({ dirty, resetForm }) => (
                            <Form className='flex flex-col gap-5'>
                                <div className='form-control'>
                                    <label htmlFor="aboutPhoto">Photo</label>
                                    <Field type="file" name="aboutPhoto" id="aboutPhoto" />
                                    <ErrorMessage component={"span"} name='aboutPhoto' />
                                </div>
                                {dirty &&
                                    (
                                        <div className='flex gap-5'>
                                            <FormButton type={"button"} onClick={() => resetForm({ aboutPhoto: { photo: '' } })}>Discard</FormButton>
                                            <FormButton type={"submit"}>Save</FormButton>
                                        </div>
                                    )}
                            </Form>
                        )}
                    </Formik>
                    <Formik initialValues={{ aboutDescription: aboutDescription }} validationSchema={Yup.object({ aboutDescription: Yup.string().required("required") })}>
                        {({ dirty, resetForm }) => (
                            <Form className='flex flex-col gap-5'>
                                <div className='form-control'>
                                    <label htmlFor="aboutDescription">Description</label>
                                    <Field as="textarea" rows={15} placeholder="Description" name="aboutDescription" id="aboutDescription" />
                                    <ErrorMessage component={'span'} name='aboutDescription' />
                                </div>
                                {dirty && (
                                    <div className='flex gap-5'>
                                        <FormButton type={"button"} onClick={() => resetForm({ aboutDescription: '' })}>Discard</FormButton>
                                        <FormButton type={"submit"}>Save</FormButton>
                                    </div>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </Section>
        </Layout >
    )
}

export default EditAbout
