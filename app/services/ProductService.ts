import { IProduct } from '@/types/product.interface'

import { axiosClassic } from '@/api/api'

import { EnumSorting } from '../ui/sorting/sorting.interface'

const PRODUCTS = 'products'

type IProductType = 'sugar' | 'waffle' | 'chocolate'

export const ProductService = {
	async getProducts(productType: IProductType, sortType?: EnumSorting) {
		const { data } = await axiosClassic.get<IProduct[]>(
			`${PRODUCTS}/${productType}`,
			{
				params: {
					sortType: sortType
				}
			}
		)

		return data
	},
	async getProductById(id: number) {
		return axiosClassic.get<IProduct>(`${PRODUCTS}/${id}`)
	},
	async getProductRelatives(missingId: number) {
		return axiosClassic.get<IProduct[]>(`${PRODUCTS}/relative/${missingId}}`)
	}
}
