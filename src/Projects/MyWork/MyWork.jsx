import React from 'react';
import classes from './MyWork.module.css'

function MyWork() {
    return (
        <div className={classes.MyWorkContainer}>
            <div className={classes.imageArea}>
                <img src="" alt=""/>
                <button className={classes.button}>
                    Look
                </button>
            </div>
            <div className={classes.descriptionWorkContainer}>
                <span className={classes.descriptionTitle}>Project name</span>
                <div className={classes.shortDescription}>
                    <p>Short description</p>
                </div>
            </div>
        </div>
    );
}

export default MyWork;
