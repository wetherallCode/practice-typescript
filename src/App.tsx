import React, { FC } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { ToggleButton } from './components/ToggleButton'
import { TrueFalse } from './components/TrueFalse'
import { Links } from './components/Links'
import { Context } from './components/Context'

const App: FC = () => {
	return (
		<>
			<Links />
			<Routes>
				<Route
					path='/'
					element={<Header isActive={true} headerSubText={'World'} headerText={'Hello'} />}
				/>
				<Route path='/toggleButton' element={<ToggleButton />} />
				<Route path='/trueFalseToggle' element={<TrueFalse />} />
				<Route path='/context' element={<Context />} />
			</Routes>
		</>
	)
}

export default App
