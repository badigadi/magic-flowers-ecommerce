import first from '/public/images/possibilities/first.png'
import fourth from '/public/images/possibilities/fourth.png'
import second from '/public/images/possibilities/second.png'
import third from '/public/images/possibilities/third.png'
import Image from 'next/image'
import { FC } from 'react'

import styles from './Possibilities.module.scss'

const Possibilities: FC = () => {
	return (
		<article className={styles.possibilities}>
			<h6>Что даёт обучение:</h6>

			<div className={styles.container}>
				<div className={`${styles.capability_first} ${styles.capability}`}>
					<Image src={first} width={84} height={144} alt='Роза' />
					<h5>Профессиональный рост</h5>
					<p>Развиваться в своём деле всегда круто!</p>
				</div>
				<div className={`${styles.capability_second} ${styles.capability}`}>
					<Image src={second} width={70} height={162} alt='Георгин' />
					<h5>Конкурентное преимущество</h5>
					<p>
						Время тортиков с ягодками и безешками прошло, пора выгодно
						отличаться от коллег по цеху{' '}
					</p>
				</div>
			</div>
			<div className={styles.container}>
				<div className={`${styles.capability_third} ${styles.capability}`}>
					<Image src={third} width={133} height={122} alt='Орхидея' />
					<h5>Поиск нового приложения своих талантов</h5>
					<p>
						Возможно с опытом цветочный декор тортов станет вашим основным видом
						деятельности, а многие мои ученики уже сами преподают!
					</p>
				</div>
				<div className={`${styles.capability_fourth} ${styles.capability}`}>
					<Image src={fourth} width={127} height={125} alt='Пион' />
					<h5>
						Поиск новых идей
						<br /> для декора тортов
					</h5>
					<p>Цветы дают море новых возможностей!</p>
				</div>
			</div>
		</article>
	)
}

export default Possibilities
