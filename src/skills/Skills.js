import React from 'react'
import Zoom from 'react-reveal/Zoom'
import style from './Skills.module.scss'
import Icons from './icons-module/Icons'
import Title from '../Title/Title'

export default function Skills() {
	return (
		<div name={'skills'} className={style.root}>
			<div className={style.container}>
				<Zoom>
					<div className={style.text}><Title title={'SKILLS'}/></div>
				</Zoom>
			</div>
			<Icons/>
		</div>
	)
}


