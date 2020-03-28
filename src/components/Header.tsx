import React from 'react'

type Props = {
	headerText: string
	headerSubText: string
	isActive: boolean
}

export const Header = ({ headerText, headerSubText, isActive = true }: Props) => {
	return (
		<div>
			<div>{headerText}</div>
			{isActive && <div>{headerSubText}</div>}
		</div>
	)
}
