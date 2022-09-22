import React, { useState } from 'react'
import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native'
import { useFonts } from 'expo-font'
import { Header } from './src/components'
import GameScreen from './src/screens/game'
import StartGameScreen from './src/screens/startGame'
import { colors } from './src/constants/colors'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	containerLoader: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
})

export default function App() {
	const [userNumber, setUserNumber] = useState(0)
	const [loaded] = useFonts({
		'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
		'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
		'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
		'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
		'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
	})

	if (!loaded) {
		return (
			<View style={styles.containerLoader}>
				<ActivityIndicator size='large' color={colors.primary} />
			</View>
		)
	}

	const title = !userNumber ? 'Adivina un numero' : 'Comienza el juego'

	const onStartGame = (selectedNumber) => {
		setUserNumber(selectedNumber)
	}

	let content = <StartGameScreen onStartGame={onStartGame} />
	if (userNumber) {
		content = <GameScreen selectedNumber={userNumber} />
	}

	return (
		<SafeAreaView>
			<Header title='Adivina el número' />
			{content}
		</SafeAreaView>
	)
}
