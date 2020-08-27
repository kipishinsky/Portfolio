import React from 'react'
import style from './Main.module.scss'
import {Container} from '@material-ui/core'
const ReactTypingEffect = require('react-typing-effect').default
const Particles = require('react-tsparticles').default
const Zoom = require('react-reveal').default
const Tilt = require('react-tilt').default


export default function Main() {

	return (
		<div className={style.main}>

			<Particles className={style.particles}
			           options={{
				           background: {
					           color: {
						           value: '#24262a',
					           },
				           },
				           fpsLimit: 60,
				           interactivity: {
					           detectsOn: 'canvas',
					           events: {
						           onClick: {
							           enable: true,
							           mode: 'push',
						           },
						           onHover: {
							           enable: true,
							           mode: 'repulse',
						           },
						           resize: true,
					           },
					           modes: {
						           bubble: {
							           distance: 400,
							           duration: 2,
							           opacity: 0.8,
							           size: 40,
						           },
						           push: {
							           quantity: 2,
						           },
						           repulse: {
							           distance: 50,
							           duration: 0.4,
						           },
					           },
				           },
				           particles: {
					           color: {
						           value: '#0339fc',
					           },
					           links: {
						           color: '#373ef1',
						           distance: 250,
						           enable: true,
						           opacity: 1.5,
						           width: 0.5,
					           },
					           collisions: {
						           enable: true,
					           },
					           move: {
						           direction: 'none',
						           enable: true,
						           outMode: 'bounce',
						           random: false,
						           speed: 5,
						           straight: false,
					           },
					           number: {
						           density: {
							           enable: true,
							           value_area: 800,
						           },
						           value: 80,
					           },
					           opacity: {
						           value: 0.5,
					           },
					           shape: {
						           type: 'circle',
					           },
					           size: {
						           random: true,
						           value: 5,
					           },
				           },
				           detectRetina: true,
			           }}
			/>

			<Container maxWidth='md'>
				<Zoom top>
					<div className={style.presentation}>
						<div className={style.text}>
							<p><ReactTypingEffect
								className={style.name}
								text="Hi there"
								typingDelay={2000}
								eraseDelay={10000000}
								speed={70}/></p>
							<p><ReactTypingEffect
								className={style.name}
								typingDelay={3500}
								eraseDelay={10000000}
								text="My name is Sergey"
								speed={70}/></p>
							<p><ReactTypingEffect
								className={style.name}
								text="I'm Front-End Developer"
								typingDelay={5500}
								eraseDelay={10000000}
								speed={70}/></p>
						</div>

						<Tilt max={10}>
							<div className={style.photo}>
								<div className={style.photoImage}> </div>
							</div>
						</Tilt>
					</div>
				</Zoom>
			</Container>
		</div>

	)
}

