// Developer TODO: Load in App component and render to the DOM
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

console.log('indexpage is connected');

ReactDOM.render(
	<Home />,
	document.getElementById('root')
);

