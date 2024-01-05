import React from 'react'
import Section from '../../components/Section'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import FormButton from '../../components/Form/FormButton'
import * as Yup from "yup"

function Login() {
    const initialValues = {
        email: '',
        password: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().email("Enter valid email").required('required'),
        password: Yup.string().required('required').min(8, "Password must have at least 8 characters")
    })
    return (
        <Section className={"border-none max-w-[500px] mx-auto lg:px-0"}>
            <div className='flex flex-col gap-5'>
                <h1 className="text-[32px] font-normal lg:text-[40px]">Let's Login</h1>
                <p className='text-base text-customTextColor font-light'>Hello admin ! Welcome back</p>
            </div>
            <Formik initialValues={initialValues} validationSchema={validationSchema}>
                <Form>
                    <div className='flex flex-col gap-5'>
                        <div className='form-control'>
                            <label htmlFor="email">Email</label>
                            <Field type="email" placeholder="Email" name="email" />
                            <ErrorMessage component={'span'} name='email' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="password">Password</label>
                            <Field type="password" placeholder="Password" name="password" />
                            <ErrorMessage component={'span'} name='password' />
                        </div>
                        <FormButton type={"submit"}>Login</FormButton>
                    </div>
                </Form>
            </Formik>

        </Section>
    )
}

export default Login
