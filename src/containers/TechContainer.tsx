import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TechContainer.css'

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
                <br></br>
                <h2>unimplemented!()</h2>
          </header>
        </div>
    );
  }
  
  export default TechContainer;