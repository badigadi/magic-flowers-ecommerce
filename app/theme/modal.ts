import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { defineMultiStyleConfig, definePartsStyle } =
	createMultiStyleConfigHelpers(parts.keys)

const pink = definePartsStyle({
	dialog: {
		borderRadius: '3xl',
		bg: `pink.100`
	}
})

export const modalTheme = defineMultiStyleConfig({
	variants: { pink }
})
