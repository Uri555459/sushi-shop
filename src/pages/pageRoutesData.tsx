import { ReactNode } from 'react'
import {
	CornDog,
	Drink,
	Pizza,
	Rolls,
	Salad,
	Sets,
	Soup,
	Sushi,
	Wok,
	Stocks,
	Home,
	Review,
	Order,
} from './'

interface IPageRoute {
	path: string
	iconName: string
	label: string
	element: ReactNode
}

export const pageRoutesData: IPageRoute[] = [
	{
		path: '/',
		iconName: '',
		label: '',
		element: <Home />,
	},
	{
		path: '/reviews',
		iconName: '',
		label: '',
		element: <Review />,
	},
	{
		path: '/order',
		iconName: '',
		label: '',
		element: <Order />,
	},
	{
		path: '/pizza',
		iconName: 'pizza',
		label: 'Пицца',
		element: <Pizza />,
	},
	{
		path: '/sets',
		iconName: 'sets',
		label: 'Сеты',
		element: <Sets />,
	},
	{
		path: '/wok',
		iconName: 'wok',
		label: 'WOK',
		element: <Wok />,
	},
	{
		path: '/rolls',
		iconName: 'rolls',
		label: 'Роллы',
		element: <Rolls />,
	},
	{
		path: '/sushi',
		iconName: 'sushi',
		label: 'Суши',
		element: <Sushi />,
	},
	{
		path: '/salad',
		iconName: 'salad',
		label: 'Салаты',
		element: <Salad />,
	},
	{
		path: '/soup',
		iconName: 'soup',
		label: 'Супы',
		element: <Soup />,
	},
	{
		path: '/corndog',
		iconName: 'corndog',
		label: 'Корн доги',
		element: <CornDog />,
	},
	{
		path: '/drinks',
		iconName: 'drinks',
		label: 'Напитки',
		element: <Drink />,
	},
	{
		path: '/stocks',
		iconName: 'stocks',
		label: 'Акции',
		element: <Stocks />,
	},
]
