import { ICartItem } from '@/types/cartItem.interface'

export interface ICartInitialState {
	items: ICartItem[]
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}
