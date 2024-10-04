/**
 * Dialog UI component.
 *
 * @file Dialog.jsx
 * @description The UI component for Dialog.
 * @module App
 */

import React, { useState } from 'react';
import styles from './Dialog.module.css';
import Input from './Input';
import Button from './Button';

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
    
    const [ updatedTask, setUpdatedTask ] = useState( '' );

    return (
        <>
            <div className={ styles['parent-container'] } onClick={ () => setIsDialogOpen( false ) } />
            <div className={ styles['center-dialog'] }>
                <div className={ styles['dialog'] }>
                    <div className={ styles['dialog-header'] }>
                        <h4 className={ styles['dialog-heading'] }>Update Task</h4>
                    </div>
                    <div className={ styles['dialog-content'] }>
                        <Input
                            type="text"
                            placeholder={ placeholder }
                            className={ styles['dialog-input'] }
                            value={ updatedTask }
                            onChange={ ( e ) => setUpdatedTask( e.target.value ) }
                            onPressingEnter={ () => {
                                updateTaskCB( { ...task, task: updatedTask } );
                                setIsDialogOpen( false );
                            } }
                        />
                        <Button
                            className={ styles['update-button'] }
                            onClick={ () => {
                                updateTaskCB( { ...task, task: updatedTask } );
                                setIsDialogOpen( false );
                            } }>
                            Update
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
