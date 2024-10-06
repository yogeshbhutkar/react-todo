/**
 * Button UI component.
 *
 * @file Button.jsx
 * @description The UI component for button.
 * @module App
 */

import React from 'react';
import styles from './Button.module.css';

/**
 * Button -- The UI component for button.
 *
 * @component
 * @description The UI component for button.
 * @example
 * return (
 *  <Button />
 * )
 * @param { Object } props The properties of the component.
 * @param { string } props.className The class name of the button.
 * @param { string } props.text The text of the button.
 * @param { Function } props.onClick The function to call when the button is clicked.
 * @param { string } props.ariaLabel The aria label of the button
 * @param { string } props.type The type of the button.
 * @param { boolean } props.disabled The disabled state of the button.
 *
 * @return { JSX.Element } The UI component for button.
 */
export default function Button( { className, children, onClick, ariaLabel, type = 'button', disabled = false } ) {
    return (
        <button
            className={ `${ className } ${ styles[ 'generic-button' ] }` }
            onClick={ onClick }
            aria-label={ ariaLabel }
            type={ type }
            disabled={ disabled }
        >
            { children }
        </button>
    );
}
