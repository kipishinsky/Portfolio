import React from 'react'
import style from './Item.module.scss'

import todolistImg from '../../source/images/todolistImg.png'
import newtworkImg from '../../source/images/newtworkImg.jpg'
import constructorImg from '../../source/images/constructorImg.jpg'
import jsGameImg from '../../source/images/jsGameImg.png'
import counterImg from '../../source/images/counterImg.jpg'


import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'


export default function Item() {

    const projItem = [

        {
            img: todolistImg,
            title: 'Todolist',
            link: 'https://kipishinsky.github.io/tstodolist'

        },
        {
            img: newtworkImg,
            title: 'Network',
            link: 'https://kipishinsky.github.io/network'
        },
        {
            img: constructorImg,
            title: 'Constructor site',
            link: 'https://constructor-site.firebaseapp.com/'
        },
        {
            img: jsGameImg,
            title: 'Game Box JS',
            link: 'https://github.com/kipishinsky/JsGameBox'
        },
        {
            img: counterImg,
            title: 'Websocket-chat',
            link: 'https://github.com/kipishinsky/chat-websocket-front'
        }
    ]

    return (
        <div className={style.root}>
            {projItem.map(pr => (<div className={style.block}><ImgMediaCard {...pr}/></div>))}
        </div>
    )
}

const useStyles = makeStyles({
    cardRoot: {
        maxWidth: 300,
        maxHeight: 300,
        padding: '0.5em',
        backgroundColor: '#eeeeee'
    },

})

function ImgMediaCard(pr) {

    const classes = useStyles();

    return (
        <Card className={classes.cardRoot}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image={pr.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h8" component="h1">
                        {pr.title}
                    </Typography>
                    <Link href={pr.link} onClick={() => {
                    }}>
                        {'Go to ' + pr.title}
                    </Link>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}