import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SelfContainer.css'

type StateProps = Readonly<{
    //
  }>;
  
  type OwnProps = Readonly<{
    //
  }>;
  
  type SelfContainerProps = StateProps & OwnProps;
  
  const SelfContainer: React.FC<SelfContainerProps> = ({})  => {
    return (
        <div className="Self">
            <header className="Self-header">
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
            <a
              className="Self-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
        </a>
          </header>
        </div>
    );
  }
  
  export default SelfContainer;