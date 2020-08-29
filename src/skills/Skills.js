import React from 'react'
import Zoom from 'react-reveal/Zoom'
import style from './Skills.module.scss'
import Icons from './icons-module/Icons'


export default function Skills() {

	return (
		<div name={'skills'}>
			<div className={style.wrap}>
				<Zoom>
					<h1>Skills</h1>
				</Zoom>
			</div>
			<Icons/>
		</div>
	)
}


