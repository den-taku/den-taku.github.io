import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Architecture from '../components/skills/Architecture';
import LogicCircuit from '../components/skills/LogicCircuit';
import Compiler from '../components/skills/Compiler';
import OperatingSystem from '../components/skills/OperatingSystem';
import ProgrammingLanguage from '../components/skills/ProgrammingLanguage';
import Cmos from '../components/skills/Cmos';
import Set from '../components/skills/Set';
import CG from '../components/skills/CG';
import Database from '../components/skills/Database';
import Geometric from '../components/skills/Geometric';
import Graph from '../components/skills/Graph';
import Algebra from '../components/skills/Algebra';
import Security from '../components/skills/Security';
import SoftwareEng from '../components/skills/SoftwareEng';
import Logic from '../components/skills/Logic';
import Parallel from '../components/skills/Parallel';
import Network from '../components/skills/Network';
import Embedded from '../components/skills/Embedded';
import NumericCalculation from '../components/skills/NumericCalculation';
import Optimization from '../components/skills/Optimization';
import ML from '../components/skills/Ml';
import SemanticsLambda from '../components/skills/SemanticsLambda';
import SemanticsCategory from '../components/skills/SemanticsCategory';
import ImformationTheory from '../components/skills/ImformationTheory';
import ComputationTheory from '../components/skills/ComputationTheory';
import DataAlgorithm from '../components/skills/DataAlgorithm';
import Electric from '../components/skills/Electric';
import { Button } from 'react-bootstrap';
import './SkillContainer.css';

type StateProps = Readonly<{
    //
}>;
  
type OwnProps = Readonly<{
    //
}>;
  
type SkillContainerProps = StateProps & OwnProps;
  
const SkillContainer: React.FC<SkillContainerProps> = ({})  => {
    return (
      <>
      <h4 id="skill">具体的なスキル(2021.5.5時点)</h4>
        <Row>
            <Col sm={3}>
              <Button variant="Light" size="lg" disabled block>よくわかる</Button>
                <LogicCircuit variant="info"/>
                <Architecture variant="info"/>
                <Optimization variant="info"/>
            </Col>
            <Col sm={3}>
              <Button variant="Light" size="lg" disabled block>わかる</Button>
                <ProgrammingLanguage variant="primary"/>
                <OperatingSystem variant="primary"/>
                <Compiler variant="primary"/>
                <Cmos variant="primary"/>
                <Electric variant="primary"/>
                <DataAlgorithm variant="primary"/>
                <Graph variant="primary"/>
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
                <SemanticsCategory variant="danger"/>
                <Parallel variant="danger"/>
                <Network variant="danger"/>
                <Set variant="danger"/>
                <CG variant="danger"/>
            </Col>
            <Col sm={3}>
              <Button variant="Light" size="lg" disabled block>まだわからない</Button>
                <SoftwareEng variant="secondary"/>
                <Security variant="secondary"/>
                <Algebra variant="secondary"/>
                <Geometric variant="secondary"/>
                <Database variant="secondary"/>
            </Col>
          </Row>
        </>
    )    
}
  
  export default SkillContainer;