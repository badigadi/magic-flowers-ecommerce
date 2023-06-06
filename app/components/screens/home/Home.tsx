import { FC } from 'react'

import Layout from '@/layout/Layout'

import About from './about/About'
import Catalog from './catalog/Catalog'
import Hero from './hero/Hero'
import Portfolio from './portfolio/Portfolio'
import Possibilities from './possibilities/Possibilities'

const Home: FC = () => {
	return (
		<Layout title='Home'>
			<Hero />
			<About />
			<Possibilities />
			<Catalog />
			<Portfolio />
		</Layout>
	)
}

export default Home
