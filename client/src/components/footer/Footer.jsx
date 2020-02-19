import React from 'react';
import { Container, Col, Row } from 'react-bootstrap'


const footStyle = {
    position: 'relative',
   top: '600px',
   
   
}

const footHead = {
    fontWeight: '700',
    fontSize: '20px',
    color: '#202B31',
    
}

const footSpace = {
    paddingRight: '30px',
    paddingLeft: '30px'
}



function Footer() {

    return (

        <footer style={footStyle}>


<Container>
    <Row style={footSpace}>

        <Col lg={3}>


            <div style={footHead}>Hello</div>

            </Col>

            <Col lg={3}>
            Hello

            </Col>

            <Col lg={3}>
            Hello

            </Col>

            <Col lg={3}>
            Hello

            </Col>

            </Row>

            </Container>
        </footer>

    )
}

export default Footer