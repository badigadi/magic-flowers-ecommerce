import Link from 'next/link'
import { FC } from 'react'

import { IMenuLink } from './menu-link.interface'

interface IMenuItem {
	item: IMenuLink
}

const MenuLink: FC<IMenuItem> = ({ item }) => {
	return (
		<li>
			<Link href={item.link} scroll={false}>
				{item.name}
			</Link>
		</li>
	)
}

export default MenuLink
