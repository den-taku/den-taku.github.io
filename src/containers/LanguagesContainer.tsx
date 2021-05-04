import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LanguagesContainer.css';

type StateProps = Readonly<{
    //
  }>;
  
  type OwnProps = Readonly<{
    //
  }>;
  
  type LanguagesContainerProps = StateProps & OwnProps;
  
  const LanguagesContainer: React.FC<LanguagesContainerProps> = ({})  => {
    return (
        <div className="Languages">
            <header className="Languages-header">
              <h4 id="prolan">プログラミング言語</h4>
              <h5>よく使う</h5>
              <ul>
                  <li>Rust</li>
                  <li>Haskell</li>
              </ul>
              <h5>使う</h5>
              <ul>
                  <li>C</li>
                  <li>C++</li>
                  <li>OCaml</li>
                  <li>HTML / CSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
              </ul>
              <h5>たまに使う / 使ってた</h5>
              <ul>
                  <li>Java</li>
                  <li>Coq</li>
                  <li>C#</li>
                  <li>機械語</li>
              </ul>
              <h5>簡単な実装のみ</h5>
              <ul>
                  <li>Go</li>
                  <li>Python</li>
                  <li>Scala</li>
              </ul>
          </header>
        </div>
    );
  }
  
  export default LanguagesContainer;