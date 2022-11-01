import React from "react";
import PropTypes from "prop-types";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Redirect, useHistory } from "react-router-dom";

const loginSchema = Yup.object().shape({
    email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

const Loginform = ({ loged, fetching, onLogin }) => {

    const initialCredentials = {
        email: "",
        password: "",
    };
    
    const history = useHistory();

return (
    <Formik
        // INITIAL VALUES THAT THE FORM WILL TAKE
        initialValues={initialCredentials}
        /* YUP VALIDATION SCHEMA  */
        validationSchema={loginSchema}
        // ONSUBMIT EVENT
        onSubmit={async (values) => {
            onLogin(values.email, values.password)
        }}
    >
        {/* WE OBTAIN PROPS FROM FORMIK */}

        {({
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        }) => (
        <Form>
            <label htmlFor="email">Email</label>
            <Field
            id="email"
            type="email"
            name="email"
            placeholder="example@email.com"
            />

            {/* EMAIL ERRORS */}

            {errors.email && touched.email && (
            <ErrorMessage name="email" component="div"></ErrorMessage>
            )}

            <label htmlFor="password">Password</label>
            <Field
            id="password"
            name="password"
            placeholder="password"
            type="password"
            />

            {/* PASSWORD ERRORS */}

            {errors.password && touched.password && (
            <ErrorMessage name="password" component="div"></ErrorMessage>
            )}

            <button type="submit">Login</button>
            {fetching ? (<p>Loading...</p>) : null}
            {isSubmitting ? <p>Login your credentials...</p> : null}
        </Form>
        )}
    </Formik>
);
};

Loginform.propTypes = {
    loged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
};

export default Loginform;

