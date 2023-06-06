import eight from '/public/images/portfolio/eight.jpg'
import five from '/public/images/portfolio/five.jpg'
import four from '/public/images/portfolio/four.jpg'
import one from '/public/images/portfolio/one.jpg'
import seven from '/public/images/portfolio/seven.jpg'
import six from '/public/images/portfolio/six.jpg'
import three from '/public/images/portfolio/three.jpg'
import two from '/public/images/portfolio/two.jpg'
import Image from 'next/image'
import { FC } from 'react'

import styles from './Portfolio.module.scss'

const Portfolio: FC = () => {
	return (
		<section className={styles.portfolio}>
			<h6>Работы моих студентов</h6>

			<div>
				<div>
					<Image src={five} height={330} alt='Корзинка цветов' />
				</div>
				<div>
					<Image src={two} height={330} alt='Цветы в стакане' />
				</div>
				<div>
					<Image src={three} height={330} alt='Торт с цветами' />
				</div>
				<div>
					<Image src={four} height={330} alt='Букет цветов' />
				</div>
			</div>
			<div style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
				<div>
					<Image src={eight} height={330} alt='Роза' />
				</div>
				<div>
					<Image src={six} height={330} alt='Пион' />
				</div>
				<div>
					<Image src={seven} height={330} alt='Ромашка' />
				</div>
				<div>
					<Image src={one} height={330} alt='Ромашка' />
				</div>
			</div>
		</section>
	)
}

export default Portfolio
