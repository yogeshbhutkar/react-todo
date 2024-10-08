/**
 * DisplayTasks component.
 *
 * @file DisplayTasks.jsx
 * @description The component for displaying tasks.
 * @module App
 */

import React from 'react';
import Task from './ui/Task';
import { useTasks } from '../hooks/useTasks';
import styles from './DisplayTasks.module.css';

/**
 * DisplayTasks -- The component for displaying tasks.
 *
 * @component
 * @description The component for displaying tasks.
 * @example
 * return (
 *  <DisplayTasks />
 * )
 *
 * @param { Object } props The properties of the component.
 * @param { Object } props.taskCallbacks The task callbacks for deleting, marking as complete, and updating tasks.
 *
 * @return { JSX.Element } The component for displaying tasks.
 */
export default function DisplayTasks( { taskCallbacks } ) {
	const tasks = useTasks();

	return tasks && tasks.length > 0 ? (
		<div className={ styles[ 'display-tasks' ] }>
			{ tasks.map( ( task, index ) => {
				return <Task task={ task } key={ index } taskCallbacks={ taskCallbacks } />;
			} ) }
		</div>
	) : (
		<p className={ styles[ 'nothing-found' ] }>No tasks to display</p>
	);
}
