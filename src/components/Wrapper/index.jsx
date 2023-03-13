import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ScreenWrapper = ({ children }) => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={8} lg={6}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default ScreenWrapper;
