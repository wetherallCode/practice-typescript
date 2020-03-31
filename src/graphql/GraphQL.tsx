import React from 'react'
import { Mountains } from './Mountains'
import { TrailSelector } from './TrailSelector'
import { TrailProvider } from './TrailProvider'
import { SelectedTrail } from './SelectedTrail'

export const GraphQL = () => {
	return (
		<div>
			<div>GraphQL Practice</div>
			<Mountains />
			<TrailProvider>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
					<TrailSelector />
					<SelectedTrail />
				</div>
			</TrailProvider>
		</div>
	)
}
