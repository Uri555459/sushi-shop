import { FC, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

import { homeSlidesData } from './homeSlidesData'

import styles from './HomeSlider.module.scss'

export const HomeSlider: FC = () => {
	return (
		<Swiper
			pagination={{
				clickable: true,
			}}
			loop={true}
			modules={[Pagination]}
			className={styles.home__slider}
		>
			{homeSlidesData &&
				homeSlidesData.map((product, index) => (
					<SwiperSlide
						className={styles['home__slider-slide']}
						key={product.imageUrl + index}
						style={{ backgroundImage: `url(${product.imageUrl})` }}
					></SwiperSlide>
				))}
		</Swiper>
	)
}
