import React from 'react';
import classes from './Title.module.css';

function Title(props) {
    return (
        <h1 className={classes.title}>{props.name}</h1>
    );
}

export default Title;