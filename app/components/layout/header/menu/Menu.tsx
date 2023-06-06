import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/next-js'
import {
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList
} from '@chakra-ui/react'
import { FC } from 'react'

import styles from './Menu.module.scss'
import MenuLink from './menu-link/MenuLink'
import { menuLinks } from './menu.data'

const MenuButtons: FC = () => {
	return (
		<nav className={styles.menu}>
			<Menu>
				<MenuButton
					as={IconButton}
					aria-label='Options'
					icon={<HamburgerIcon />}
					variant='outline'
				/>
				<MenuList>
					{menuLinks.map(item => (
						<MenuItem key={item.name}>
							<Link href={item.link} scroll={false}>
								{item.name}
							</Link>
						</MenuItem>
					))}
				</MenuList>
			</Menu>

			<ul>
				{menuLinks.map(item => (
					<MenuLink item={item} key={item.link} />
				))}
			</ul>
		</nav>
	)
}

export default MenuButtons
