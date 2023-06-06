import Image from 'next/image'
import { FC } from 'react'

import useActions from '@/hooks/useActions'

import { ICartItem } from '@/types/cartItem.interface'

import styles from './CartItem.module.scss'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	const { removeFromCart } = useActions()

	return (
		<div className={styles.cart_item}>
			<Image
				src={item.product.image}
				height={275}
				width={319}
				alt={item.product.name}
			/>
			<h6>{item.product.name}</h6>
			<span>{item.product.price} руб.</span>
			<button onClick={() => removeFromCart({ id: item.id })}>Удалить</button>
		</div>
	)
}

export default CartItem
