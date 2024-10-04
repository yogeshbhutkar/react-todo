/**
 * Utility functions for the app.
 *
 * @file utils.js
 * @description Utility functions for the app.
 * @module App
 */

/**
 * Add a task to the tasks state.
 *
 * @param { string } task The task to add.
 * @param { Array } tasks The tasks state.
 * @param { Function } setTasks The function to set the tasks state.
 *
 * @return { void }
 */
export const addItemsToTasks = ( task, tasks, setTasks ) => {
    
    // If task is empty, early return.
    if ( ! task ) {
        return;
    }

    // Create a new task object.
    const newTaskObject = {
        id: crypto.randomUUID(),
        createdOn: new Date().toDateString(),
        task: task,
        completed: false
    };

    const newTasks = [ ...tasks, newTaskObject ];

    // Add the task to the tasks state.
    setTasks( newTasks );

    // Set the tasks in local storage.
    localStorage.setItem( 'userTasks', JSON.stringify( newTasks ) );
};

/**
 * Remove a task from the tasks state.
 *
 * @param { string } taskId The task ID to remove.
 * @param { Array } tasks The tasks state.
 * @param { Function } setTasks The function to set the tasks state.
 *
 * @return { void }
 */
export const removeItemFromTasks = ( taskId, tasks, setTasks ) => {

    // If task ID is empty, early return.
    if ( ! taskId ) {
        return;
    }

    // Filter out the task to remove.
    const newTasks = tasks.filter( ( oldTask ) => taskId !== oldTask.id );

    // Set the tasks state.
    setTasks( newTasks );

    // Set the tasks in local storage.
    localStorage.setItem( 'userTasks', JSON.stringify( newTasks ) );
};

/**
 * Toggle the completion status of a task.
 *
 * @param { string } taskId The task ID to toggle.
 * @param { Array } tasks The tasks state.
 * @param { Function } setTasks The function to set the tasks state.
 *
 * @return { void }
 */
export const toggleTaskCompletion = ( taskId, tasks, setTasks ) => {

    // If task ID is empty, early return.
    if ( ! taskId ) {
        return;
    }

    // Map over the tasks and toggle the task completion status.
    const newTasks = tasks.map( ( oldTask ) => {
        if ( taskId === oldTask.id ) {
            return {
                ...oldTask,
                completed: ! oldTask.completed
            };
        }
        return oldTask;
    } );

    // Set the tasks state.
    setTasks( newTasks );

    // Set the tasks in local storage.
    localStorage.setItem( 'userTasks', JSON.stringify( newTasks ) );
};

/**
 * Update a task in the tasks state.
 *
 * @param { object } task The updated task.task value.
 * @param { Array } tasks The tasks state.
 * @param { Function } setTasks The function to set the tasks state.
 *
 * @return { void }
 */
export const updateTaskHelper = ( task, tasks, setTasks ) => {

    // If task is empty, early return.
    if ( ! task ) {
        return;
    }

    // Map over the tasks and update the task.
    const newTasks = tasks.map( ( prevTask ) => {
        if ( prevTask.id === task.id ) {
            return {
                ...prevTask,
                task: task.task
            };
        }
        return prevTask;
    } );

    // Set the tasks state.
    setTasks( newTasks );

    // Set the tasks in local storage.
    localStorage.setItem( 'userTasks', JSON.stringify( newTasks ) );
};
