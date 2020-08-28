import React, {useEffect} from 'react'
import style from './Skills.module.scss'
import es6 from '../source/images/es6.jpg'
import github from '../source/images/github.png'
import webpack from '../source/images/webpack.png'
import jquery from '../source/images/jquery.png'
import js from '../source/images/js.png'
import react from '../source/images/react.svg'
import redux from '../source/images/redux.png'
import sass from '../source/images/sass.svg'
import css from '../source/images/css.png'
import html from '../source/images/html.png'
import typescript from '../source/images/typescript.png'
import nodejs from '../source/images/nodejs.png'
import parcel from '../source/images/parcel.png'
import axios from '../source/images/axios.png'
import lodash from '../source/images/lodash.svg'
import materialui from '../source/images/materialui.png'
import storybook from '../source/images/storybook.png'
import wb from '../source/images/wb.png'
import firebase from '../source/images/firebase.png'

const $ = window.$

const entries = [

	{
		image: es6,
		width: '80',
		height: '80',
		url: 'http://es6-features.org/#Constants',
		target: '_top',
		tooltip: 'ECMAScript 6'
	},
	{
		image: github,
		width: '120',
		height: '120',
		url: 'https://github.com/',
		target: '_top',
		tooltip: 'GitHub'
	},
	{
		image: webpack,
		width: '110',
		height: '110',
		url: 'https://webpack.js.org/',
		target: '_top',
		tooltip: 'WebPack'
	},
	{
		image: jquery,
		width: '90',
		height: '90',
		url: 'https://jquery.com/',
		target: '_top',
		tooltip: 'jQuery'
	},
	{
		image: js,
		width: '85',
		height: '85',
		url: 'https://www.javascript.com/',
		target: '_top',
		tooltip: 'Javascript'
	},
	{
		image: react,
		width: '95',
		height: '95',
		url: 'https://reactjs.org/',
		target: '_top',
		tooltip: 'React'
	},
	{
		image: redux,
		width: '115',
		height: '115',
		url: 'https://redux.js.org/',
		target: '_top',
		tooltip: 'Redux'
	},
	{
		image: sass,
		width: '75',
		height: '75',
		url: 'https://sass-lang.com/',
		target: '_top',
		tooltip: 'Sass'
	},
	{
		image: css,
		width: '83',
		height: '83',
		url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		target: '_top',
		tooltip: 'Css'
	},
	{
		image: html,
		width: '83',
		height: '83',
		url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
		target: '_top',
		tooltip: 'Html'
	},
	{
		image: typescript,
		width: '71',
		height: '71',
		url: 'https://www.typescriptlang.org/',
		target: '_top',
		tooltip: 'typescript'
	},
	{
		image: nodejs,
		width: '75',
		height: '75',
		url: 'https://nodejs.org/',
		target: '_top',
		tooltip: 'node.js'
	},
	{
		image: parcel,
		width: '95',
		height: '95',
		url: 'https://parceljs.org/',
		target: '_top',
		tooltip: 'parcel'
	},
	{
		image: axios,
		width: '105',
		height: '105',
		url: 'https://github.com/axios/axios',
		target: '_top',
		tooltip: 'axios'
	},
	{
		image: lodash,
		width: '66',
		height: '66',
		url: 'https://lodash.com/',
		target: '_top',
		tooltip: 'lodash'
	},
	{
		image: materialui,
		width: '85',
		height: '85',
		url: 'https://material-ui.com/',
		target: '_top',
		tooltip: 'material-ui'
	},
	{
		image: storybook,
		width: '85',
		height: '85',
		url: 'https://storybook.js.org/',
		target: '_top',
		tooltip: 'storybook'
	},
	{
		image: wb,
		width: '72',
		height: '72',
		url: 'https://www.jetbrains.com/webstorm/',
		target: '_top',
		tooltip: 'webstorm'
	},
	{
		image: firebase,
		width: '80',
		height: '80',
		url: 'https://firebase.google.com/',
		target: '_top',
		tooltip: 'firebase'
	}

]

const settings = {

	entries: entries,
	width: '100%',
	height: '100%',
	radius: '80%',
	radiusMin: 55,
	bgDraw: true,
	bgColor: '#d7d6d6',
	opacityOver: 3.00,
	opacityOut: 0.1,
	opacitySpeed: 2,
	fov: 800,
	speed: 0.26,
	fontFamily: 'Oswald, Arial, sans-serif',
	fontSize: '25',
	fontColor: '#fff',
	fontWeight: 'bold',//bold
	fontStyle: 'normal',//italic
	fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
	fontToUpperCase: true,
	tooltipFontFamily: 'Oswald, Arial, sans-serif',
	tooltipFontSize: '14',
	tooltipFontColor: '#090909',
	tooltipFontWeight: 'bold',//bold
	tooltipFontStyle: 'normal',//italic
	tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
	tooltipFontToUpperCase: true,
	tooltipTextAnchor: 'left',
	tooltipDiffX: 0,
	tooltipDiffY: 100

}

export default function Skills() {
	useEffect(() => {
		debugger
		$('#holder').svg3DTagCloud(settings)
	}, [])
	return <div id="holder" className={style.holder}>

	</div>
}