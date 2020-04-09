import React from 'react';
import classes from './DescriptionSkill.module.css';

function DescriptionSkill() {
    return (
        <div className={classes.descriptionSkillContainer}>
            <div className={classes.descriptionTop}>
            </div>
            <h2>React</h2>
            <div className={classes.descriptionBlock}>
                <p>Detailed skill description</p>
            </div>
        </div>
    );
}

export default DescriptionSkill;
