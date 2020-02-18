import React from 'react';
import { Card, Col, Row, Avatar } from 'antd';
import Engine from '../../assets/tuckeng.jpg'
import './Parts.scss';

const { Meta } = Card;

function Parts() {

    return (



<div style={{ background: 'grey', padding: '30px' }}>
    <Row gutter={16}>


     <Col lg={4} sm={8} xs={8}>
         <a href="#" alt="">
        <Card bordered={false}
        cover={
            <img
            alt="example"
            src={Engine}
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        <Meta
      title="Card title"
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
            src={Engine}
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        <Meta
      title="Card title"
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
            src={Engine}
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        <Meta
      title="Card title"
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
            src={Engine}
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        <Meta
      title="Card title"
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
            src={Engine}
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        <Meta
      title="Card title"
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
            src={Engine}
          />
            }>
        {/* <span className="text-center">
        All Parts
        </span> */}

        <Meta
      title="Card title"
      className="card-text"
      
    />
        </Card>
        </a>
      </Col>


    </Row>
  </div>


    )

}

export default Parts