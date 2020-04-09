import React from 'react';
import classes from './Main.module.css';

function Main() {
    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.greeting}>
                    <span>Hi!</span>
                    <span>My name is Sergey Sevostyanov</span>
                    <span>I'm working on front end development</span>
                </div>
                <div className={classes.photo}>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Main;
