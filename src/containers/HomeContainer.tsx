import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeContainer.css'

type StateProps = Readonly<{
    //
  }>;
  
  type OwnProps = Readonly<{
    //
  }>;
  
  type HomeContainerProps = StateProps & OwnProps;
  
  const HomeContainer: React.FC<HomeContainerProps> = ({})  => {
    return (
        <div className="Home">
            <header className="Home-header">
                Hello
          </header>
        </div>
    );
  }
  
  export default HomeContainer;