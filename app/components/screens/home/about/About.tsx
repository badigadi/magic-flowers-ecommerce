import ceo from '/public/images/ceo.png'
import lowerLine from '/public/images/lower-line.svg'
import upperLine from '/public/images/upper-line.svg'
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure
} from '@chakra-ui/react'
import Image from 'next/image'
import { FC } from 'react'

import styles from './About.module.scss'
import { aboutModalParagraphs, aboutParagraphs } from './about.data'

const About: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<article className={styles.about} id='about'>
			<h6>Обо мне</h6>
			<div>
				<Image src={upperLine} alt='Cute line' width={520} height={271} />
				<Image src={lowerLine} alt='Cute line' width={283} height={130} />

				<div className={styles.ceo}>
					<Image
						src={ceo}
						alt='Анжела Тумасян-Полянская'
						width={490}
						height={356}
					/>

					<h4>Анжела Тумасян-Полянская</h4>
					<h5>
						Основательница школы
						<br /> “MagicFlowers Studio”
					</h5>
				</div>

				<div className={styles.text}>
					{aboutParagraphs.map(item => (
						<p key={item.id}>{item.text}</p>
					))}
					<button onClick={onOpen}>Подробнее...</button>
				</div>
			</div>

			<Modal isOpen={isOpen} onClose={onClose} size='xl' variant='pink'>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Продолжение</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={7}>
						{aboutModalParagraphs.map(item => (
							<p key={item.id} className={styles.modal_text}>
								{item.text}
							</p>
						))}

						<br />
						<span>Ваша Анжела Тумасян-Полянская</span>
					</ModalBody>
				</ModalContent>
			</Modal>
		</article>
	)
}

export default About
