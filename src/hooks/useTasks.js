/**
 * useTasks Hook
 *
 * @file useTasks.js
 * @description Custom hook to use the tasks context.
 * @module App
 */

import { useContext } from "react"
import { TasksContext } from "../context/context"

/**
 * Custom hook to use the tasks context.
 *
 * @return { Object } The tasks context.
 */
export const useTasks = () => {

    // Get the tasks context.
    const tasks = useContext( TasksContext );

    // If the tasks context is undefined, throw an error.
    if ( undefined === tasks ) {
        throw new Error( 'useTasks must be used within a TasksProvider' );
    }

    // Return the tasks context.
    return tasks;
}