import React from 'react';
import style from './Projects.module.scss'
import Title from '../title/Title'
import Item from './project/Item'


export default function Projects() {

	return (
		<div className={style.root} name={'projects'}>

			<div className={style.title} >
				<Title title={'PROJECTS'} />
			</div>
			<div className={style.projects}>
				<Item />
			</div>
		</div>
	)
}