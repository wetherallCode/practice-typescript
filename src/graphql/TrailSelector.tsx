import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { allTrails } from '../schemaTypes'
import { useTrailSelector } from './TrailProvider'

const ALL_TRAILS = gql`
	query allTrails {
		allTrails {
			id
			name
		}
	}
`

export const TrailSelector = () => {
	const setTrail = useTrailSelector()

	const { loading, error, data } = useQuery<allTrails>(ALL_TRAILS)
	if (loading) return <div>Loading Trails</div>
	if (error) console.error(error)

	const handleChange = (e: any) => setTrail(e.target.value)
	return (
		<div>
			Trails{' '}
			<select onChange={handleChange}>
				<option>Pick a Trail</option>
				{data?.allTrails.map(trail => (
					<option key={trail.id} value={trail.id}>
						{trail.name}
					</option>
				))}
			</select>
		</div>
	)
}
