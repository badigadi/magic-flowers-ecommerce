import localFont from '@next/font/local'

export const just_another_hand = localFont({
	src: '../../assets/fonts/just_another_hand/JustAnotherHand-Regular.woff2',
	display: 'swap',
	variable: '--font-just-another-hand'
})

export const muller = localFont({
	src: [
		{
			path: '../../assets/fonts/muller/MullerLight.woff2',
			weight: '300'
		},
		{
			path: '../../assets/fonts/muller/MullerBold.woff2',
			weight: '700'
		}
	],
	variable: '--font-muller',
	display: 'swap'
})
