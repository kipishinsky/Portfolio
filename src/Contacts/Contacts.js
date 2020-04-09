import React from 'react';
import classes from './Contacts.module.css';
import Title from "../Title/Title";

function Contacts(props) {
    return (
        <div className={classes.contacts}>
            <div className={classes.container}>
                <Title name={props.name}/>
                <form action="" method="post" className={classes.form}>
                    <input type="text" className={classes.input} value='Name'/>
                    <input type="text" className={classes.input} value='Contact number'/>
                    <textarea className={classes.textarea} value="Сomments">
                    </textarea>
                </form>
                <button className={classes.button}>Send</button>
            </div>
        </div>
    );
}

export default Contacts;
