import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		paddingVertical: 20,
		color: colors.text,
		fontFamily: 'Lato-Bold',
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
	summaryContainer: {
		width: '80%',
		height: 180,
		marginHorizontal: 20,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 10,
		marginTop: 20,
	},

	summaryText: {},
	numberSelect: {},
})
