import React from "react";
import { Card, Form, Container, Row, Col, Button } from "react-bootstrap";
import './Search.scss'


function Search() {
    return (
      <Container>
        <Row className="">
          <Col lg={4}>
            <Card className="search-card">
              <Card.Body>
                <Form>
                  <Card.Title className="text-center">What part are you looking for</Card.Title>
                 
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select">
                      <option>Any</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                
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