import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { TrailStatus, trailCount, trailCountVariables } from '../schemaTypes'

// type TrailCount = {
// 	trailCount: number
// }
// type TrailCountVariables = {
// 	status: TrailStatus
// }
// enum TrailStatus {
// 	CLOSED = 'CLOSED',
// 	OPEN = 'OPEN'
// }

export const TRAIL_COUNT = gql`
	query trailCount($status: TrailStatus) {
		trailCount(status: $status)
	}
`

export const Mountains: any = () => {
	const [trailStatusSelector, setTrailStatusSelector] = useState<TrailStatus>(TrailStatus.OPEN)
	const { data, loading, error } = useQuery<trailCount, trailCountVariables>(TRAIL_COUNT, {
		variables: { status: trailStatusSelector }
	})
	if (loading) return <div>Grabing Trail Info</div>
	if (error) return console.error(error)

	// function isTrailStatus(value: unknown): value is TrailStatus {
	// 	return Object.keys(TrailStatus).includes(value)
	// }

	// const handleStateChange = ({ target: { value } }) => {
	// 	if (isTrailStatus(value)) setTrailStatusSelector(value)
	// }
	const handleStatusChange = ({ target: { value } }: { target: { value: unknown } }) => {
		if (isTrailStatus(value)) {
			console.log('value', value)
			setTrailStatusSelector(value)
		}
	}
	function isTrailStatus(value: unknown): value is TrailStatus {
		return Object.keys(TrailStatus).includes(value as TrailStatus)
	}

	// function handleStateChange(e: any) {
	// 	setTrailStatusSelector(e.target.value)
	// }

	return (
		<div>
			<select onChange={handleStatusChange}>
				<option value={TrailStatus.OPEN}>Open</option>
				<option value={TrailStatus.CLOSED}>Closed</option>
			</select>
			{data?.trailCount}
		</div>
	)
}
