import cartIcon from '/public/images/cart_icon.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import styles from './CartButton.module.scss'

const CartButton: FC = () => {
	const cart = useTypedSelector(state => state.cart.items)

	return (
		<Link className={styles.cart} href='/cart'>
			<Image src={cartIcon} height={40} width={40} alt='Корзина' />
			<div>{cart.length}</div>
		</Link>
	)
}

export default CartButton
