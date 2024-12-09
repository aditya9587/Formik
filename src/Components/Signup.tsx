import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { toast } from 'react-toastify'

export default function Signup() {

  interface Values {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-10 bg-blue-600   w-screen'>
      <h1 className='text-4xl text-white'>Signup</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validate={(values: Values) => {
          const errors: Partial<Values> = {}
          if (!values.name) {
            errors.name = 'Required'
          }
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          if (!values.password) {
            errors.password = 'Required'
          } else if (values.password.length < 8) {
            errors.password = 'Must be 8 characters or more'
          }
          if (!values.confirmPassword) {
            errors.confirmPassword = 'Required' 
          } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            toast.success('Signup successful')
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form className='flex flex-col gap-5 w-1/3  '>
            <div>
              <label htmlFor="name" className='text-white text-xl'>Name</label>
              <Field type="text" name="name"  className='input-style'/>
              <ErrorMessage name="name" component="div" className='text-red-500' />
            </div>
            <div>
              <label htmlFor="email" className='text-white text-xl'>Email</label>
              <Field type="email" name="email" className='input-style'/>
              <ErrorMessage name="email" component="div" className='text-red-500'/>
            </div>
            <div>
              <label htmlFor="password" className='text-white text-xl'>Password</label>
              <Field type="password" name="password" className='input-style'/>
              <ErrorMessage name="password" component="div" className='text-red-500'/>
            </div>
            <div>
              <label htmlFor="confirmPassword" className='text-white text-xl'>Confirm Password</label> 
              <Field type="password" name="confirmPassword" className='input-style'/>
              <ErrorMessage name="confirmPassword" component="div" className='text-red-500'/>
            </div>
            <button type="submit" disabled={isSubmitting} className='bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
              Submit
            </button>
          </Form>
      )}
      </Formik>
      <p className='text-white text-xl'>Already have an account? <span onClick={() => { window.location.href = '/' }} className='text-red-500 cursor-pointer'>Login</span></p>
    </div>
  )
}
