import React from 'react'
import style from './Main.module.scss'
import BlockParticles from './particles/BlockParticles'
import {Container} from '@material-ui/core'
import Tilt from 'react-tilt'
import ReactTypingEffect from 'react-typing-effect'
import RubberBand from 'react-reveal/RubberBand';
import BlockRebberBand from './rubberBand/BlockRubberBand'


export default function Main() {

	return (
		<div className={style.main} name={'main'}>

			<BlockParticles />

			{/*<div className={style.noga}></div>*/}

			<Container maxWidth='md'>

				<BlockRebberBand/>
				{/*<RubberBand>
					<div className={style.presentation}>
						<div className={style.text}>
							<p><ReactTypingEffect
								className={style.name}
								text="Hello!"
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

						<Tilt
							reverse={true}
							speed={10}
							reset={false}>
							<div className={style.photo}> </div>
						</Tilt>
					</div>
				</RubberBand>*/}
			</Container>
		</div>

	)
}

