import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { square, cube } from './features/treeShake';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

cube(5)

console.log('\nindex.js\n', {
  process: process,
  'process.env': process.env,
})
