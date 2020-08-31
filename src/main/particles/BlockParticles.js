import React from 'react'
import Particles from 'react-tsparticles'
import style from '../Main.module.scss'

export default function BlockParticles() {

	return <div>
		<Particles className={style.particles}
		           options={{
			           'background': {
				           'color': {
					           'value': '#070708'
				           },
				           'image': '',
				           'position': '50% 50% 50% 50%',
				           'repeat': 'no-repeat',
				           'size': 'cover',
				           'opacity': 1
			           },
			           'backgroundMask': {
				           'cover': {
					           'color': {
						           'value': '#ab2424'
					           },
					           'opacity': 1
				           },
				           'enable': false
			           },
			           'detectRetina': false,
			           'fpsLimit': 300,
			           'infection': {
				           'cure': true,
				           'delay': 100,
				           'enable': false,
				           'infections': 10,
				           'stages': []
			           },
			           'interactivity': {
				           'detectsOn': 'canvas',
				           'events': {
					           'onClick': {
						           'enable': true,
						           'mode': 'push'
					           },
					           'onDiv': {
						           'ids': [],
						           'enable': false,
						           'mode': [],
						           'type': 'circle'
					           },
					           'onHover': {
						           'enable': false,
						           'mode': 'repulse',
						           'parallax': {
							           'enable': false,
							           'force': 2,
							           'smooth': 10
						           }
					           },
					           'resize': true
				           },
				           'modes': {
					           'attract': {
						           'distance': 500,
						           'duration': 0.4,
						           'speed': 0.2
					           },
					           'bubble': {
						           'distance': 400,
						           'duration': 2,
						           'opacity': 0.8,
						           'size': 40
					           },
					           'connect': {
						           'distance': 180,
						           'links': {
							           'opacity': 0.5
						           },
						           'radius': 60
					           },
					           'grab': {
						           'distance': 400,
						           'links': {
							           'opacity': 1
						           }
					           },
					           'push': {
						           'quantity': 7
					           },
					           'remove': {
						           'quantity': 2
					           },
					           'repulse': {
						           'distance': 200,
						           'duration': 0.4,
						           'speed': 5
					           },
					           'slow': {
						           'factor': 3,
						           'radius': 200
					           },
					           'trail': {
						           'delay': 1,
						           'quantity': 1
					           }
				           }
			           },
			           'particles': {
				           'collisions': {
					           'enable': false,
					           'mode': 'bounce'
				           },
				           'color': {
					           'value': '#ffffff',
					           'animation': {
						           'enable': false,
						           'speed': 1,
						           'sync': true
					           }
				           },
				           'links': {
					           'blink': true,
					           'color': {
						           'value': '#1c21d0'
					           },
					           'consent': false,
					           'distance': 250,
					           'enable': true,
					           'opacity': 0.8,
					           'shadow': {
						           'blur': 5,
						           'color': {
							           'value': '#00ff00'
						           },
						           'enable': false
					           },
					           'triangles': {
						           'enable': false
					           },
					           'width': 1,
					           'warp': false
				           },
				           'move': {
					           'angle': 90,
					           'attract': {
						           'enable': true,
						           'rotate': {
							           'x': 600,
							           'y': 1200
						           }
					           },
					           'direction': 'none',
					           'enable': true,
					           'noise': {
						           'delay': {
							           'random': {
								           'enable': false,
								           'minimumValue': 0
							           },
							           'value': 0
						           },
						           'enable': false
					           },
					           'outMode': 'out',
					           'random': false,
					           'speed': 4,
					           'straight': false,
					           'trail': {
						           'enable': false,
						           'length': 10,
						           'fillColor': {
							           'value': '#000000'
						           }
					           },
					           'vibrate': false,
					           'warp': true
				           },
				           'number': {
					           'density': {
						           'enable': true,
						           'area': 800,
						           'factor': 1000
					           },
					           'limit': 170,
					           'value': 70
				           },
				           'opacity': {
					           'animation': {
						           'enable': true,
						           'minimumValue': 0.2,
						           'speed': 0.4,
						           'sync': true
					           },
					           'random': {
						           'enable': false,
						           'minimumValue': 1
					           },
					           'value': 0.5
				           },
				           'rotate': {
					           'animation': {
						           'enable': false,
						           'speed': 0,
						           'sync': false
					           },
					           'direction': 'clockwise',
					           'path': false,
					           'random': false,
					           'value': 0
				           },
				           'shadow': {
					           'blur': 0,
					           'color': {
						           'value': '#000000'
					           },
					           'enable': false,
					           'offset': {
						           'x': 0,
						           'y': 0
					           }
				           },
				           'shape': {
					           'options': {
						           'polygon': {
							           'nb_sides': 8
						           },
						           'star': {
							           'nb_sides': 5
						           },
						           'image': {
							           'src': 'https://cdn.matteobruni.it/images/particles/github.svg',
							           'width': 100,
							           'height': 100
						           },
						           'images': {
							           'src': 'https://cdn.matteobruni.it/images/particles/github.svg',
							           'width': 100,
							           'height': 100
						           }
					           },
					           'type': 'circle'
				           },
				           'size': {
					           'animation': {
						           'destroy': 'none',
						           'enable': false,
						           'minimumValue': 0.1,
						           'speed': 20,
						           'startValue': 'max',
						           'sync': false
					           },
					           'random': {
						           'enable': true,
						           'minimumValue': 1
					           },
					           'value': 3
				           },
				           'stroke': {
					           'width': 0,
					           'color': {
						           'value': '#090808',
						           'animation': {
							           'enable': false,
							           'speed': 1,
							           'sync': true
						           }
					           }
				           },
				           'twinkle': {
					           'lines': {
						           'enable': false,
						           'frequency': 0.05,
						           'opacity': 1
					           },
					           'particles': {
						           'enable': false,
						           'frequency': 0.05,
						           'opacity': 1
					           }
				           }
			           },
			           'pauseOnBlur': true
		           }}/>
	</div>
}
