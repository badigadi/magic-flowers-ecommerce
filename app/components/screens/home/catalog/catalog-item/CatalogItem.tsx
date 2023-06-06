import Link from 'next/link'
import { FC } from 'react'

import { ICatalogLink } from './catalog-item.interface'

interface ICatalogItem {
	item: ICatalogLink
}

const CatalogItem: FC<ICatalogItem> = ({ item }) => {
	return (
		<Link href={item.link}>
			<h3>{item.name}</h3>
			<span>Подробнее</span>
		</Link>
	)
}

export default CatalogItem
