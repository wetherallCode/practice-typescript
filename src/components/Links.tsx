import React from 'react'
import { Link } from 'react-router-dom'

export const Links = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
			<Link to='/'>Home</Link>
			<Link to='/toggleButton'>ToggleButton</Link>
			<Link to='/trueFalseToggle'>TrueFalseToggle</Link>
			<Link to='/context'>Context</Link>
			<Link to='/graphql'>GraphQL</Link>
		</div>
	)
}
