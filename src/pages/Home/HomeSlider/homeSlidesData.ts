import slide1 from '../../../assets/images/home/1.jpeg'
import slide2 from '../../../assets/images/home/2.jpeg'
import slide3 from '../../../assets/images/home/3.jpg'

interface ISlide {
	imageUrl: string
}

export const homeSlidesData: ISlide[] = [
	{
		imageUrl: slide1,
	},
	{
		imageUrl: slide2,
	},
	{
		imageUrl: slide3,
	},
]
