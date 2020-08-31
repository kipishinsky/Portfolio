import React from 'react'
import style from '../Main.module.scss'
import RubberBand from 'react-reveal/RubberBand'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-tilt'

export default function BlockRebberBand() {

	return (
		<div className={style.wrap}>
			<RubberBand>
				<div className={style.presentation}>
					<div className={style.text}>
						<div><ReactTypingEffect
							className={style.name}
							text="Hello!"
							typingDelay={2000}
							eraseDelay={1000000}
							speed={70}/></div>
						<div><ReactTypingEffect
							className={style.name}
							typingDelay={3500}
							eraseDelay={1000000}
							text="My name is Sergey"
							speed={70}/></div>
						<div><ReactTypingEffect
							className={style.name}
							text="I'm Front-End Developer!"
							typingDelay={5500}
							eraseDelay={1000000}
							speed={70}/></div>
					</div>

					<Tilt reverse={true} speed={10} reset={false}>
						<div className={style.photo}> </div>
					</Tilt>
				</div>
			</RubberBand>
		</div>
	)
}

