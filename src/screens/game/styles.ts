import { Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	card: {
		marginTop: 20,
		marginHorizontal: 20,
		width: width * 0.8,
		height: 200,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonContainer: {
		width: '75%',
		marginHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
	},
	title: {},
})
