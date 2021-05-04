import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FrameworkContainer.css';

type StateProps = Readonly<{
    //
  }>;
  
  type OwnProps = Readonly<{
    //
  }>;
  
  type FrameworkContainerProps = StateProps & OwnProps;
  
  const FrameworkContainer: React.FC<FrameworkContainerProps> = ({})  => {
    return (
        <div className="Framework">
            <header className="Framework-header">
              <h4 id="prolan">フレームワークとか</h4>
              <h5>今も使っているもの</h5>
              <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>LaTeX</li>
                  <li>他にも<a href="https://crates.io">crates.io</a>のクレートにはいつもお世話になっています．</li>
              </ul>
              <h5>昔使ってた</h5>
              <ul>
                  <li>Unity</li>
                  <li>Blender</li>
                  <li>Studio One Free</li>
              </ul>
              <h4>開発OS</h4>
              <ul>
                <li>Mac(今の所)</li>
              </ul>
              <h4>エディタ</h4>
              <ul>
                <li>Vim</li>
                <li>VSCode</li>
                <li>Emacs(Coqの時のみ)</li>
              </ul>
          </header>
        </div>
    );
  }
  
  export default FrameworkContainer;