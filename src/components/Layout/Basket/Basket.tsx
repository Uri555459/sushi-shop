import { FC, ReactNode } from 'react'

import styles from './Basket.module.scss'

interface IBasketProps {
	products?: string
	children?: ReactNode
}

export const Basket: FC<IBasketProps> = ({ products, children }) => {
	return <div className={styles.basket}>{children}</div>
}
