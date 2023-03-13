import { Field } from 'formik';

import { WrapperInput } from './styled';

import Form from 'react-bootstrap/Form';

export const BootstrapInput = ({ label, type, placeholder, controlId, message, name, ...rest }) => {
    return (
        <div>
            <Form.Group className="mb-3" controlId={controlId}>
                {label && <Form.Label>{label}</Form.Label>}

                <Form.Control
                    as={Field}
                    type={type}
                    size="xxl"
                    placeholder={placeholder}
                    name={name}
                    {...rest}
                />
                <Form.Control.Feedback type="invalid">{message}</Form.Control.Feedback>
            </Form.Group>
        </div>
    );
};
