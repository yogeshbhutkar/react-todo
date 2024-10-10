/**
 * AddItem component.
 *
 * @file add-item.jsx
 * @description The component for adding an item to the todo list.
 * @module App
 */

import React, { useState } from 'react';
import styles from './add-item.module.css';
import Button from './ui/button';
import Input from './ui/input';

/**
 * AddItem -- The component for adding an item to the todo list.
 *
 * @component
 * @description The component for adding an item to the todo list.
 * @example
 * return (
 *  <AddItem />
 * )
 *
 * @param { Object } props The properties of the component.
 *
 * @return { JSX.Element } The component for adding an item to the todo list.
 */
export default function AddItem( { addTaskCB } ) {
	const [ task, setTask ] = useState( '' );

	/**
	 * Handle the form submission.
	 *
	 * @param { Object } event The event object.
	 *
	 * @return { void }
	 */
	const handleFormSubmission = ( event ) => {

		event.preventDefault();
		addTaskCB( task );
		setTask( '' );
	};

	return (
		<form onSubmit={ handleFormSubmission } className={ styles[ 'add-item' ] }>
			{/* Type is implicitly defined to be text. */}
			<Input
				className={ styles[ 'add-input' ] }
				placeholder="Add new tasks in your list"
				value={ task }
				onChange={ ( event ) => setTask( event.target.value ) }
				autoFocus={ true }
				onPressingEnter={ () => {
					addTaskCB( task );
					setTask( '' );
				} }
			/>
			<Button
				className={ styles[ 'add-button' ] }
				type="submit"
				disabled={ task.length > 0 ? false : true }
			>
				Add Task
			</Button>
		</form>
	);
}
