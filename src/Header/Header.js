import React from 'react';
import classes from './Header.module.css';
import NavMenu from "../NavMenu/NavMenu";

function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <NavMenu/>
            </div>
        </div>
    );
}

export default Header;
