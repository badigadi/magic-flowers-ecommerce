import { GetStaticProps, NextPage } from 'next'

import { IProduct } from '@/types/product.interface'

import Chocolate from '@/screens/flowers/Chocolate'
import { ProductService } from '@/services/ProductService'

interface IProductsPage {
	products: IProduct[]
}

const ChocolatePage: NextPage<IProductsPage> = ({ products }) => {
	return <Chocolate products={products} />
}

export const getStaticProps: GetStaticProps = async () => {
	const products = await ProductService.getProducts()

	return {
		props: {
			products
		}
	}
}

export default ChocolatePage
