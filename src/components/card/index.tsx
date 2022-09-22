import React from 'react'
import { View, StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

interface Props {
	children: React.ReactNode
	style?: object
}

const styles = StyleSheet.create({
	container: {
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4,
		backgroundColor: colors.white,
		borderRadius: 5,
	},
})

export const Card = ({ children, style }: Props) => {
	return <View style={{ ...styles.container, ...style }}>{children}</View>
}
