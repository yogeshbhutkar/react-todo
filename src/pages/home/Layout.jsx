/**
 * Layout component.
 *
 * @file Layout.jsx
 * @description The layout component for the application.
 * @module App
 */

import React from 'react';
import styles from './Layout.module.css';

/**
 * Layout -- The layout component for the application.
 *
 * @component
 * @description The layout component for the application.
 * @example
 * return (
 *  <Layout>
 *      <div>App</div>
 *  </Layout>
 * )
 *
 * @param { JSX.Element } props.children The children of the component.
 *
 * @return { JSX.Element } The layout component for the application.
 */
export default function Layout( { children } ) {
    return <main className={ styles['layout-container'] }>{ children }</main>;
}
