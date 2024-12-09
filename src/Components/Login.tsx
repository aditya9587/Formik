import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
  interface Values {
    email: string,
    password: string
  }
  return (
    <div className='bg-blue-600 h-screen w-screen flex gap-5 flex-col items-center justify-center'>
      <h1 className='text-4xl text-white'>Login</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validate={(values: Values) => {
          const errors: Partial<Values> = {}
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
            errors.password = 'Password must be 8 characters or more'
          }
          return errors
        }}
        onSubmit={(values: Values, { setSubmitting }) => {
          setTimeout(() => {
            toast.success('Login successful')
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form className='flex flex-col gap-4 w-1/3'>
            <label htmlFor="email" className='text-white text-xl'>Email</label>
            <Field id="email" name="email" type="email" className='input-style' />
            <ErrorMessage name="email" className='text-red-600' />
            <label htmlFor="password" className='text-white text-xl'>Password</label>
            <Field id="password" name="password" type="password" className='input-style' />
            <ErrorMessage name="password" className='text-red-600' />
            <button type="submit" disabled={isSubmitting} className='bg-green-500 font-bold py-2 px-4 rounded p-2'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <p className='text-white text-xl'>Dont have an account <span className='text-red-500 cursor-pointer' onClick={() => window.location.href = '/signup'}>Singup</span></p>

    </div>
  )
}
