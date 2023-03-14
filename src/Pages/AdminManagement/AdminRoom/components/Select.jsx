import React from 'react';

import { Form } from 'react-bootstrap/esm';

import { RoomStyle } from '../style';

const options = [
    { label: 'All', id: 1 },
    { label: 'Public', id: 2 },
    { label: 'Private', id: 3 },
];
const SelectCustom = ({ props }) => {
    return (
        <RoomStyle>
            <div className="d-flex">
                <div className="p-2 rfs">{props.name}</div>
                <Form.Select className="rfs rs">
                    {options.map((item) => {
                        return <option key={item.id}>{item.label}</option>;
                    })}
                </Form.Select>
            </div>
        </RoomStyle>
    );
};
export default SelectCustom;
