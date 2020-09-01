import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Main from '../main/Main'
import Skills from '../skills/Skills'
import style from './App.module.scss'
import Contacts from '../contacts/Contacts'
import Projects from '../projects/Projects'


export default function App() {
	return (
		<div className={style.page}>
			<Header />
			<Main />
			<Skills />
			<Projects />
			{/*<Contacts />*/}
			<Footer />
		</div>
	)
}