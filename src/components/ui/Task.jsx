/**
 * Task component.
 *
 * @file Task.jsx
 * @description The UI component for Tasks.
 * @module App
 */

import React, { useState } from 'react';
import styles from './Task.module.css';
import Button from './Button';
import Dialog from './Dialog';

/**
 * Task -- The UI component for Tasks.
 *
 * @component
 * @description The UI component for Tasks.
 * @example
 * return (
 *  <Task />
 * )
 *
 * @param { Object } props The properties of the component.
 * @param { String } props.task The task to display.
 * @param { Object } props.taskCallbacks The task callbacks for deleting, marking as complete, and updating tasks.
 *
 * @return { JSX.Element } The UI component for Tasks.
 */
export default function Task( { task, taskCallbacks } ) {
    const [ isDialogOpen, setIsDialogOpen ] = useState( false );

    const { deleteTaskCB, markTaskCompleteCB, updateTaskCB } = taskCallbacks;

    return (
        <div className={ `${ task.completed ? styles[ 'task-container-completed' ] : styles[ 'task-container' ] }` }>
            { isDialogOpen && (
                <Dialog
                    setIsDialogOpen={ setIsDialogOpen }
                    placeholder={ task.task }
                    updateTaskCB={ updateTaskCB }
                    task={ task }
                />
            ) }
            <div>
                <h3 className={ `${ styles[ 'task-heading' ] } ${ task.completed ? styles[ 'task-completed' ] : '' }` }>{ task.task }</h3>
                <p className={ styles[ 'task-date' ] }>{ task.createdOn }</p>
            </div>
            <div className={ styles[ 'icons-group' ] }>
                <Button
                    className={ styles[ 'task-button-complete' ] }
                    onClick={ () => markTaskCompleteCB( task.id ) }
                    ariaLabel="Mark as complete"
                ></Button>
                <Button
                    className={ styles[ 'task-button-edit' ] }
                    onClick={ () => setIsDialogOpen( true ) }
                    ariaLabel="Edit Task"
                ></Button>
                <Button
                    className={ styles[ 'task-button-delete' ] }
                    onClick={ () => deleteTaskCB( task.id ) }
                    ariaLabel="Delete Task"
                ></Button>
            </div>
        </div>
    );
}
