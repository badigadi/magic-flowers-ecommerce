import { useMemo } from 'react'
import { bindActionCreators } from 'redux'

import { cartSlice } from '../store/slice'

import { useAppDispatch } from './useDispatch'

const rootAction = {
	...cartSlice.actions
}

const useActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}

export default useActions
