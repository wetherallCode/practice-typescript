import React, { createContext, useReducer, ReactNode, useContext } from 'react'

const CountStateContext = createContext<State | undefined>(undefined)
const CountDispatchContext = createContext<Dispatch | undefined>(undefined)

type Action = { type: 'increment' } | { type: 'decrement' } | { type: undefined }
type Dispatch = (action: Action) => void
type State = { count: number }
type CountProviderProps = { children: ReactNode }

function countReducer(state: State, action: Action) {
	switch (action.type) {
		case 'increment': {
			return {
				count: state.count + 1
			}
		}
		case 'decrement': {
			return {
				count: state.count - 1
			}
		}

		default:
			throw new Error(`Unhandled action type: ${action.type}`)
	}
}

export const CountProvider = ({ children }: CountProviderProps) => {
	const [state, dispatch] = useReducer(countReducer, { count: 0 })
	return (
		<CountStateContext.Provider value={state}>
			<CountDispatchContext.Provider value={dispatch}>{children}</CountDispatchContext.Provider>
		</CountStateContext.Provider>
	)
}

export function useCountState() {
	const context = useContext(CountStateContext)
	if (context === undefined) {
		throw new Error('useCountState must be used within a CountProvider')
	}
	return context
}

export function useCountDispatch() {
	const context = useContext(CountDispatchContext)
	if (context === undefined) {
		throw new Error('useCountDispatch must be used within a CountProvider')
	}
	return context
}
