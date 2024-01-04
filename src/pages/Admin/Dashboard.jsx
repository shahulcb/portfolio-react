import React from 'react'
import Layout from '../Layout'
import Section from '../../components/Section'
import FormButton from '../../components/Form/FormButton'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

function Dashboard() {
    const initialValues = {
        name: 'theshahul',
        title: 'MERN Stack Developer',
        welcomeNote: "Hey, I'm Shahul — I'm a Product Designer & No-Code Expert",
        description: 'I am a seasoned product designer with 5 years of experience specializing in SaaS solutions, crafting user-centric experiences that drive innovation and efficiency.'
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('required'),
        title: Yup.string().required('required'),
        welcomeNote: Yup.string().required('required'),
        description: Yup.string().required('required')
    })
    const onSubmit = values => {
        console.log(values);
    }
    return (
        <Layout>
            <Section className={"border-none"}>
                <div className='flex gap-5 flex-col'>
                    <img src="https://framerusercontent.com/images/oIyuUF3XQRzJcoPj4QE687vFhCo.jpg?scale-down-to=512" alt="" className='w-[100px] h-[100px] rounded-md object-cover' />
                    <Formik initialValues={{ photo: '' }} validationSchema={Yup.mixed({ photo: Yup.object().required("required") })}>
                        {({ dirty, resetForm }) => (
                            <Form className='flex flex-col gap-5'>
                                <div className='form-control'>
                                    <label htmlFor="photo">Photo</label>
                                    <Field type="file" name="photo" id="photo" />
                                    <ErrorMessage component={"span"} name='photo' />
                                </div>
                                {dirty &&
                                    (
                                        <div className='flex gap-5'>
                                            <FormButton type={"button"} onClick={() => resetForm({ values: { photo: '' } })}>Discard</FormButton>
                                            <FormButton type={"submit"}>Save</FormButton>
                                        </div>
                                    )}
                            </Form>
                        )}
                    </Formik>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                    {({ dirty, resetForm }) => (
                        <Form>
                            <div className='flex flex-col gap-5'>
                                <div className='flex gap-5 flex-col md:flex-row'>
                                    <div className='form-control'>
                                        <label htmlFor="name">Name</label>
                                        <Field type="text" placeholder="Name" name="name" id="name" />
                                        <ErrorMessage component={"span"} name='name' />
                                    </div>
                                    <div className='form-control'>
                                        <label htmlFor="title">Title</label>
                                        <Field type="text" placeholder="Title" name="title" id="title" />
                                        <ErrorMessage component={"span"} name='title' />
                                    </div>
                                </div>
                                <div className='form-control'>
                                    <label htmlFor="welcomeNote">Welcome note</label>
                                    <Field type="text" placeholder="Welcome note" name="welcomeNote" id="welcomeNote" />
                                    <ErrorMessage component={"span"} name='welcomeNote' />
                                </div>
                                <div className='form-control'>
                                    <label htmlFor="description">Description</label>
                                    <Field as="textarea" rows="3" placeholder="Description" name="description" id="description" />
                                    <ErrorMessage component={"span"} name='description' />
                                </div>
                                {dirty &&
                                    (
                                        <div className='flex gap-5'>
                                            <FormButton type={"button"} onClick={() => resetForm({ values: initialValues })}>Discard</FormButton>
                                            <FormButton type={"submit"}>Save</FormButton>
                                        </div>
                                    )}
                            </div>
                        </Form>
                    )}
                </Formik>
            </Section>
        </Layout >
    )
}

export default Dashboard
