import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Sidebar } from './Sidebar/Sidebar'
import { Basket } from './Basket/Basket'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'

import styles from './Layout.module.scss'

import { pageRoutesData } from '../../pages/pageRoutesData'

export const Layout: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Sidebar />
			<div className={styles.inner}>
				<Header />
				<div className='container'>
					<Routes>
						{pageRoutesData.map(route => (
							<Route
								key={route.path}
								path={route.path}
								element={route.element}
							/>
						))}
					</Routes>
					<Footer />
				</div>
			</div>
			<Basket />
		</div>
	)
}
