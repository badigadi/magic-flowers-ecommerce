import Image from 'next/image'
import { FC } from 'react'

import useActions from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/types/product.interface'

import styles from './FlowersItem.module.scss'

const FlowersItem: FC<{ product: IProduct }> = ({ product: product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { cart } = useCart()

	const currentElement = cart.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<div className={styles.flowers_item}>
			<Image src={product.image} height={275} width={319} alt={product.name} />
			<h6>{product.name}</h6>
			<span>{product.price} руб.</span>
			<button
				className={currentElement ? styles.remove_button : styles.add_button}
				onClick={() =>
					currentElement
						? removeFromCart({ id: currentElement.id })
						: addToCart({ product })
				}
			>
				{currentElement ? 'Удалить' : 'Приобрести'}
			</button>
		</div>
	)
}

export default FlowersItem
