import { FC } from 'react'
import cn from 'classnames'

import basketMap from '../../../assets/images/basket/map.jpg'

import styles from './BasketEmpty.module.scss'
import { Sprite } from '../../Sprite/Sprite'

export const BasketEmpty: FC = () => {
	return (
		<div className={styles.basket}>
			<div className={styles.basket__card}>
				<h4 className={styles['basket__card-title']}>Ваша корзина пуста.</h4>
				<p className={styles['basket__card-subtitle']}>
					Добавьте же скорее что-нибудь!
				</p>
				<p className={styles['basket__card-shipping']}>
					Бесплатная доставка от 800 СОМ
				</p>
			</div>

			<div className={styles.basket__card}>
				<img className={styles['basket__card-map']} src={basketMap} alt='Map' />
				<div className={styles['basket__card-mark']}>
					<Sprite id='mark' />
				</div>
				<h4 className={styles['basket__card-title']}>Укажите адрес</h4>
				<p
					className={cn(
						styles['basket__card-subtitle'],
						styles['basket__card-subtitle--2']
					)}
				>
					И узнайте время доставки
				</p>
			</div>
		</div>
	)
}
