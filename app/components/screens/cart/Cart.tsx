import { FC } from 'react'

import Layout from '@/layout/Layout'

import { useCart } from '@/hooks/useCart'

import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
	const { cart, total } = useCart()

	return (
		<Layout title='Cart'>
			<section className={styles.cart}>
				{!cart.length ? (
					<h4>Ваша корзина пуста :&#40;</h4>
				) : (
					<article>
						{cart.map(item => (
							<CartItem item={item} key={item.id} />
						))}
					</article>
				)}
				<div className={styles.cart_payment}>
					<span>Итого: {total}руб.</span>
					<button>Оплатить</button>
				</div>
			</section>
		</Layout>
	)
}

export default Cart
