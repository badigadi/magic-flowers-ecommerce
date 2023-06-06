import { FC } from 'react'

import styles from './Catalog.module.scss'
import CatalogItem from './catalog-item/CatalogItem'
import { catalog } from './catalog.data'

const Catalog: FC = () => {
	return (
		<section className={styles.catalog} id='catalog'>
			<h6>Каталог</h6>

			<div>
				{catalog.map(item => (
					<div
						style={{
							backgroundImage: `url(${item.image})`
						}}
						key={item.link}
					>
						<CatalogItem item={item} />
					</div>
				))}
			</div>
		</section>
	)
}

export default Catalog
