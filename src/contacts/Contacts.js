import React from 'react'
import style from './Contacts.module.scss'
import Title from '../title/Title'

export default function Contacts() {


	return (
		<div className={style.root}>
			<div className={style.title}>
				<Title title={'CONTACTS'} />
			</div>
			<div className={style.contactBlock}>

			</div>
		</div>
	)
}