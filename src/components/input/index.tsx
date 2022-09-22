import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
	input: {
		borderBottomColor: colors.primary,
		borderBottomWidth: 1,
		marginVertical: 20,
	},
})

export const Input = ({ style, ...props }: any) => {
	return <TextInput {...props} style={{ ...styles.input, ...style }} />
}
