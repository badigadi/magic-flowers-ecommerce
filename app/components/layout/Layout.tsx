import { FC, PropsWithChildren } from 'react'

import { just_another_hand, muller } from '@/assets/fonts/fonts'

import styles from './Layout.module.scss'
import Footer from './footer/Footer'
import Header from './header/Header'
import Meta from './meta/Meta'
import { ISeo } from './meta/meta.interface'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<main
				className={`${just_another_hand.variable} ${muller.variable} ${styles.layout}`}
			>
				<Header />
				<div className={styles.content}>
					<section>{children}</section>
					<Footer />
				</div>
			</main>
		</>
	)
}

export default Layout
