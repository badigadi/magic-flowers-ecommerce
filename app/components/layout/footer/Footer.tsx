import { FC } from 'react'

import Logo from '../../../ui/logo/Logo'

import styles from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<footer className={styles.footer} id='contact'>
			<Logo />

			<ul>
				<li>
					<a href=''>VK</a>
				</li>
				<li>
					<a href='tel:+7-999-638-32-67'>+7(999)638-32-67</a>
				</li>
			</ul>
		</footer>
	)
}

export default Footer
