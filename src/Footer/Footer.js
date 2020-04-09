import React from 'react';
import classes from './Footer.module.css';
import Title from "../Title/Title";

function Footer(props) {
    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                <Title name={props.name}/>
                <div className={classes.containerLogo}>
                    <div className={classes.logo}><img src="" alt=""/></div>
                    <div className={classes.logo}><img src="" alt=""/></div>
                    <div className={classes.logo}><img src="" alt=""/></div>
                    <div className={classes.logo}><img src="" alt=""/></div>
                </div>
                <span className={classes.footerCopyright}>&copy;2020 All rights reserved</span>
            </div>
        </div>
    );
}

export default Footer;
