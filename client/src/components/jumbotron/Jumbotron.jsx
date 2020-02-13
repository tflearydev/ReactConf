import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import "./Jumbotron.scss";
import Search from "./Search";

function Jumbo() {
  return (
    <section className="head">
      <Jumbotron className="jumbo">
        <div className="overlay"></div>

        {/* <div className="hello">
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>

  <p>
    <Button variant="primary">Learn more</Button>
  </p>
  </div> */}

{/* <Container className="welcome2"> */}
        <Search />
        {/* <span className="welcome">
        THE PARTS YOU NEED<br></br>
        WHEN YOU NEED THEM
        </span> */}
        {/* </Container> */}
       
      </Jumbotron>

      

    </section>
  );
}

export default Jumbo;
