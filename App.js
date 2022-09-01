import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AddItem from './src/components/AddItem'
import useListItems from './src/hooks/useListItems'

export default function App() {
	const { addItem, handleChange, value, items } = useListItems()

	return (
		<View style={styles.container}>
			<AddItem
				onPress={addItem}
				onChange={handleChange}
				isDisabled={value === ''}
				value={value}
			/>
			<View style={styles.itemsContainer}>
				{items.map((item) => (
					<View key={item.id}>
						<Text>{item.name}</Text>
					</View>
				))}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		color: 'white',
		margin: 50,
		marginHorizontal: 10,
	},
  itemsContainer: {
    marginHorizontal: 10
  }
})
