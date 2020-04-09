import React from 'react';
import classes from './Skills.module.css';
import DescriptionSkill from "./DescriptionSkill/DescriptionSkill";
import Title from "../Title/Title";

function Skills(props) {
    return (
        <div className={classes.skills}>
            <div className={classes.container}>
                <Title name={props.name}/>
                <div className={classes.container_cards}>
                    <DescriptionSkill/>
                    <DescriptionSkill/>
                    <DescriptionSkill/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
