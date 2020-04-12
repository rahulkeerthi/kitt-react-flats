import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../assets/stylesheets/application.scss';

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(<App />, root);
}
