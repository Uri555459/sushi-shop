export interface IPizza {
	id: number
	imageUrl: string
	title: string
	types: number[]
	sizes: number[]
	size: number
	price: number
	priceMiddle: number
	priceLarge: number
	categories: string
	rating: number
}

export interface ISet {
	id: number
	title: string
	count: number
	combo: string[]
	price: number
	categories: string
	imageUrl: string
}

export interface IWok {
	id: number
	title: string
	price: number
	imageUrl: string
	youtube: string
	ingredients: string[]
	categories: string
}

export interface IRoll {
	id: number
	title: string
	price: number
	imageUrl: string
	ingredients: string[]
	categories: string
}

export interface ISushi {
	id: number
	title: string
	price: number
	imageUrl: string
	ingredients: string[]
	categories: string
}

export interface IDrink {
	id: number
	imageUrl: string
	title: string
	price: number
	categories: string
}

export interface ISalad {
	id: number
	title: string
	price: number
	imageUrl: string
	ingredients: string[]
	categories: string
}

export interface ISoup {
	id: number
	title: string
	price: number
	imageUrl: string
	ingredients: string[]
	categories: string
}

export interface ICorndog {
	id: number
	title: string
	price: number
	imageUrl: string
	ingredients: string[]
	categories: string
}

export interface IReview {
	name: string
	text: string
	date: string
	id: number
}

export interface IAllProducts {
	pizza: IPizza[]
	sets: ISet[]
	wok: IWok[]
	rolls: IRoll[]
	sushi: ISushi[]
	drinks: IDrink[]
	salad: ISalad[]
	soup: ISoup[]
	corndog: ICorndog[]
}

// export interface IRootObject {
// 	pizza: IPizza[]
// 	sets: ISet[]
// 	wok: IWok[]
// 	rolls: IRoll[]
// 	sushi: ISushi[]
// 	drinks: IDrink[]
// 	salad: ISalad[]
// 	soup: ISoup[]
// 	corndog: ICorndog[]
// 	reviews: IReview[]
// 	all: IAll
// }
