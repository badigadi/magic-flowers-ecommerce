import { ICartItem } from '@/types/cartItem.interface'

import { products } from './product.data'

export const cart: ICartItem[] = [
	{
		id: 1,
		product: products[0]
	},
	{
		id: 2,
		product: products[1]
	},
	{
		id: 3,
		product: products[2]
	},
	{
		id: 4,
		product: products[3]
	},
	{
		id: 5,
		product: products[4]
	}
]
