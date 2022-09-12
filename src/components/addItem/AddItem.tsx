import React from 'react'
import { Button, TextInput, View } from 'react-native'
import { styles } from './styles'

interface Props {
	placeholder?: string
	value: string
	selectionColor?: string
	onChange: () => void
	titleButton: string
	onPress: () => void
	color?: string
	isDisabled: boolean
}

const AddItem = ({
	placeholder,
	value,
	selectionColor = '#016fb9',
	onChange,
	titleButton,
	onPress,
	color = '#016fb9',
	isDisabled,
}: Props) => {
	return (
		<View style={styles.itemContainer}>
			<TextInput
				value={value}
				placeholder={placeholder}
				style={styles.input}
				selectionColor={selectionColor}
				onChangeText={onChange}
			/>
			<Button title={titleButton} onPress={onPress} color={color} disabled={isDisabled} />
		</View>
	)
}

export default AddItem
