import { FC } from 'react'
import { Sprite } from '../../../Sprite/Sprite'

import styles from './Search.module.scss'

export const Search: FC = () => {
	return (
		<div className={styles.search}>
			<input className={styles.search__input} type='text' />
		</div>
	)
}
