/**
 * Input UI component.
 *
 * @file Input.jsx
 * @description The UI component for input.
 * @module App
 */

import React from 'react';

/**
 * Input -- The UI component for input.
 *
 * @component
 * @description The UI component for input.
 * @example
 * return (
 *  <Input />
 * )
 *
 * @param { Object } props The properties of the component.
 * @param { string } props.type The type of the input.
 * @param { string } props.placeholder The placeholder of the input.
 * @param { string } props.className The class name of the input.
 * @param { string } props.value The value of the input.
 * @param { Function } props.onChange The function to call when the input changes.
 * @param { Function } props.onPressingEnter The function to call when the Enter key is pressed.
 *
 * @return { JSX.Element } The UI component for input.
 */
export default function Input( { type, placeholder, className, value, onChange, onPressingEnter } ) {
    return (
        <input
            className={ className }
            type={ type ? type : 'text' }
            placeholder={ placeholder ? placeholder : '' }
            value={ value }
            onChange={ onChange }
            onKeyDown={ ( e ) => {
                if ( e.key === 'Enter' ) {
                    e.preventDefault();
                    onPressingEnter();
                }
            } }
        />
    );
}
