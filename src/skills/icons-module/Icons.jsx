import React, {useEffect} from 'react'
import style from '../Skills.module.scss'
import es6 from '../../source/images/es6.jpg'
import github from '../../source/images/github.png'
import webpack from '../../source/images/webpack.png'
import jquery from '../../source/images/jquery.png'
import js from '../../source/images/js.png'
import react from '../../source/images/react.svg'
import redux from '../../source/images/redux.png'
import sass from '../../source/images/sass.svg'
import css from '../../source/images/css.png'
import html from '../../source/images/html.png'
import typescript from '../../source/images/typescript.png'
import nodejs from '../../source/images/nodejs.png'
import parcel from '../../source/images/parcel.png'
import axios from '../../source/images/axios.png'
import lodash from '../../source/images/lodash.svg'
import materialui from '../../source/images/materialui.png'
import storybook from '../../source/images/storybook.png'
import wb from '../../source/images/wb.png'
import firebase from '../../source/images/firebase.png'

const $ = window.$

const entries = [
	{
		image: es6,
		width: '100',
		height: '100',
		url: 'http://es6-features.org/#Constants',
		target: '_bottom'
	},
	{
		image: github,
		width: '140',
		height: '140',
		url: 'https://github.com/',
		target: '_top'
	},
	{
		image: webpack,
		width: '130',
		height: '130',
		url: 'https://webpack.js.org/',
		target: '_top'
	},
	{
		image: jquery,
		width: '110',
		height: '110',
		url: 'https://jquery.com/',
		target: '_top'
	},
	{
		image: js,
		width: '105',
		height: '105',
		url: 'https://www.javascript.com/',
		target: '_top'
	},
	{
		image: react,
		width: '115',
		height: '115',
		url: 'https://reactjs.org/',
		target: '_top'
	},
	{
		image: redux,
		width: '135',
		height: '135',
		url: 'https://redux.js.org/',
		target: '_top'
	},
	{
		image: sass,
		width: '95',
		height: '95',
		url: 'https://sass-lang.com/',
		target: '_top'
	},
	{
		image: css,
		width: '103',
		height: '103',
		url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		target: '_top'
	},
	{
		image: html,
		width: '103',
		height: '103',
		url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
		target: '_top'
	},
	{
		image: typescript,
		width: '91',
		height: '91',
		url: 'https://www.typescriptlang.org/',
		target: '_top'
	},
	{
		image: nodejs,
		width: '95',
		height: '95',
		url: 'https://nodejs.org/',
		target: '_top'
	},
	{
		image: parcel,
		width: '115',
		height: '115',
		url: 'https://parceljs.org/',
		target: '_top'
	},
	{
		image: axios,
		width: '125',
		height: '125',
		url: 'https://github.com/axios/axios',
		target: '_top'
	},
	{
		image: lodash,
		width: '86',
		height: '86',
		url: 'https://lodash.com/',
		target: '_top'
	},
	{
		image: materialui,
		width: '105',
		height: '105',
		url: 'https://material-ui.com/',
		target: '_top'
	},
	{
		image: storybook,
		width: '105',
		height: '105',
		url: 'https://storybook.js.org/',
		target: '_top'
	},
	{
		image: wb,
		width: '92',
		height: '92',
		url: 'https://www.jetbrains.com/webstorm/',
		target: '_top'
	},
	{
		image: firebase,
		width: '120',
		height: '120',
		url: 'https://firebase.google.com/',
		target: '_top'
	}
]

const settings = {
	entries: entries,
	width: '100%',
	height: '100%',
	radius: '75%',
	radiusMin: 5,
	bgDraw: true,
	bgColor: '#bdbdbd',
	opacityOver: 3.00,
	opacityOut: 0.1,
	opacitySpeed: 2,
	fov: 800,
	speed: 0.5,
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

export default function Icons() {
	useEffect(() => {
		$('#holder').svg3DTagCloud(settings)
	}, [])
	return <div id="holder" className={style.iconsBar}> </div>
}