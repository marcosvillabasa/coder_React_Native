import React, { useState } from 'react'
import {
	Button,
	Keyboard,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native'
import { Card } from '../../components'
import { Input } from '../../components/input'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		paddingVertical: 20,
		color: colors.text,
	},
	label: {
		fontSize: 14,
		color: colors.text,
		textAlign: 'center',
		paddingVertical: 10,
	},
	inputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 20,
		maxWidth: '80%',
		width: 320,
		height: 180,
		marginBottom: 20,
	},
	input: {
		borderBottomColor: colors.primary,
		borderBottomWidth: 2,
		minWidth: 80,
		fontSize: 20,
		paddingVertical: 10,
		marginTop: 10,
		marginBottom: 20,
		textAlign: 'center',
	},
	buttonContainer: {
		width: '80%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
})

const StartGameScreen = () => {
	const [number, setNumber] = useState('')
	const onHandleText = (value: string) => {
		setNumber(value.replace(/[^0-9]/g, ''))
	}
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Text style={styles.title}>Comenzar juego...</Text>
				<Card style={styles.inputContainer}>
					<Text style={styles.label}>Elija el numero</Text>
					<Input
						style={styles.input}
						keyboardType={'numeric'}
						maxLength={2}
						blurOnSubmit
						autoCapitalize
						autoCorrect={false}
						onChangeText={(text: string) => onHandleText(text)}
						value={number}
					/>
					<View style={styles.buttonContainer}>
						<Button
							title='Limpiar'
							onPress={() => console.log('limpia')}
							color={colors.primary}
						/>
						<Button
							title='Confirmar'
							onPress={() => console.log('limpia')}
							color={colors.secondary}
						/>
					</View>
				</Card>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default StartGameScreen
