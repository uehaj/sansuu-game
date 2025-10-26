import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const stringLog: string | null = localStorage.getItem('log');
console.log(stringLog);
let log: any = [];
if (stringLog === null) {
  log = [];
} else {
  log = JSON.parse(stringLog);
}
console.log('load=', log);
ReactDOM.render(<App log={log} />, document.getElementById('root'));
