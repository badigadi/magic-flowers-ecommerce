import { EnumSorting, ISortingItem } from './sorting.interface'

export const sortingData: ISortingItem[] = [
	{
		label: 'Сначала дорогие',
		value: EnumSorting.HIGH_TO_LOW_PRICE
	},
	{
		label: 'Сначала недорогие',
		value: EnumSorting.LOW_TO_HIGH_PRICE
	},
	{
		label: 'Новые',
		value: EnumSorting.NEWEST
	},
	{
		label: 'Старые',
		value: EnumSorting.OLDEST
	}
]
