import { Wrap } from './styled';

import Button from 'react-bootstrap/Button';

const ButtonStyled = ({ children, buttonType = 'base', ...otherProps }) => {
    return (
        <Wrap>
            <Button variant={buttonType} {...otherProps}>
                {children}
            </Button>
        </Wrap>
    );
};

export default ButtonStyled;
