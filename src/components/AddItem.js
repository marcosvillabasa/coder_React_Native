import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

const AddItem = ({ onChange, onPress, isDisabled, value }) => {
	return (
		<View style={styles.itemContainer}>
			<TextInput
				value={value}
				placeholder='Add Item'
				style={styles.input}
				selectionColor='#016fb9'
				onChangeText={(e) => onChange(e)}
			/>
			<Button
				title='Add'
				onPress={onPress}
				color='#016fb9'
				disabled={isDisabled}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		borderBottomColor: '#016fb9',
		borderBottomWidth: 1,
		height: 45,
		width: '75%',
	},
	itemContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginVertical: 10,
        marginHorizontal: 18,
	},
})

export default AddItem
