import React from 'react'
import style from './Footer.module.scss'
import Title from '../title/Title'

import {Container} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TelegramIcon from '@material-ui/icons/Telegram'

const Fade = require('react-reveal').default

const Footer = () => {
	return (
		<div className={style.footer}>
			<Fade bottom>
				<Container maxWidth={'lg'}>
					<div className={style.title}>
						<Title title={'SERGEY KIPISHINSKY'}/>
					</div>
					<div className={style.iconsContainer}>
						<a href='https://github.com/kipishinsky' style={{color: 'white'}}>
							<GitHubIcon className={style.icons}/>
						</a>
						<a href='https://t.me/kipishinsky' style={{color: 'white'}}>
							<TelegramIcon className={style.icons}/>
						</a>
						<a href='https://linkedin.com/' style={{color: 'white'}}>
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