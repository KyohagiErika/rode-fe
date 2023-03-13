import React from 'react';

import { Row } from 'react-bootstrap';

import FooterComponent from '../Footer/Footer.component';
import HeaderComponent from '../Header/Header.component';
import { ContainerLayout } from './styled';

const LayoutComponent = ({ children }) => {
    return (
        <ContainerLayout>
            <Row>
                <HeaderComponent />
            </Row>
            <Row xs={12}>
                <div className="site-layout-background ">{children}</div>
            </Row>
            <Row>
                <FooterComponent />
            </Row>
        </ContainerLayout>
    );
};

export default LayoutComponent;
