/**
 * React Component for the main component of the application.
 *
 * @file app.jsx
 * @description The main component of the application.
 * @module App
 */

import React from 'react';
import Home from './pages/home/home';

/**
 * App -- The main component of the application.
 *
 * @component
 * @description The main component of the application.
 * @example
 * return (
 *  <App />
 * )
 *
 * @return { JSX.Element } The main component of the application.
 */
export default function App() {
	return (
		<>
			<Home />
		</>
	);
}
