import styled from 'styled-components';

export const Box = styled.div`
    color: ${(props) => props.theme.colors.light};
    padding: 10px 20px;
    background-color: ${(props) => props.theme.colors.arenaBG};
    border: 1px solid #00e7aa;
    box-shadow: 0px 2px 15px #00c994;
    border-radius: 10px;

    .expired-notice {
        text-align: center;
        padding: 1rem;
        border-radius: 0.25rem;
        margin: 0.5rem;
    }

    .expired-notice > span {
        font-size: 2.5rem;
        font-weight: bold;
        color: red;
    }

    .expired-notice > p {
        font-size: 1.5rem;
    }

    .show-counter .countdown-link {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        border-radius: 0.25rem;
        font-size: 18px;
        text-decoration: none;
        color: #fff;
    }

    .show-counter .countdown {
        line-height: 1.25rem;
        padding: 0 0.75rem 0 0.75rem;
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    .show-counter .countdown.danger {
        color: #ff0000;
    }

    .show-counter .countdown > p {
        margin: 0;
    }

    .show-counter .countdown > span {
        text-transform: uppercase;
        font-size: 0.75rem;
        line-height: 1rem;
    }
`;

export const InfoItem = styled.div`
    margin-bottom: 30px;
`;

export const Title = styled.div`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: 28px;
    /* identical to box height */

    letter-spacing: 0.457143px;
    text-transform: uppercase;

    /* Yellow */

    color: #f9c41c;
    text-shadow: 0px 1px 3px #f9c41c;
    margin-bottom: 10px;
`;
export const BoxChild = styled.div`
    text-align: center;
    border: 1px solid #2e7dff;
    border-radius: 8px;
    padding: 1rem;
`;
export const BoxColor = styled.div`
    overflow-y: scroll;
    width: 100%;
    height: 100px;
`;
export const CircleColor = styled.div`
    --size: 20px;
    width: var(--size);
    height: var(--size);
    border-radius: 50px;
    background-color: ${(props) => props.color};
`;
export const ColorItem = styled.div`
    margin: 12px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    & span {
        margin-left: 6px;
        text-transform: uppercase;
    }
`;
export const ScoreText = styled.span`
    font-weight: 700;
`;
export const BoxEditor = styled.div`
    width: 100%;
    height: calc(100vh - 290px);

    color: ${(props) => props.theme.colors.light};
    /* padding: 10px 20px; */
    background-color: ${(props) => props.theme.colors.arenaBG};
    border: 1px solid #00e7aa;
    box-shadow: 0px 2px 15px #00c994;
    border-radius: 10px;
    overflow: hidden;
    .ͼo {
        background-color: transparent;
        & .cm-gutters {
            background-color: transparent;
        }
    }
`;

export const TextStyled = styled.div`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.457143px;
    text-transform: uppercase;

    /* button */

    color: #00e7aa;

    text-shadow: 0px 0px 4px #00c994;
`;
export const TextSmall = styled(TextStyled)`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.457143px;
    text-transform: lowercase;

    /* Yellow */

    color: #f9c41c;
`;
export const LabelStyled = styled.label`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.457143px;
    text-transform: lowercase;

    /* Yellow */

    color: #f9c41c;
`;

// OUTPUT CSS BATTLE
export const BoxOutput = styled.div`
    color: ${(props) => props.theme.colors.light};
    /* padding: 10px 20px; */
    background-color: ${(props) => props.theme.colors.arenaBG};
    border: 1px solid #00e7aa;
    box-shadow: 0px 2px 15px #00c994;
    /* border-radius: 10px; */
    .img-layer {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        height: 300px;
    }
    .output-container {
        position: relative;
        width: 400px;
        height: 300px;
        background: transparent;
        z-index: 20;
        overflow: hidden;
    }
    .iframe-output {
        border: none;
        background: white;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        overflow: hidden;
    }
    .output-layer {
        border: none;
        width: 400px;
        height: 300px;
        background: transparent;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 20;
        overflow: hidden;
    }
`;

export const Target = styled.div`
    max-width: 100vw;

    img {
        width: 400px;
        height: 300px;
    }
`;

// export const TargetContent = styled(OutPutContent)`
//     height: 130%;
// `;
