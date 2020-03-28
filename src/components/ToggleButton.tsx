import React, { useState } from 'react'

export const useToggle = (initialValue: boolean) => {
	const [value, setValue] = useState(initialValue)

	const toggleValue = () => setValue(!value)
	return [value, toggleValue] as const
}

export const ToggleButton = () => {
	const [isVisible, toggleVisible] = useToggle(false)

	return (
		<div>
			<button onClick={toggleVisible}>Hello</button>
			{isVisible && <div>World</div>}
		</div>
	)
}
