import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IAddToCartPayload, ICartInitialState } from './types'

const initialState: ICartInitialState = {
	items: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
			state.items.push({ ...action.payload, id: state.items.length })
		},
		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter(item => item.id !== action.payload.id)
		}
	}
})
