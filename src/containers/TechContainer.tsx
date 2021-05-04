import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TechContainer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Architecture from '../components/skills/Architecture';
import LogicCircuit from '../components/skills/LogicCircuit';
import Compiler from '../components/skills/Compiler';
import OperatingSystem from '../components/skills/OperatingSystem';
import ProgrammingLanguage from '../components/skills/ProgrammingLanguage';
import Cmos from '../components/skills/Cmos';
import Logic from '../components/skills/Logic';
import Embedded from '../components/skills/Embedded';
import NumericCalculation from '../components/skills/NumericCalculation';
import Optimization from '../components/skills/Optimization';
import ML from '../components/skills/Ml';
import SemanticsLambda from '../components/skills/SemanticsLambda';
import ImformationTheory from '../components/skills/ImformationTheory';
import ComputationTheory from '../components/skills/ComputationTheory';
import DataAlgorithm from '../components/skills/DataAlgorithm';
import Electric from '../components/skills/Electric';
import { Button } from 'react-bootstrap';

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
                  <Button variant="Light" size="lg" disabled block>よくわかる</Button>
                    <LogicCircuit variant="info"/>
                    <Architecture variant="info"/>
                    <Compiler variant="info"/>
                    <Optimization variant="info"/>
                </Col>
                <Col sm={3}>
                  <Button variant="Light" size="lg" disabled block>わかる</Button>
                    <ProgrammingLanguage variant="primary"/>
                    <OperatingSystem variant="primary"/>
                    <Cmos variant="primary"/>
                    <Electric variant="primary"/>
                    <DataAlgorithm variant="primary"/>
                    <ComputationTheory variant="primary"/>
                    <Logic variant="primary"/>
                    <ML variant="primary"/>
                    <SemanticsLambda variant="primary"/>
                    <ImformationTheory variant="primary"/>
                    <NumericCalculation variant="primary"/>
                    <Embedded variant="primary"/>
                </Col>
                <Col sm={3}>
                  <Button variant="Light" size="lg" disabled block>勉強中</Button>
                </Col>
                <Col sm={3}>
                  <Button variant="Light" size="lg" disabled block>まだわからない</Button>
                </Col>
              </Row>
          </header>
        </div>
    );
  }
  
  export default TechContainer;