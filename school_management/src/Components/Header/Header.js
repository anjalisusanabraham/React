import { useState } from 'react';
import './Header.css';
import { Container,Row,Col } from 'react-bootstrap';
function Header(props){
    const[msg,setMsg] = useState('Hello World');
    return(
        <div>
            <Container>
                <Row>
                    <Col md={4} className="bg-primary text-white">
                        <h1>hiiiii</h1>
                    </Col>
                </Row>
            </Container>
       <h1 className='head'>this is my Header function</h1>

       {/* <p>{props.fname}{props.lname}</p> */}
       <p>{msg}</p>
      
       </div>
    )
}

export default Header;