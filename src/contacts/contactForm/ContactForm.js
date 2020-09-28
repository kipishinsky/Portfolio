import React, {useState} from 'react'
import style from '../Contacts.module.scss'
import {Button, TextField} from '@material-ui/core'
import Fade from 'react-reveal/Fade'
import axios from 'axios'

export default function ContactForm() {

	const [state, setState] = useState({
		name: '',
		contacts: '',
		message: '',
		dis: false,
		receiver: 'pochta'
	})

	const setName = (e) => {
		setState({
			...state,
			name: e.currentTarget.value
		})
	}
	const setEmail = (e) => {
		setState({
			...state,
			contacts: e.currentTarget.value
		})
	}
	const setMessage = (e) => {
		setState({
			...state,
			message: e.currentTarget.value
		})
	}
	const sendForm = () => {
		if (state.contacts !== '') {
			setState({...state, dis: true})
			axios.post('сюда вставить надо хероку локал серв', {...state})
				.then(res => {
						return res.status === 200 ? setState({
							...state,
							message: '',
							name: '',
							contacts: '',
							dis: false
						}) : null
					}
				)
		}

	}

	return (
			<Fade>
				<div className={style.insideContainer}>
					<form className={style.form}>
						<TextField
							className={style.nameContacts}
							placeholder='Name'
							onChange={setName}
							value={state.name}
						/>
						<TextField
							className={style.nameContacts}
							placeholder='Email or Phone Number'
							onChange={setEmail}
							value={state.contacts}
						/>
						<br />
						<TextField
							className={style.inputMessage}
							placeholder='Your message'
							onChange={setMessage}
							value={state.message}
							rows={5} multiline
						/>
						<div className={style.button}>
							<Button variant='contained'
							        onClick={sendForm}
							        style={{borderColor: 'white', backgroundColor: 'black'}}
							        disabled={state.dis}
							        color='primary'>Send</Button>
						</div>
					</form>
				</div>
			</Fade>
	)
}



