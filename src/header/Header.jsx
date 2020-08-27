import React from 'react'
import style from './Header.module.scss'
const {Link} = require('react-scroll').default

export default function Header() {
	return (

		<div className={style.header}>
			<div className={style.menu}>
				<Link className={style.link}>Main</Link>

				<Link
					activeClass={style.active}
					to="ToSkills"
					spy={true}
					smooth={true}
					offset={1}
					duration={700}
					className={style.link}>Skills</Link>

				<Link activeClass={style.active}
				      to="ToProjects"
				      spy={true}
				      smooth={true}
				      offset={1}
				      duration={700}
				      className={style.link}>Projects</Link>

				<Link activeClass={style.active}
				      to="ToContacts"
				      spy={true}
				      smooth={true}
				      offset={1}
				      duration={700}
				      className={style.link}>Contacts</Link>

			</div>

		</div>
	)
}