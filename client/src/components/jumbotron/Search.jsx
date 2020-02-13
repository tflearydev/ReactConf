import React from "react";
import { Card, Form, Container, Row, Col, Button } from "react-bootstrap";
import './Search.scss';
import {
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    FormInput,
  } from "shards-react";
  import searchicon from '../../searchicon.png';


function Search() {
    return (
      <Container>
        <Row className="">
          <Col lg={4}>
            <Card className="search-card">
              <Card.Body>
                <Form>
                  <Card.Title className="text-center what">What part are you looking for</Card.Title>
                 

                  <Form.Group>
                  <InputGroup className="mb-2">
        <FormInput placeholder="Search by tern or VIN" />
        <InputGroupAddon type="append" className="addon">
          <InputGroupText><img src={searchicon} alt="search icon" className="searchicon"></img></InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      </Form.Group>

                
                  <Form.Group>
                    <Form.Label>Manufacturer</Form.Label>
                    <Form.Control as="select">
                      <option>Any</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Model</Form.Label>
                    <Form.Control as="select">
                      <option>Any</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
  
                  <div className="text-center">


                    <Button
                      gradient="aqua"
                      rounded
                      size="sm"
                      type="submit"
                      className="text-center"
                    >
                      Search


                      
                    </Button>


                  </div>
                </Form>
              </Card.Body>
            </Card>


          </Col>

          <Col lg={8}>
          <span className="welcome">
        THE PARTS YOU NEED<br></br>
        WHEN YOU NEED THEM
        </span>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Search;