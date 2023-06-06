import { extendTheme } from '@chakra-ui/react'

import { modalTheme } from './modal'

export const theme = extendTheme({
	components: { Modal: modalTheme }
})
