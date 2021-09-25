import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeContainer.css'
import { Col } from 'react-bootstrap';

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
              <h2>This is a page about <a href="https://twitter.com/o_loAol_o">DenTaku</a>.</h2>
              <h4>This is an α version page.</h4><br/>
            <Col>
              <h3>Links</h3>
                  <a href="https://twitter.com/o_loAol_o">・Twitter  </a><br />
                  <a href="https://github.com/den-taku">・Github  </a><br />
                  <a href="https://zenn.dev/dentaku">・Zenn  </a><br />
                  <a href="https://atcoder.jp/users/dentaku">・AtCoder</a>
              </Col>
          </header>
        </div>
    );
  }
  
  export default HomeContainer;