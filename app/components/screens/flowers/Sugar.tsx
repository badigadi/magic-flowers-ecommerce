import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'

import Layout from '@/layout/Layout'

import { IProduct } from '@/types/product.interface'

import Loader from '../../../ui/loader/Loader'
import SortingButton from '../../../ui/sorting/SortingButton'
import { EnumSorting } from '../../../ui/sorting/sorting.interface'

import styles from './Flowers.module.scss'
import FlowersItem from './flowers-item/FlowersItem'
import { ProductService } from '@/services/ProductService'

const Sugar: FC<{ products: IProduct[] }> = ({ products }) => {
	const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST)

	const { data, isLoading } = useQuery(
		['products', sortType],
		() => ProductService.getProducts('sugar', sortType),
		{
			initialData: products
		}
	)

	return (
		<Layout title='Сахарные цветы'>
			<article className={styles.catalog}>
				<h3>Сахарные цветы</h3>

				<div className='text-right'>
					<SortingButton sortType={sortType} setSortType={setSortType} />
				</div>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.catalog_grid}>
						{data.map(item => (
							<FlowersItem product={item} key={item.id} />
						))}
					</div>
				)}
			</article>
		</Layout>
	)
}

export default Sugar
