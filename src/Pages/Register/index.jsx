import { useContext, useState } from 'react';

import { Formik } from 'formik';
import { Stack, Col, Container, Row } from 'react-bootstrap';
import { Form } from 'react-router-dom';

import { UserContext } from '../../Context/User.context';
import grid_img from '../../assets/Login/Gird.svg';
import logo from '../../assets/Login/Logo.svg';
import arrow_login from '../../assets/Login/arrow.svg';
import circle from '../../assets/Login/circle.svg';
import footer_left from '../../assets/Login/footer_left.svg';
import footer_right from '../../assets/Login/footer_right.svg';
import header from '../../assets/Login/header.svg';
import hexagonal from '../../assets/Login/hexagonal.svg';
import signal from '../../assets/Login/signal.svg';
import x_blue from '../../assets/Login/x-blue.svg';
import x_green from '../../assets/Login/x-green.svg';
import ButtonStyled from '../../components/Button';
import FormControl from '../../components/Formik/FormControl';
import authApi from '../../utils/api/authApi';
import { LoginStyle } from '../Login/style';
import { SchemaRegister } from './schema';
import { TitleStyled } from './styled';

import Button from 'react-bootstrap/Button';

function Register() {
    const { credential } = useContext(UserContext);
    const onSubmit = async (value) => {
        await authApi.register(value).then((res) => {
            console.log(res);
        });
        console.log(value);
    };
    return (
        <div>
            <LoginStyle>
                <Container className="d-flex justify-content-center">
                    <Row
                        lg={10}
                        className="w-80 bg-dark-secondary rounded-3 box-shadow-primary border border-2 border-dark"
                    >
                        <Col
                            xs={12}
                            md={8}
                            lg={6}
                            className="text-light d-flex flex-column justify-content-center align-items-center rounded-3 bc-primary"
                        >
                            <Stack className="justify-content-center align-items-start p-4" gap={3}>
                                <TitleStyled> Sign Up</TitleStyled>
                                <Formik
                                    validationSchema={SchemaRegister}
                                    onSubmit={onSubmit}
                                    initialValues={{
                                        email: '',
                                        fname: '',
                                        lname: '',
                                        studentId: '',
                                        phone: '',
                                        dob: '',
                                    }}
                                >
                                    {({
                                        handleSubmit,
                                        handleChange,
                                        values,
                                        touched,
                                        isValid,
                                        errors,
                                    }) => {
                                        return (
                                            <Form noValidate onSubmit={handleSubmit}>
                                                <Stack
                                                    direction="horizontal"
                                                    gap={5}
                                                    className="justify-content-center align-items-center"
                                                >
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
                                                </Stack>
                                                <Stack
                                                    direction="horizontal"
                                                    gap={5}
                                                    className="justify-content-between align-items-center"
                                                >
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
                                                        isInvalid={
                                                            touched.studentId && errors.studentId
                                                        }
                                                        message={errors.studentId}
                                                    />
                                                    <Stack>
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
                                                        />{' '}
                                                    </Stack>
                                                </Stack>
                                                {/* email */}
                                                <FormControl
                                                    control="input"
                                                    type="text"
                                                    placeholder="Your phone email"
                                                    label="Email"
                                                    controlId="email"
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    isInvalid={touched.email && errors.email}
                                                    message={errors.email}
                                                />
                                                {/* Phone */}
                                                <FormControl
                                                    control="input"
                                                    type="text"
                                                    placeholder="Your phone number"
                                                    label="Phone Number"
                                                    controlId="phone"
                                                    name="phone"
                                                    value={values.phone}
                                                    onChange={handleChange}
                                                    isInvalid={touched.phone && errors.phone}
                                                    message={errors.phone}
                                                />

                                                <ButtonStyled
                                                    type="submit"
                                                    disabled={!isValid}
                                                    className="mt-2"
                                                >
                                                    Submit
                                                </ButtonStyled>
                                            </Form>
                                        );
                                    }}
                                </Formik>
                            </Stack>
                        </Col>
                        <Col
                            sm={0}
                            md={0}
                            lg={6}
                            className="text-light d-flex flex-column justify-content-center align-items-center position-relative d-none d-lg-flex "
                        >
                            <div>
                                <img className="img-fluid" src={grid_img} alt="grid" />
                            </div>
                            <Row className=" position-absolute top-0 end-0">
                                <img className="img-fluid" src={header} alt="header" />
                            </Row>
                            <Row className=" position-absolute top-10 end-2">
                                <img className="img-fluid si-2" src={signal} alt="signal" />
                            </Row>
                            <Row className="position-absolute top-18 left-3">
                                <svg className="si-1">
                                    <circle cx="1em" cy="1em" r="0.9em" fill="#00e7aa"></circle>
                                </svg>
                            </Row>
                            <Row className="position-absolute top-25 left-1">
                                <svg className="si-1">
                                    <circle cx="1em" cy="1em" r="0.3em" fill="#00e7aa"></circle>
                                </svg>
                            </Row>
                            <Row className="position-absolute top-10 end-4">
                                <svg className="si-1">
                                    <circle cx="1em" cy="1em" r="0.45em" fill="#2e7dff"></circle>
                                </svg>
                            </Row>
                            <Row className="position-absolute top-30 end-3">
                                <svg className="si-1">
                                    <circle cx="1em" cy="1em" r="0.45em" fill="#2e7dff"></circle>
                                </svg>
                            </Row>
                            <Row className="position-absolute top-5 left-1">
                                <img className="img-fluid si-2" src={hexagonal} alt="hexagonal" />
                            </Row>
                            <Row className="position-absolute top-28 left-2">
                                <img className="img-fluid si-1" src={circle} alt="circle" />
                            </Row>
                            <Row className="position-absolute top-25 ">
                                <img className="img-fluid si-4" src={x_green} alt="x" />
                            </Row>
                            <Row className=" d-flex align-items-center justify-content-between position-absolute">
                                <Col xs={2} lg={1} className="d-flex justify-content-center">
                                    <img src={arrow_login} alt="arrow" className="si-1 mt-3" />
                                </Col>

                                <Col
                                    xs={10}
                                    lg={11}
                                    className="d-flex flex-column justify-content-center align-items-center"
                                >
                                    <div className="w-100 d-flex align-items-center justify-content-around">
                                        <Row className="fw-bold fs-0 color-primary ls-1">R.ODE</Row>
                                        <img
                                            className="img-fluid si-3"
                                            src={x_blue}
                                            alt="hexagonal"
                                        />
                                    </div>
                                    <Row className="ls-2 fw-bolder fs-0 text-stroke-1">BATTLE</Row>
                                </Col>
                            </Row>
                            <Row className="position-absolute left-2 bottom-23 rotate-1">
                                <div className="color-primary fs-1 fw-bold">2</div>
                            </Row>
                            <Row className="position-absolute left-4 bottom-13 rotate-3">
                                <div className="color-secondary fs-1 fw-bold">0</div>
                            </Row>
                            <Row className="position-absolute bottom-25 rotate-2">
                                <div className="color-secondary fs-1 fw-bold">2</div>
                            </Row>
                            <Row className="position-absolute end-5 bottom-15 rotate-4">
                                <div className="color-third fs-1 fw-bold">3</div>
                            </Row>
                            <Row className="position-absolute bottom-0 start-0">
                                <img className="img-fluid" src={footer_left} alt="footer-left" />
                            </Row>
                            <Row className="position-absolute bottom-24 end-2">
                                <img className="img-fluid si-2" src={hexagonal} alt="hexagonal" />
                            </Row>
                            <Row className="position-absolute bottom-5 end-2">
                                <svg className="si-1">
                                    <circle cx="1em" cy="1em" r="0.9em" fill="#2e7dff"></circle>
                                </svg>
                            </Row>
                            <Row className="position-absolute bottom-0 end-1">
                                <img
                                    className="img-fluid si-2"
                                    src={footer_right}
                                    alt="footer-right"
                                />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </LoginStyle>
        </div>
    );
}

export default Register;
