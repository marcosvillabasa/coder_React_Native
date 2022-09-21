import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../constants/colors'

interface Props {
	title: string
}

const styles = StyleSheet.create({
	headerContainer: {
		width: '100%',
		height: 100,
		backgroundColor: colors.secondary,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerText: {
		fontSize: 20,
		fontWeight: '700',
		color: colors.white,
	},
})

export const Header = ({ title }: Props) => {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.headerText}>{title}</Text>
		</View>
	)
}
