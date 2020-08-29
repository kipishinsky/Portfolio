import React from 'react'
import style from './Header.module.scss'
const {Link} = require('react-scroll').default

export default function Header() {
	return (

		<div className={style.header}>

			<div className={style.menu}>
				<Link className={style.link}
				      to="main"
				      smooth={true}>MAIN</Link>

				<Link
					activeClass={style.active}
					className={style.link}
					to="skills"
					spy={true}
					smooth={true}
					offset={1}
					duration={700}>SKILLS</Link>

				<Link activeClass={style.active}
				      className={style.link}
				      to="projects"
				      spy={true}
				      smooth={true}
				      offset={1}
				      duration={700}>PROJECTS</Link>

				<Link activeClass={style.active}
				      className={style.link}
				      to="contacts"
				      spy={true}
				      smooth={true}
				      offset={1}
				      duration={700}>CONTACTS</Link>

			</div>

		</div>
	)
}