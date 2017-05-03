// Developer TODO: Load in App component and render to the DOM
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

console.log('indexpage is connected');

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

