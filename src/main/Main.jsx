import React from 'react'
import style from './Main.module.scss'
import BlockParticles from './particles/BlockParticles'
import {Container} from '@material-ui/core'
import BlockRebberBand from './rubberBand/BlockRubberBand'


export default function Main() {

	return (
		<div className={style.main} name={'main'}>
			<BlockParticles />
			<Container maxWidth='md'>
				<BlockRebberBand/>
			</Container>
		</div>

	)
}

