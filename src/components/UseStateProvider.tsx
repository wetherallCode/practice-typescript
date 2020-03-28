import React, { createContext, ReactNode, useState, useContext } from 'react'

const UseStateContext = createContext<string | undefined>(undefined)
const UseSetStateContext = createContext<React.Dispatch<React.SetStateAction<string>> | undefined>(
	undefined
)

type UseStateProviderProps = { children: ReactNode }

export const UseStateProvider = ({ children }: UseStateProviderProps) => {
	const [currentPeriod, setCurrentPeriod] = useState('A_12')
	return (
		<UseStateContext.Provider value={currentPeriod}>
			<UseSetStateContext.Provider value={setCurrentPeriod}>{children}</UseSetStateContext.Provider>
		</UseStateContext.Provider>
	)
}

export function useCurrentPeriodState() {
	const context = useContext(UseStateContext)
	if (context === undefined) {
		throw new Error('useCurrentPeriodState must be used within a UseStateProvider')
	}
	return context
}

export function useSetCurrentPeriod() {
	const context = useContext(UseSetStateContext)
	if (context === undefined) {
		throw new Error('useSetCurrentPeriod must be used within a UseStateProvider')
	}
	return context
}
