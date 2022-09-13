import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	itemContainer: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		marginVertical: 10,
		backgroundColor: '#0193f4',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	itemText: {
		color: '#ffffff',
		fontSize: 18,
		fontWeight: '600',
	},
	button: {
		color: '#fff',
		fontWeight: 'bold',
	},
	btnDelete: {
		color: 'white',
	},
})