import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	homeContainer: {
		marginTop: Platform.OS === 'android' ? 25 : 0,
	},
	itemsContainer: {
		marginHorizontal: 20,
		marginVertical: 10,
	},
	modalBg: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	modalContainer: {
		height: 300,
		width: '80%',
		backgroundColor: '#EFEEEE',
		borderRadius: 5,
		borderColor: '#0193f4',
		borderWidth: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalTitle: {
		marginVertical: 20,
		justifyContent: 'center',
		textAlign: 'center',
		fontSize: 16,
		fontWeight: 'bold',
	},
	selectedItem: {
		fontSize: 18,
		fontWeight: '700',
        marginVertical: 20,
        color: '#0193f4'
	},
	buttonContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '80%',
		marginVertical: 30,
		marginHorizontal: 20,
	},
})
