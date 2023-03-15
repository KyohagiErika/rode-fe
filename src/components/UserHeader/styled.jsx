import styled from 'styled-components';

import { themes } from '../../themes';
import { device } from '../../utils/Breakpoints/index.jsx';

export const Container = styled.div`
    border: 0.711111px solid ${themes.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media ${device.tablet} {
        height: 50px;
    }
    @media ${device.laptop} {
        height: 60px;
    }

    @media ${device.laptopL} {
        height: 70px;
    }

    @media ${device.desktop} {
        height: 100px;
    }
`;

export const Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Right = styled.div`
    margin-right: 20px;
`;

export const Hero = styled.div`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;

    line-height: 35px;

    /* identical to box height */

    text-align: center;
    letter-spacing: 0.457143px;
    text-transform: uppercase;
    color: ${themes.colors.primary};

    span {
        font-weight: 800;
    }
    @media ${device.tablet} {
        font-size: 16px;
    }
    @media ${device.laptop} {
        font-size: 20px;
    }
    @media ${device.laptopL} {
        font-size: 22px;
    }
    @media ${device.desktop} {
        font-size: 24px;
    }
`;
