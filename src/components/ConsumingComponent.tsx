import React from 'react'
import { useSetCurrentPeriod } from './UseStateProvider'

export const ConsumingComponent = () => {
	const setPeriod = useSetCurrentPeriod()
	const periodList = ['A_12', 'A_34', 'A_67', 'B_12', 'B_34', 'B_67']

	return (
		<div>
			<div>
				<select onChange={e => setPeriod(e.target.value)}>
					{periodList.sort().map(period => (
						<option key={period} value={period}>
							{period}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}
