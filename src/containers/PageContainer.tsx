import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PageContainer.css'
import SelfContainer from './SelfContainer';
import HomeContainer from './HomeContainer';
import TechContainer from './TechContainer';
import BlogContainer from './BlogContainer';
import ContactContainer from './ContactContainer';

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
      <Tab.Container id="left-tabs-example" defaultActiveKey="home"> 
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
            <Nav.Item>
                <Nav.Link eventKey="home" >Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="self" >Self Introduction</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tech">Tech and Knowledge</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="blog">Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
            <Tab.Pane eventKey="home">
                <HomeContainer />
              </Tab.Pane>
              <Tab.Pane eventKey="self">
                <SelfContainer />
              </Tab.Pane>
              <Tab.Pane eventKey="tech">
                <TechContainer />
              </Tab.Pane>
              <Tab.Pane eventKey="blog">
                <BlogContainer />
              </Tab.Pane>
              <Tab.Pane eventKey="contact">
                <ContactContainer />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
       </Tab.Container>
    </>
  );
}

export default PageContainer;