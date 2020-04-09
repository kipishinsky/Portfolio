import React from 'react';
import classes from './Slogan.module.css';
import Title from "../Title/Title";

function Slogan(props) {
    return (
        <div className={classes.slogan}>
            <div className={classes.container}>
                <Title name={props.name}/>
                <button className={classes.button}>Make an offer</button>
            </div>
        </div>
    );
}

export default Slogan;
