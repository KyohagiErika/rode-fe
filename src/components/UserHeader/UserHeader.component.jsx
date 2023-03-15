import React from 'react';

import logo from '../../assets/Header/logo.svg';
import { Container, Hero, Left, Right } from './styled';

function UserHeader() {
    return (
        <Container>
            <Left>
                <img src={logo} alt="Logo SVG" />
                <Hero>R.ode battle</Hero>
            </Left>
            <Right>
                <Hero>
                    © 2023
                    <span> F-Code.</span> All rights reserved | Bao IS THE BEST
                </Hero>
            </Right>
        </Container>
    );
}

export default UserHeader;
