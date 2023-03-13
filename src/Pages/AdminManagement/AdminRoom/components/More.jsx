import * as React from 'react';

import { Button, Col, OverlayTrigger, Popover, Row } from 'react-bootstrap';

import { RoomStyle } from '../style';

const popoverRight = (
    <Popover>
        <RoomStyle>
            <Col className="w-5">
                <Row className="d-flex justify-content-center">
                    <Button
                        className="rounded-0 border-0 item-style w-75 rounded-top"
                        variant="item-style"
                    >
                        View
                    </Button>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Button className="rounded-0 border-0 item-style w-75" variant="outline">
                        Edit
                    </Button>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Button
                        className="rounded-0 border-0 item-style w-75 rounded-bottom"
                        variant="outline"
                    >
                        Delete
                    </Button>
                </Row>
            </Col>
        </RoomStyle>
    </Popover>
);
const More = () => {
    return (
        <OverlayTrigger trigger="focus" placement="right" overlay={popoverRight}>
            <Button variant="outline border-0">
                <i className="bi bi-three-dots-vertical bg-secondary-1 btn-hover"></i>
            </Button>
        </OverlayTrigger>
    );
};
export default More;
