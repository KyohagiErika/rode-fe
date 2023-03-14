import styled from 'styled-components';

export const RoomStyle = styled.div`
    * {
        font-family: 'Quicksand', sans-serif;
    }
    .box-style {
        background: ${(props) => props.theme.colors.light};
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 1.6em;
    }
    .color-primary {
        color: ${(props) => props.theme.colors.primary2};
    }
    .color-secondary {
        color: ${(props) => props.theme.colors.grey2};
    }
    .bg-primary-1 {
        background-color: ${(props) => props.theme.colors.primary2};
    }

    .bg-primary-1:hover,
    .bg-primary-1:focus,
    .bg-primary-1:active,
    .bg-primary-1:visited {
        background-color: ${(props) => props.theme.colors.primary2};
        opacity: 0.8;
    }
    .dishover:hover {
        border-color: ${(props) => props.theme.colors.light};
    }
    .from-control:focus {
        color: ${(props) => props.theme.colors.grey3} !important;
    }
    input:focus,
    input:active,
    input:hover,
    input:visited {
        box-shadow: unset !important;
        outline: 0 !important;
    }
    .dropdown-toggle::after {
        display: none !important;
    }
    .bg-secondary-1 {
        color: ${(props) => props.theme.colors.dark};
        opacity: 0.7;
    }
    .btn-hover:hover {
        opacity: 1;
        transition: all 300ms;
    }
    .w-90 {
        width: 90%;
    }
    .w-5 {
        width: 5.2em;
    }
    .item-style:hover {
        background-color: ${(props) => props.theme.colors.primary2};
        color: ${(props) => props.theme.colors.light};
        transition: all 300ms;
    }
    .dropdown-style {
        background-color: ${(props) => props.theme.colors.light};
        color: ${(props) => props.theme.colors.grey2};
    }
    .dropdown-style:hover {
        background-color: ${(props) => props.theme.colors.primary2};
        color: ${(props) => props.theme.colors.light};
        border-color: ${(props) => props.theme.colors.primary2};
    }
    th,
    td {
        vertical-align: middle;
        word-break: keep-all;
    }
    th {
        font-weight: 800;
    }
    tr:not(:first-child):hover {
        background-color: ${(props) => props.theme.colors.grey};
    }
    .filter {
        &__menu {
            cursor: pointer;
        }
        &__option {
            background: ${(props) => props.theme.colors.light};
            color: ${(props) => props.theme.colors.dark};
        }
        &__option:hover {
            background-color: ${(props) => props.theme.colors.primary2};
            color: ${(props) => props.theme.colors.light};
        }
        &__option:focus {
            background-color: ${(props) => props.theme.colors.primary2};
        }
    }
    .cur-pointer {
        cursor: pointer;
    }
    .max-width {
        width: 19em;
    }
    .info:hover {
        background: ${(props) => props.theme.colors.grey2};
        color: ${(props) => props.theme.colors.light};
        cursor: pointer;
    }
    .w-98 {
        width: 98%;
    }
    .overflow-y-hidden {
        overflow-y: hidden;
    }
    .dropdown-style-2 {
        background-color: unset;
        border: none;
        &:hover {
            transform: scale(1.1);
        }
    }
    .dropdown-item:hover {
        background-color: ${(props) => props.theme.colors.primary2};
        color: ${(props) => props.theme.colors.light};
    }
    @media (max-width: 800px) {
        .rs {
            width: 70%;
            height: 70%;
        }

        .rfs {
            font-size: 0.8em;
        }
        th {
            font-size: 0.82em;
        }
        td {
            font-size: 0.75em;
        }
    }
`;
