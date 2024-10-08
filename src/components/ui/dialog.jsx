/**
 * Dialog UI component.
 *
 * @file dialog.jsx
 * @description The UI component for Dialog.
 * @module App
 */

import React, { useState } from 'react';
import Button from './button';
import styles from './dialog.module.css';
import Input from './input';

/**
 * Modal -- The UI component for Dialog.
 *
 * @component
 * @description The UI component for Dialog.
 * @example
 * return (
 *  <Dialog />
 * )
 *
 * @param { Object } props The properties of the component.
 * @param { Function } props.setIsDialogOpen The function to call when the dialog is closed.
 * @param { string } props.placeholder The placeholder of the input.
 * @param { Function } props.updateTaskCB The function to call when the task is updated.
 * @param { Object } props.task The task object to update.
 *
 * @return { JSX.Element } The UI component for Dialog.
 */
export default function Dialog( { setIsDialogOpen, placeholder, updateTaskCB, task } ) {
	const [ updatedTask, setUpdatedTask ] = useState( placeholder );
	const [ errorState, setErrorState ] = useState( '' );

	/**
	 * Handle the task update.
	 *
	 * @return { void }
	 */
	const handleTaskUpdate = () => {

		// Check if the task is empty.
		if ( 0 === updatedTask.length ) {
			setErrorState( 'No todo task present.' );
			return;
		}

		updateTaskCB( { ...task, task: updatedTask } );
		setIsDialogOpen( false );
	};

	return (
		<>
			<div className={ styles[ 'parent-container' ] } onClick={ () => setIsDialogOpen( false ) }></div>
			<div className={ styles[ 'center-dialog' ] }>
				<div className={ styles[ 'dialog' ] }>
					<div className={ styles[ 'dialog-header' ] }>
						<h4 className={ styles[ 'dialog-heading' ] }>Update Task</h4>
						{ errorState && <p className={ styles[ 'error-message' ] }>{ errorState }</p> }
					</div>
					<div className={ styles[ 'dialog-content' ] }>
						<Input
							type="text"
							className={ styles[ 'dialog-input' ] }
							value={ updatedTask }
							onChange={ ( event ) => setUpdatedTask( event.target.value ) }
							autoFocus={ true }
							onPressingEnter={ handleTaskUpdate }
						/>
						<Button className={ styles[ 'update-button' ] } onClick={ handleTaskUpdate }>
							Update
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
