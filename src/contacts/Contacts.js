import React from 'react'
import style from './Contacts.module.scss'
import Title from '../title/Title'
import ContactForm from './contactForm/ContactForm'

export default function Contacts() {

	return (
		<div className={style.root} name={'contacts'}>
			<div className={style.title}>
				<Title title={'CONTACTS'} />
			</div>
			<div className={style.contactBlock}>
				<ContactForm />
			</div>
		</div>
	)
}