/**
 * AddItem component.
 *
 * @file AddItem.jsx
 * @description The component for adding an item to the todo list.
 * @module App
 */

import React, { useState } from 'react';
import styles from './AddItem.module.css';
import Button from './ui/Button';
import Input from './ui/Input';

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
     * @param { Object } e The event object.
     * 
     * @return { void }
     */
    const handleFormSubmission = ( e ) => {
        e.preventDefault();
        addTaskCB( task );
        setTask( '' );
    }

    return (
        <form onClick={ handleFormSubmission } className={ styles['add-item'] }>
            <Input
                className={ styles['add-input'] }
                placeholder="Add new tasks in your list"
                value={ task }
                onChange={ ( e ) => setTask( e.target.value ) }
                autoFocus={ true }
                onPressingEnter={ () => {
                    addTaskCB( task );
                    setTask( '' );
                } }
            />
            <Button
                className={ styles['add-button'] }
                ariaLabel="Add Task"
                type="submit"
                disabled={ task.length > 0 ? false : true }
            ></Button>
        </form>
    );
}
