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
                <br></br>
              <h4>
                  Hi! My name is DenTaku.
              </h4>
              <br />
              <h5>
                  I'm a 4th year student at Kyoto University.<br />
                  I'm majoring in electrical and electronic enginnering.<br/>
              </h5>
              <br />
              <h5>
                  I'm working on dynamic combinatorial optimization.
              </h5>
              <br />
              <h5>
                  I'm interested in a lot of things, but recently I've been particularly interested in computational abstraction and lower layers. 
              </h5>
              <br />
              <h4>
                  I'm really glad to see you.
              </h4>
          </header>
        </div>
    );
  }
  
  export default SelfContainer;