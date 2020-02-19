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
    marginTop: '31px',
    marginBottom: '31px'
    
}

const footSpace = {
    paddingRight: '0px',
    paddingLeft: '50px'
}

const linkStyles = {
    fontSize: '16px',
    color: '#858585',
}

const linkDiv = {
    marginBottom: '15px'
}


function Footer() {

    return (

        <footer style={footStyle}>


<Container>
    <Row style={footSpace}>

        <Col lg={3}>


            <a href="#"><div style={footHead}>Buy</div></a>

            <a href="#" style={linkStyles}><div style={linkDiv}>Registration</div></a>
            <a href="#" style={linkStyles}><div style={linkDiv}>Money back guarantee</div></a>
            <a href="#" style={linkStyles}><div style={linkDiv}>Locations</div></a>

            </Col>

            <Col lg={3}>
            <a href="#"><div style={footHead}>Sell</div></a>

            <a href="#" style={linkStyles}><div style={linkDiv}>Start Selling</div></a>
            <a href="#" style={linkStyles}><div style={linkDiv}>How to sell</div></a>
            <a href="#" style={linkStyles}><div style={linkDiv}>Affiliates</div></a>


            </Col>

            <Col lg={3}>
            <a href="#"><div style={footHead}>Stay Connected</div></a>

            <a href="#" style={linkStyles}><div style={linkDiv}>Registration</div></a>
            <a href="#" style={linkStyles}><div style={linkDiv}>Money back guarantee</div></a>
            <a href="#" style={linkStyles}><div style={linkDiv}>Locations</div></a>

            </Col>

            <Col lg={3}>
            <a href="#"><div style={footHead}>About</div></a>

            <a href="#" style={linkStyles}><div style={linkDiv}>Registration</div></a>
            <a href="#" style={linkStyles}><div style={linkDiv}>Money back guarantee</div></a>
            <a href="#" style={linkStyles}><div style={linkDiv}>Locations</div></a>


            </Col>

            </Row>

            </Container>
        </footer>

    )
}

export default Footer