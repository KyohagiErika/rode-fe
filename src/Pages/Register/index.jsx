import { useContext, useState } from 'react';

import { Formik } from 'formik';

import { UserContext } from '../../Context/User.context';
import FormControl from '../../components/Formik/FormControl';
import authApi from '../../utils/api/authApi';
import { SchemaRegister } from './schema';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {
    const { credential } = useContext(UserContext);
    const onSubmit = async (value) => {
        await authApi.register(value).then((res) => {
            console.log(res);
        });
        console.log(value);
    };
    return (
        credential && (
            <Formik
                validationSchema={SchemaRegister}
                onSubmit={onSubmit}
                initialValues={{
                    fname: credential.given_name,
                    lname: credential.family_name,
                    studentId: '',
                    phone: '',
                    dob: '',
                }}
            >
                {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => {
                    return (
                        <Form noValidate onSubmit={handleSubmit}>
                            {/* First Name */}
                            <FormControl
                                control="input"
                                type="text"
                                placeholder="Please enter your first name..."
                                label="First Name"
                                controlId="fname"
                                name="fname"
                                value={values.fname}
                                onChange={handleChange}
                                isInvalid={touched.fname && errors.fname}
                                message={errors.fname}
                            />

                            {/* Last Name */}
                            <FormControl
                                control="input"
                                type="text"
                                placeholder="Please enter your last name..."
                                label="Last Name"
                                controlId="lname"
                                name="lname"
                                value={values.lname}
                                onChange={handleChange}
                                isInvalid={touched.lname && errors.lname}
                                message={errors.lname}
                            />
                            {/* Student ID */}
                            <FormControl
                                control="input"
                                type="text"
                                placeholder="Please enter your Student ID..."
                                label="Student ID"
                                controlId="StudentID"
                                name="studentId"
                                value={values.studentId}
                                onChange={handleChange}
                                isInvalid={touched.studentId && errors.studentId}
                                message={errors.studentId}
                            />
                            {/* Phone */}
                            <FormControl
                                control="input"
                                type="number"
                                placeholder="Your phone number"
                                label="Phone Number"
                                controlId="phone"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                                isInvalid={touched.phone && errors.phone}
                                message={errors.phone}
                            />
                            {/* Dob */}
                            <FormControl
                                control="input"
                                type="date"
                                placeholder="Your phone number"
                                label="Date of Birth"
                                controlId="phone"
                                name="dob"
                                value={values.dob}
                                onChange={handleChange}
                                isInvalid={touched.dob && errors.dob}
                                message={errors.dob}
                            />
                            <Button variant="primary" type="submit" disabled={!isValid}>
                                Submit
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
        )
    );
}

export default Register;
