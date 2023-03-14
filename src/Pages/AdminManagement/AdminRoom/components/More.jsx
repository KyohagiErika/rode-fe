import * as React from 'react';

import { Dropdown, DropdownButton } from 'react-bootstrap/esm';

const actions = [
    { id: 1, href: '#', value: 'View' },
    { id: 2, href: '#', value: 'Edit' },
    { id: 3, href: '#', value: 'Delete' },
];
const More = () => {
    return (
        <>
            <DropdownButton
                align="start"
                variant="outline"
                title={<i className="bi bi-three-dots-vertical bg-secondary-1 btn-hover"></i>}
                style={{ width: '50px' }}
                bsPrefix="w-75 d-flex justify-content-center dropdown-style-2 w-50"
            >
                {actions.map((item) => {
                    return (
                        <Dropdown.Item
                            key={item.id}
                            eventKey={item.id}
                            href={item.href}
                            className="w-100"
                        >
                            {item.value}
                        </Dropdown.Item>
                    );
                })}
            </DropdownButton>
        </>
    );
};
export default More;
