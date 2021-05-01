import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PageContainer, { Page } from './containers/PageContainer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const Tick = () => {
  return (
    <>
      <div>
        <h1>It is {new Date().toLocaleTimeString()}.</h1>
      </div>
    </>
  )
}

function tick() {
  ReactDOM.render(
    <React.StrictMode>
      <Tick />
      <PageContainer page={Page.Self}/>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

setInterval(tick, 1000);

reportWebVitals();
