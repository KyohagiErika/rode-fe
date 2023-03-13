import styled from 'styled-components';

export const RoomStyle = styled.div`
    * {
        font-family: 'Quicksand', sans-serif;
    }
    .box-style {
        background: #ffffff;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }
    .color-primary {
        color: #00e7aa;
    }
    .color-secondary {
        color: #6c757d;
    }
    .bg-primary-1 {
        background-color: #00e7aa;
    }

    .bg-primary-1:hover,
    .bg-primary-1:focus,
    .bg-primary-1:active,
    .bg-primary-1:visited {
        background-color: #00e7aa;
        opacity: 0.8;
    }
    .dishover:hover {
        border-color: white;
    }
    .from-control:focus {
        color: #495057 !important;
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
        color: #000;
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
        background-color: #00e7aa;
        color: white;
        transition: all 300ms;
    }
    .dropdown-style {
        background-color: white;
        color: #6c757d;
    }
    .dropdown-style:hover {
        background-color: #00e7aa;
        color: white;
        border-color: #00e7aa;
    }
    th,
    td {
        vertical-align: middle;
        word-break: keep-all;
    }
    .filter {
        &__menu {
            cursor: pointer;
        }
        &__option {
            background: white;
            color: black;
        }
        &__option:hover {
            background-color: #00e7aa;
            color: white;
        }
        &__option:focus {
            background-color: #00e7aa;
        }
    }
    .cur-pointer {
        cursor: pointer;
    }
    .max-height {
        max-height: 10em;
        min-height: 1em;
    }
    .max-width {
        width: 19em;
    }
    .info:hover {
        background: #6c757d;
        color: white;
        cursor: pointer;
    }
`;
