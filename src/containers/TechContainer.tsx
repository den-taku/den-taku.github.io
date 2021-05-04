import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TechContainer.css';
import SkillContainer from './SkillContainer';
import LanguagesContainer from './LanguagesContainer';
import FrameworkContainer from './FrameworkContainer';

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
              <h4>技術スタック的なやつ</h4><br />
              <LanguagesContainer /><br />
              <FrameworkContainer /><br />
              <SkillContainer />
          </header>
        </div>
    );
  }
  
  export default TechContainer;