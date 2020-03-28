import React, { useState } from 'react'

const useTrueFalseToggle = (initialValue: boolean) =>
	// : [boolean, () => void, () => void]
	{
		const [value, setValue] = useState(initialValue)

		const setTrue = () => setValue(true)
		const setFalse = () => setValue(false)
		//freeze the return and make it readonly
		return [value, setTrue, setFalse] as const
	}

export const TrueFalse = () => {
	const [isVisible, toggleTrue, toggleFalse] = useTrueFalseToggle(true)
	console.log(isVisible)
	return (
		<div>
			<div>
				<button onClick={toggleTrue}>True</button>
				<button onClick={toggleFalse}>False</button>
			</div>
			{isVisible ? <div>I am True!</div> : <div>I am False!</div>}
		</div>
	)
}
