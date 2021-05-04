import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PageContainer from './containers/PageContainer';
import TopContainer from './containers/TopContainer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function tick() {
  ReactDOM.render(
    <React.StrictMode>
      <div className="Page">
        <div className="Page-header">
          <TopContainer />
        </div>
        <div className="Page-body">
          <PageContainer />
        </div>
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

setInterval(tick, 1000);

reportWebVitals();
