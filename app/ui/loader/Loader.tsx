import { Spinner } from '@chakra-ui/react'
import { FC } from 'react'

const Loader: FC = () => {
	return (
		<Spinner
			thickness='4px'
			speed='0.9s'
			emptyColor='gray.200'
			color='pink.200'
			size='xl'
			display='block'
			position='relative'
			className='mx-auto top-20'
		/>
	)
}

export default Loader
