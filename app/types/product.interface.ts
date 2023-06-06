export interface IProduct {
	id: number
	name: string
	image: string
	price: number
}

export type sortType = 'newest' | 'oldest' | 'low-to-high' | 'high-to-low'
