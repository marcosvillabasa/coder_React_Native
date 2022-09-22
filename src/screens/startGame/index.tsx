import React, { useState } from 'react'
import {
	Button,
	Keyboard,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native'
import { Card, NumberContainer, Input } from '../../components'
import { colors } from '../../constants/colors'
import { styles } from './styles'

const StartGameScreen = ({ onStartGame }: any) => {
	const [number, setNumber] = useState('')
	const [selected, setSelected] = useState(0)
	const [confirmed, setConfirmed] = useState(false)

	const onHandleText = (value: string) => {
		setNumber(value.replace(/[^0-9]/g, ''))
	}

	const onReset = () => {
		setNumber('')
		setSelected(0)
		setConfirmed(false)
		Keyboard.dismiss()
	}

	const onConfirm = () => {
		Keyboard.dismiss()

		const choseNumber = parseInt(number, 10)
		if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) return

		setConfirmed(true)
		setSelected(choseNumber)
		setNumber('')
	}

	const onHandleStartGame = () => {
		onStartGame(selected)
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
							onPress={() => onReset()}
							color={colors.primary}
						/>
						<Button
							title='Confirmar'
							onPress={onConfirm}
							color={colors.secondary}
						/>
					</View>
				</Card>
				{confirmed && (
					<Card style={styles.summaryContainer}>
						<Text style={styles.summaryText}>Tu seleccion</Text>
						<NumberContainer style={styles.numberSelect}>
							{selected}
						</NumberContainer>
						<Button
							title='Iniciar Juego'
							onPress={onHandleStartGame}
							color={colors.primary}
						/>
					</Card>
				)}
			</View>
		</TouchableWithoutFeedback>
	)
}

export default StartGameScreen
