import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const stringLog: string | null = localStorage.getItem('log');
let log: any = [];
if (stringLog === null) {
  log = [];
} else {
  log = JSON.parse(stringLog);
}
ReactDOM.render(<App log={log} />, document.getElementById('root'));
