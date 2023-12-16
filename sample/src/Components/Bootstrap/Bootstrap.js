import { Container, Row, Col } from "react-bootstrap";

function Bootstrap() {
    return (
        <Container>
            <Row>
                <Col md = {4} className="bg-primary text-white">
                    <h1>Hello</h1>
                </Col>
            </Row>
        </Container>
    );
}
export default Bootstrap;