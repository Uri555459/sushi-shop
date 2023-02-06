import { FC } from 'react'

import styles from './Home.module.scss'
import { HomeSlider } from './HomeSlider/HomeSlider'

export const Home: FC = () => {
	return (
		<div className={styles.home}>
			<HomeSlider />
		</div>
	)
}
