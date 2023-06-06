import Link from 'next/link'
import { FC } from 'react'

import styles from './Hero.module.scss'

const Hero: FC = () => {
	return (
		<article className={styles.hero}>
			<div></div>
			<h1>
				Онлайн школа цветочного
				<br /> декора тортов
			</h1>
			<p>
				Для тех, кто хочет сделать свои кондитерские шедевры
				<br /> по настоящему волшебными!
			</p>
			<Link href='#catalog' scroll={false}>
				Смотреть каталог
			</Link>
		</article>
	)
}

export default Hero
