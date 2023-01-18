import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

import useEmail from '../../hooks/useEmail/useEmail'
import Loader from '../Loader/Loader'

export type ContactValues = {
  fullName: string
  email: string
  message: string
}

const CustomField = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>
) => (
  <input
    className={
      'block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-sky-400 border border-gray-100 bg-gray-800 py-2 px-4'
    }
    {...props}
  />
)

const CustomTextarea = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLTextAreaElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
) => (
  <textarea
    className={
      'block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-sky-400 border border-gray-100 bg-gray-800 py-2 px-4'
    }
    {...props}
  />
)

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required')
})

const ContactForm = () => {
  const { loading, submitted, setSubmitted, error, sendEmail } = useEmail(
    process.env.REACT_APP_HEROTOFU_URL || ''
  )

  if (submitted) {
    toast('Email sent!')
    setSubmitted(false)
  }

  return (
    <section className='container max-w-md mx-auto'>
      <h2 className='text-4xl font-bold text-center mt-24'>Get in touch!</h2>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          message: ''
        }}
        validationSchema={validationSchema}
        onSubmit={sendEmail}
      >
        {({ errors, touched }) => {
          const submitDisabled =
            Object.keys(errors).length > 0 || Object.keys(touched).length <= 0
          return (
            <Form className='flex flex-col mt-2'>
              <div>
                <label htmlFor='fullName' className='block mb-1'>
                  Full Name
                </label>
                <Field
                  id='fullName'
                  name='fullName'
                  type='text'
                  placeholder='John Smith'
                  as={CustomField}
                />
                {touched.fullName && errors.fullName ? (
                  <div className='my-1 text-red-400 text-sm'>
                    {errors.fullName}
                  </div>
                ) : (
                  <div className='h-7' />
                )}
              </div>

              <div>
                <label htmlFor='email' className='block mb-1'>
                  Email
                </label>
                <Field
                  id='email'
                  name='email'
                  type='email'
                  placeholder='example@domain.com'
                  as={CustomField}
                />
                {touched.email && errors.email ? (
                  <div className='my-1 text-red-400 text-sm'>
                    {errors.email}
                  </div>
                ) : (
                  <div className='h-7' />
                )}
              </div>

              <div>
                <label htmlFor='message' className='block mb-1'>
                  Message
                </label>
                <Field
                  id='message'
                  name='message'
                  type='textarea'
                  rows={3}
                  as={CustomTextarea}
                />
                {touched.message && errors.message ? (
                  <div className='my-1 text-red-400 text-sm'>
                    {errors.message}
                  </div>
                ) : (
                  <div className='h-7' />
                )}
              </div>

              {error && (
                <div className='mb-6 text-red-400 text-sm'>
                  {`Unexpected error: ${error}`}
                </div>
              )}

              <button
                type='submit'
                disabled={submitDisabled}
                className={`self-center px-8 py-3 text-lg rounded focus:ring focus:ring-opacity-75 text-gray-900 font-medium focus:ring-sky-400 hover:ring-sky-400 ${
                  submitDisabled
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-sky-400 hover:ring'
                }`}
              >
                {loading ? <Loader /> : <>Submit</>}
              </button>
            </Form>
          )
        }}
      </Formik>
    </section>
  )
}

export default ContactForm
