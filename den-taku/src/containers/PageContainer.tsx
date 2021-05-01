import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App';

type StateProps = Readonly<{
  //
}>;

type OwnProps = Readonly<{
  //
}>;

type PageContainerProps = StateProps & OwnProps;

const PageContainer: React.FC<PageContainerProps> = ({})  => {
  return (
    <>
      <h1>Hello</h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey="self"> 
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="self">Self Introduction</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tech">Tech and Knowledge</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="self">
                <App />
              </Tab.Pane>
              <Tab.Pane eventKey="tech">
                <App />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
       </Tab.Container>
    </>
  );
}

export default PageContainer;