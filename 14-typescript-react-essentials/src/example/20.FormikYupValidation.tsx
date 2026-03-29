import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const App = () => {
  return (
    <div>
      <h1>Formik Form with Yup Validation</h1>
      <Formik
        initialValues={{ username: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form Submitted', values);
        }}
      >
        {() => (
          <Form>
            <div>
              <label>Username</label>
              <Field name="username" />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <label>Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;