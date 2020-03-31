import React, { useEffect } from 'react'
import { useSelectedTrail } from './TrailProvider'
import { gql, useLazyQuery } from '@apollo/client'
import { trailInfo, trailInfoVariables } from '../schemaTypes'

const TRAIL_INFO = gql`
	query trailInfo($id: ID!) {
		Trail(id: $id) {
			name
			status
			difficulty
			accessedByLifts {
				name
			}
		}
	}
`

export const SelectedTrail: any = () => {
	const selectedTrail = useSelectedTrail()
	console.log('selectedTrail', selectedTrail)
	useEffect(() => {
		if (selectedTrail) {
			loadTrail()
		}
	}, [selectedTrail])

	const [loadTrail, { data, error, loading }] = useLazyQuery<trailInfo, trailInfoVariables>(
		TRAIL_INFO,
		{
			variables: { id: selectedTrail }
		}
	)

	if (error) console.error(error)

	const trail = data?.Trail
	console.log(trail)

	return (
		<>
			{loading ? (
				<div>Loading Trail Info</div>
			) : (
				<div>
					<div>{trail?.name}</div>
				</div>
			)}
		</>
	)
}
