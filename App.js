import React from 'react'
import { SafeAreaView } from 'react-native'
import { Header } from './src/components'
import StartGameScreen from './src/screens/startGame'

export default function App() {
	return (
		<SafeAreaView>
			<Header title='Adivina el número' />
			<StartGameScreen />
		</SafeAreaView>
	)
}
