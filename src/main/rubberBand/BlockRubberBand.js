import React from 'react';
import RubberBand from 'react-reveal/RubberBand';
import style from '../Main.module.scss'
import Tilt from 'react-tilt'
import ReactTypingEffect from 'react-typing-effect'


export default class BlockRebberBand extends React.Component {
	render() {
		return (
			<div className={style.bbbbr}>
				<RubberBand>
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
				</RubberBand>
			</div>
		);
	}
}
