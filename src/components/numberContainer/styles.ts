import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: colors.primary,
		padding: 10,
		borderRadius: 5,
		marginVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	number: {
		fontSize: 20,
		fontFamily: 'Lato-Bold',
	},
})
