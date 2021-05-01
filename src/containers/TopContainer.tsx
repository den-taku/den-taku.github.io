import React from 'react';
import Icon from '../components/Icon'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Row>
          <Col sm={5}>
              <Icon />
          </Col>
          <Col sm={5}>
              <h1> </h1>
              <h1> </h1>
              <h1>I'm DenTaku.</h1>
              <h5>Thanks for visiting!</h5>
              <Col>
                  <a href="https://twitter.com/o_loAol_o">Twitter  </a>
                  <a href="https://github.com/den-taku">Github  </a>
                  <a href="https://zenn.dev/dentaku">Zenn  </a>
              </Col>
          </Col>
      </Row>
      </> 
    );
  }
  
  export default TopContainer;