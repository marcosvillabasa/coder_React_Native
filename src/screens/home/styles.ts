import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	homeContainer: {
		marginTop: Platform.OS === 'android' ? 25 : 0,
	},
	itemsContainer: {
		marginHorizontal: 20,
		marginVertical: 10,
	},
	modalContent: {
		marginTop: 40,
		justifyContent: 'center',
		textAlign: 'center',
	},
	modalMessageContainer: {},
	modalMessage: {},
	selectedTask: {},
	buttonContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginVertical: 30,
	},
})