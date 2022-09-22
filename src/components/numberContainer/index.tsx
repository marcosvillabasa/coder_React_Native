import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

export const NumberContainer = ({ children }: any) => {
	return (
		<View style={styles.container}>
			<Text style={styles.number}>{children}</Text>
		</View>
	)
}
