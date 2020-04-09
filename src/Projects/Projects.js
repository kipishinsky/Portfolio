import React from 'react';
import classes from './Projects.module.css';
import MyWork from "./MyWork/MyWork";
import Title from "../Title/Title";

function Projects(props) {
    return (
        <div className={classes.projects}>
            <div className={classes.container}>
                <Title name={props.name}/>
                <div className={classes.container_cards}>
                    <MyWork/>
                    <MyWork/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
