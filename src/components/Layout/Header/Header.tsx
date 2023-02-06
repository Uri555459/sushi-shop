import { FC } from 'react'

import { Sprite } from '../../'

import styles from './Header.module.scss'

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__inner}>
				<div className={styles.header__contacts}>
					<span className={styles['header__contacts-title']}>Наш телефон</span>
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
					<div>
						<Sprite id='watch' />
						<span>работаем с 10:00 до 00:00</span>
					</div>
				</div>
			</div>
		</header>
	)
}
