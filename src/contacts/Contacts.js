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
			<div className={style.description}>
				If you wanna get in touch, talk to me about a project or job or just say hi,
				fill up the awesome form below or send an email
				to <b>sergeysevostyanov007@gmail.com</b> and we will definitely talk!
			</div>
			<div className={style.contactBlock}>
				<ContactForm />
			</div>

		</div>
	)
}