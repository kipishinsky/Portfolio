import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Main from '../main/Main'
import Skills from '../skills/Skills'
import style from './App.module.scss'


export default function App() {
	return (
		<div className={style.page}>
			{/*<Header />*/}
			<Main />
			{/*<Skills />
			<Footer />*/}
		</div>
	)
}