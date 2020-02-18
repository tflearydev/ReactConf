import React from 'react';
import Navbar from '../../components/navbar/Nav';
import Jumbo from '../../components/jumbotron/Jumbotron';
// import { Container } from 'react-bootstrap';
import './Homepage.scss';
import Parts from '../../components/parts/Parts'
import { Container } from 'react-bootstrap'


var top = {
    
    top: '525px',
    position: 'relative',
    zIndex: '9999'

}

function Homepage() {




    return (

        <>
            <Navbar />
            <Jumbo />         

<Container>
 <section style={top}>
     
            <Parts />
            </section>

            </Container>
        </>
        



    )
}

export default Homepage;