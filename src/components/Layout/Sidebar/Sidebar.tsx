import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from './Logo/Logo'
import { Sprite } from '../../'

import { pageRoutesData } from '../../../pages/pageRoutesData'

import styles from './Sidebar.module.scss'

export const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<Logo />
			<nav className={styles.nav}>
				<ul className={styles.nav__list}>
					{pageRoutesData.map(link =>
						link.path !== '/' ? (
							<li className={styles.nav__item} key={link.label}>
								<NavLink className={styles.nav__link} to={link.path}>
									<Sprite id={link.iconName} />
									<span>{link.label}</span>
								</NavLink>
							</li>
						) : null
					)}
				</ul>
			</nav>
		</aside>
	)
}
