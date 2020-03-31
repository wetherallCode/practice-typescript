import React, {
	createContext,
	ReactNode,
	useState,
	Dispatch,
	SetStateAction,
	useContext
} from 'react'

const SelectedTrailContext = createContext<string | undefined>(undefined)
const TrailSelectorContext = createContext<Dispatch<SetStateAction<string>> | undefined>(undefined)

type TrailProviderProps = { children: ReactNode }

export const TrailProvider = ({ children }: TrailProviderProps) => {
	const [trailID, setTrailID] = useState('')
	return (
		<SelectedTrailContext.Provider value={trailID}>
			<TrailSelectorContext.Provider value={setTrailID}>{children}</TrailSelectorContext.Provider>
		</SelectedTrailContext.Provider>
	)
}

export const useSelectedTrail = () => {
	const context = useContext(SelectedTrailContext)
	if (context === undefined) {
		throw new Error('useSelectedTrail must be within a TrailProvider')
	}
	return context
}

export const useTrailSelector = () => {
	const context = useContext(TrailSelectorContext)
	if (context === undefined) {
		throw new Error('useTrailSelector must be within a TrailProvider')
	}
	return context
}
