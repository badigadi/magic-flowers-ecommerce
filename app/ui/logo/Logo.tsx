import Link from 'next/link'
import { FC } from 'react'

import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link className={styles.dark_logo} href='/'>
			Magic
			<span>Flowers</span>
		</Link>
	)
}

export default Logo
