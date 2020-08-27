import React from 'react'
import style from './Footer.module.scss'
import Title from './Title/Title'

import {Container} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TelegramIcon from '@material-ui/icons/Telegram'

const Fade = require('react-reveal').default

const Footer = () => {
	return (
		<div className={style.footer}>
			<Fade bottom>
				<Container maxWidth={'md'}>
					<header><Title title={'Sergey Kipishinsky'}/></header>
					<div className={style.iconsContainer}>
						<a href='https://github.com/kipishinsky' style={{color: 'black'}}>
							<GitHubIcon className={style.icons}/>
						</a>
						<a href='https://t.me/kipishinsky' style={{color: 'black'}}>
							<TelegramIcon className={style.icons}/>
						</a>
						<a href='https://linkedin.com/' style={{color: 'black'}}>
							<LinkedInIcon className={style.icons}/>
						</a>
					</div>

				</Container>
				<div className={style.copyRights}>
					© 2020 Все права защищены
				</div>
			</Fade>
		</div>
	)
}

export default Footer