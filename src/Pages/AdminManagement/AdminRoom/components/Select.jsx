import React from 'react';

import Select from 'react-select';

import { RoomStyle } from '../style';

const options = [
    { label: 'All', value: 1, className: 'item-style' },
    { label: 'Public', value: 2, className: 'item-style' },
    { label: 'Private', value: 3, className: 'item-style' },
];
const CustomStyles = {
    container: (base) => ({
        ...base,
        width: 'min-content',
        minWidth: '100%',
    }),
    option: (style) => ({
        ...style,
        cursor: 'pointer',
    }),
    control: (styles) => ({
        ...styles,
        cursor: 'pointer',
    }),
};
const SelectCustom = ({ props }) => {
    return (
        <RoomStyle>
            <div className="d-flex">
                <div className="p-2">{props.name}</div>
                <Select
                    options={options}
                    className="cur-pointer"
                    classNamePrefix="filter"
                    // menuIsOpen
                    // openMenuOnFocus
                    styles={CustomStyles}
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            primary: 'none',
                        },
                    })}
                ></Select>
            </div>
        </RoomStyle>
    );
};
export default SelectCustom;
