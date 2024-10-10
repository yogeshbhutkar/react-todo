/**
 * React application entry point.
 *
 * @file index.jsx
 * @description The entry point for the React application.
 * @module App
 */

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import React from 'react';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
