import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import { Sprite } from '../../'
import { Search } from './Search/Search'

import styles from './Header.module.scss'

export const Header: FC = () => {
	const [showSearch, setShowSearch] = useState(false)

	const searchButtonHandler = () => {
		setShowSearch(!showSearch)
	}

	return (
		<header className={styles.header}>
			<div className={styles.header__inner}>
				<div className={styles.header__contacts}>
					<div className={styles['header__contacts-title']}>Наш телефон</div>
					<a
						className={styles['header__contacts-link']}
						href='tel:+996705188955'
					>
						+996 705 188 955
					</a>
					<a
						className={styles['header__contacts-link']}
						href='tel:+996555188955'
					>
						+996 555 188 955
					</a>
					<div className={styles['header__contacts-time']}>
						<Sprite id='watch' />
						<span>работаем с 10:00 до 00:00</span>
					</div>
				</div>

				<div className={styles.header__city}>
					<span className={styles['header__city-dropdown']}>Город:</span>
					<span className={styles['header__city-name']}>Бишкек</span>
				</div>

				<div className={styles.header__right}>
					<nav className={styles.header__nav}>
						<NavLink
							className={({ isActive }) => {
								return cn(styles['header__nav-link'], {
									[styles.active]: isActive,
								})
							}}
							to='/reviews'
						>
							Отзывы
						</NavLink>
						<NavLink
							className={({ isActive }) => {
								return cn(styles['header__nav-link'], {
									[styles.active]: isActive,
								})
							}}
							to='/order'
						>
							Доставка и оплата
						</NavLink>
					</nav>
					<div className={styles.header__search}>
						{showSearch && <Search />}
						<button
							onClick={searchButtonHandler}
							className={styles['header__search-button']}
						>
							<Sprite id='search' />
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}
