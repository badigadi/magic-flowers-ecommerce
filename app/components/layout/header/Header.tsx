import { FC } from 'react'

import Logo from '../../../ui/logo/Logo'

import styles from './Header.module.scss'
import CartButton from './cart/CartButton'
import MenuButtons from './menu/Menu'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<div>
				<MenuButtons />
				<CartButton />
			</div>
		</header>
	)
}

export default Header
