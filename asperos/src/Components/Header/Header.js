import { Container,Row,Col } from "react-bootstrap";
function Header(){
    return(
        // <h1>hello</h1>
        <Container>
            <Row>
                <Col md= {4} className="bg-primary text-white">
                <h1>Hello!</h1>
                </Col>
            </Row>
        </Container>
       
    );
}
export default Header;