import * as Yup from 'yup';

export const SchemaRegister = Yup.object().shape({
    fname: Yup.string().required(),
    lname: Yup.string().required(),
    studentId: Yup.string().required(),
    phone: Yup.string().required(),
    dob: Yup.string().required(),
    // terms: Yup.bool().required().oneOf([true], 'Terms must be accepted'),
});
