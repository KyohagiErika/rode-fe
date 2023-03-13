import ArenaCSSCode from './components/ArenaCSSCode';
import RoomInfo from './components/RoomInfo';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ArenaCSS = () => {
    return (
        <Row className="px-2">
            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <Col xs={12} md={3} className="px-4">
                <RoomInfo />
            </Col>
            <Col xs={12} md={6} className="px-2">
                <ArenaCSSCode />
            </Col>
            <Col xs={12} md={3} className="px-2">
                xs=6 md=4
            </Col>
        </Row>
    );
};

export default ArenaCSS;
