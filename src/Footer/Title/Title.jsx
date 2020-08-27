import React from "react";
import style from './Title.module.scss'

const Flip = require('react-reveal').default;

const Title = (props) => {

	return(
		<div className={style.title}>
			<Flip bottom>
				<h2>{props.title}</h2>
			</Flip>
		</div>
	)
};

export default Title
