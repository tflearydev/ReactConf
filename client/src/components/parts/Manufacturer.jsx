import React from 'react';
import { Container } from 'react-bootstrap'
import { Card, Col, Row, Avatar } from 'antd';

import manu1  from '../../assets/manufacturers/manu1.png'
import  manu2  from '../../assets/manufacturers/manu2.png'
import  manu3  from '../../assets/manufacturers/manu3.png'
import  manu4  from '../../assets/manufacturers/manu4.png'
import  manu5  from '../../assets/manufacturers/manu5.png'
import  manu6  from '../../assets/manufacturers/manu6.png'

import './Manufacturer.scss';

const { Meta } = Card;


var top5 = {
    
  top: '566px',
  position: 'relative',
  zIndex: '9999'

}

function Manufacturer() {

    return (


      <section style={top5}>
      <Container>


      <div className='recent-spacing'>
        <span>Shop by manufacturer</span>

       <a href="#" className="see-all">See All</a>


        </div>

<div style={{ padding: '0px' }}>



    <Row gutter={16}>


     <Col lg={4} sm={8} xs={8}>
         <a href="#" alt="">
        <Card bordered={false}
        cover={
            <img
            alt="example"
            src={manu1}
            className='cat-img mx-auto'
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        <Meta
      title="Engines"
      className="card-text"
      
    />
        </Card>
        </a>
      </Col>


      <Col lg={4} sm={8} xs={8}>
         <a href="#" alt="">
        <Card bordered={false}
        cover={
            <img
            alt="example"
            src={manu2}
            className='cat-img mx-auto'
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        <Meta
      title="Axels"
      className="card-text"
      
    />
        </Card>
        </a>
      </Col>



      <Col lg={4} sm={8} xs={8}>
         <a href="#" alt="">
        <Card bordered={false}
        cover={
            <img
            alt="example"
            src={manu3}
            className='cat-img mx-auto'
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        <Meta
      title="Transmissions"
      className="card-text"
      
    />
        </Card>
        </a>
      </Col>



      <Col lg={4} sm={8} xs={8}>
         <a href="#" alt="">
        <Card bordered={false}
        cover={
            <img
            alt="example"
            src={manu4}
            className='cat-img mx-auto'
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        <Meta
      title="Cabs"
      className="card-text"
      
    />
        </Card>
        </a>
      </Col>



      <Col lg={4} sm={8} xs={8}>
         <a href="#" alt="">
        <Card bordered={false}
        cover={
            <img
            alt="example"
            src={manu5}
            className='cat-img mx-auto'
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        <Meta
      title="Hoods"
      className="card-text"
      
    />
        </Card>
        </a>
      </Col>


      <Col lg={4} sm={8} xs={8}>
         <a href="#" alt="">
        <Card bordered={false}
        cover={
            <img
            alt="example"
            src={manu6}
            className='cat-img mx-auto'
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        <Meta
      title="See All"
      className="card-text"
      
    />
        </Card>
        </a>
      </Col>


    </Row>

    
  </div>
  
  </Container>
</section>

    )

}

export default Manufacturer