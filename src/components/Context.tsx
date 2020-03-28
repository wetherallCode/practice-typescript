import React from 'react'
import { CountProvider } from './CountProvider'
import { Counter } from './Counter'
import { UseStateProvider } from './UseStateProvider'
import { ConsumingComponent } from './ConsumingComponent'
import { AnotherConsumingComponent } from './AnotherConsumingComponent'

export const Context = () => {
	return (
		// <CountProvider>
		// 	{/* <CountDisplay /> */}
		// 	<Counter />
		// </CountProvider>
		<UseStateProvider>
			<ConsumingComponent />
			<AnotherConsumingComponent />
		</UseStateProvider>
	)
}
