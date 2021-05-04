import React from 'react';
import Icon from '../components/Icon'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

type StateProps = Readonly<{
    //
  }>;
  
  type OwnProps = Readonly<{
    //
  }>;
  
  type TopContainerProps = StateProps & OwnProps;
  
  const TopContainer: React.FC<TopContainerProps> = ({})  => {
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Nav variant="pills" defaultActiveKey="japanese">
            <Nav.Item>
              <Nav.Link href="english" disabled>English</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="japanese">日本語</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Brand>
      </Navbar>
      <Row>
          <Col sm={5}>
              <Icon />
          </Col>
          <Col sm={5}>
              <h1> </h1>
              <h1> </h1>
              <h1>I'm DenTaku.</h1>
              <h5>Thanks for visiting!</h5>
          </Col>
      </Row>
      </> 
    );
  }
  
  export default TopContainer;