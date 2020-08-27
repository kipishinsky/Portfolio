import React, {useEffect} from 'react'
import style from './Skills.module.scss'
import es6 from '../source/images/es6.jpg'
import githubLogo from '../source/images/github.png'
import webpack from '../source/images/webpack.png'
import jquery from '../source/images/jquery.png'

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
		image: githubLogo,
		width: '120',
		height: '120',
		url: 'https://github.com/',
		target: '_top',
		tooltip: 'GitHub'
	},
	{
		image: webpack,
		width: '100',
		height: '100',
		url: 'https://webpack.js.org/',
		target: '_top',
		tooltip: 'WebPack'
	},
	{
		image: jquery,
		width: '90',
		height: '90',
		url: 'https://webpack.js.org/',
		target: '_top',
		tooltip: 'WebPack'
	},


]

const settings = {

	entries: entries,
	width: '100%',
	height: '100%',
	radius: '65%',
	radiusMin: 25,
	bgDraw: true,
	bgColor: '#fdfdfd',
	opacityOver: 1.00,
	opacityOut: 0.05,
	opacitySpeed: 6,
	fov: 800,
	speed: 1.1,
	fontFamily: 'Oswald, Arial, sans-serif',
	fontSize: '25',
	fontColor: '#fff',
	fontWeight: 'normal',//bold
	fontStyle: 'normal',//italic
	fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
	fontToUpperCase: true,
	tooltipFontFamily: 'Oswald, Arial, sans-serif',
	tooltipFontSize: '11',
	tooltipFontColor: '#fff',
	tooltipFontWeight: 'bold',//bold
	tooltipFontStyle: 'normal',//italic
	tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
	tooltipFontToUpperCase: false,
	tooltipTextAnchor: 'left',
	tooltipDiffX: 0,
	tooltipDiffY: 10

}

export default function Skills() {
	useEffect(() => {
		debugger
		$('#holder').svg3DTagCloud(settings)
	}, [])
	return <div id="holder" className={style.holder}>

	</div>
}