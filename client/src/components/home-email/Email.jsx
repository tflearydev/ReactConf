import React from 'react';
import { Container} from 'react-bootstrap'

import { Input, Col, Row  } from 'antd';
import './Email.scss'

const { Search } = Input;

const emailStyle = {
    position: 'relative',
    top: '540px',
    paddingTop: '50px',
    paddingBottom: '50px',
    backgroundColor: '#EBEBEB',
    marginTop: '75px'

    

}

function HomeEmail() {

    return (

    <section style={emailStyle}>
      {/* <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
      <br />
      <br />
      <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
      <br />
      <br /> */}

      <Container>


          <Row>


          <Col lg={12}>

<div className="text-center first-text">
Be the first to know about our daily sales!
</div>
</Col>

              <Col lg={12}>
<div className="submitt">
      <Search
        placeholder="Email Address"
        enterButton="Submit"
        size="large"
        onSearch={value => console.log(value)}
        className="submit-btn"
      />

</div>
</Col>



</Row>

</Container>
    </section>
    )
    
    }

    export default HomeEmail