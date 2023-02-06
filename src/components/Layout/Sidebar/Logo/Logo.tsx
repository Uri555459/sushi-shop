import { FC } from 'react'
import { Link } from 'react-router-dom'

import logoImage from '../../../../assets/images/logo.png'

import styles from './Logo.module.scss'

export const Logo: FC = () => {
	return (
		<Link to='/'>
			<img src={logoImage} alt='Logo' />
		</Link>
	)
}
