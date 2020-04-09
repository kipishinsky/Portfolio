import React from 'react';
import classes from './Navmenu.module.css';

function NavMenu() {
    return (
        <div className={classes.navMenu}>
            <a href="" className={classes.link}>Home</a>
            <a href="" className={classes.link}>Skills</a>
            <a href="" className={classes.link}>Projects</a>
            <a href="" className={classes.link}>Contacts</a>
        </div>
    );
}

export default NavMenu;
