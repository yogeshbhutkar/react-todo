/**
 * Home component.
 *
 * @file Home.jsx
 * @description The home component for the application.
 * @module App
 */

import React, { useCallback, useEffect, useState } from 'react';
import Layout from './Layout';
import styles from './Home.module.css';
import AddItem from '../../components/AddItem';
import DisplayTasks from '../../components/DisplayTasks';
import {
    addItemsToTasks,
    removeItemFromTasks,
    toggleTaskCompletion,
    updateTaskHelper
} from '../../utils/utils';
import { TasksContext } from '../../context/context';

/**
 * Home -- The home component for the application.
 *
 * @component
 * @description The home component for the application.
 * @example
 * return (
 *  <Home />
 * )
 *
 * @return { JSX.Element } The home component for the application.
 */
export default function Home() {

    // State for the tasks.
    const [ tasks, setTasks ] = useState( [] );

    // Get the tasks from local storage.
    useEffect( () => {
        // Get the tasks from local storage.
        const userTasks = JSON.parse( localStorage.getItem( 'userTasks' ) );

        // If tasks exist, set the tasks state.
        if ( userTasks ) {
            setTasks( userTasks );
        }
    }, [] );

    /**
     * Add an item to the tasks.
     *
     * @param { string } task The task to add.
     *
     * @return { void }
     */
    const addItemToTasks = useCallback( ( task ) => {
        addItemsToTasks( task, tasks, setTasks );
    }, [ tasks ] );

    /**
     * Delete a task from the tasks.
     *
     * @param { string } task The task to delete.
     *
     * @return { void }
     */
    const deleteTask = useCallback( ( task ) => {
        removeItemFromTasks( task, tasks, setTasks );
    }, [ tasks ] );

    /**
     * Mark a task as complete.
     *
     * @param { string } task The task to mark as complete.
     *
     * @return { void }
     */
    const markTaskComplete = useCallback( ( task ) => {
        toggleTaskCompletion( task, tasks, setTasks );
    }, [ tasks ] );

    /**
     * Update a task in the tasks.
     *
     * @param { Object } task The task to update.
     *
     * @return { void }
     */
    const updateTask = useCallback( ( task ) => {
        updateTaskHelper( task, tasks, setTasks );
    }, [ tasks ] );

    // Task callbacks.
    const taskCallbacks = {
        deleteTaskCB: deleteTask,
        markTaskCompleteCB: markTaskComplete,
        updateTaskCB: updateTask
    };

    return (
        <TasksContext.Provider value={ tasks }>
            <Layout>
                <section className={ styles[ 'hero-section' ] }>
                    <h1 className={ styles[ 'hero-text' ] }>ToDo App</h1>
                    <DisplayTasks taskCallbacks={ taskCallbacks } />
                    <AddItem addTaskCB={ addItemToTasks } />
                </section>
            </Layout>
        </TasksContext.Provider>
    );
}
