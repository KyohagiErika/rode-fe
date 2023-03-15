import React from 'react';

import UserHeader from '../UserHeader/UserHeader.component';
import { Container } from './styled';

function UserLayoutComponent({ children }) {
    return (
        <Container>
            <UserHeader></UserHeader>
            {children}
        </Container>
    );
}

export default UserLayoutComponent;
