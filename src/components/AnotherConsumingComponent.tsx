import React from 'react'
import { useCurrentPeriodState } from './UseStateProvider'

export const AnotherConsumingComponent = () => {
	const currentPeriod = useCurrentPeriodState()
	return <div>This is the current period: {currentPeriod}</div>
}
