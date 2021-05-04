import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TechContainer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Architecture from '../components/skills/Architecture';
import LogicCircuit from '../components/skills/LogicCircuit';
import Compiler from '../components/skills/Compiler';

type StateProps = Readonly<{
    //
  }>;
  
  type OwnProps = Readonly<{
    //
  }>;
  
  type TechContainerProps = StateProps & OwnProps;
  
  const TechContainer: React.FC<TechContainerProps> = ({})  => {
    return (
        <div className="Tech">
            <header className="Tech-header">
              <Row>
                <Col sm={3}>
                  <h4>そこそこわかる / 実装したことがある</h4>
                    <LogicCircuit variant="info"/>
                    <Architecture variant="info"/>
                    <Compiler variant="info" />
                </Col>
                <Col sm={3}>
                  <h1>Hello</h1>
                </Col>
                <Col sm={3}>
                  <h1>Hello</h1>
                </Col>
              </Row>
          </header>
        </div>
    );
  }
  
  export default TechContainer;