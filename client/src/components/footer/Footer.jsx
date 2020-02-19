import React from 'react';
import { Container, Col, Row } from 'react-bootstrap'


const footStyle = {
    position: 'relative',
   top: '600px',
   
}

function Footer() {

    return (

        <footer style={footStyle}>


<Container>
    <Row>

        <Col lg={3}>
            Hello

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