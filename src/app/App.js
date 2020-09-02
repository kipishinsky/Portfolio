import React from 'react'
import style from './App.module.scss'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Main from '../main/Main'
import Skills from '../skills/Skills'
import Contacts from '../contacts/Contacts'
import Projects from '../projects/Projects'


export default function App() {
	return (
		<div className={style.page}>
			<Header />
			{/*<Main />
			<Skills />
			<Projects />*/}
			<Contacts />
			<Footer />
		</div>
	)
}