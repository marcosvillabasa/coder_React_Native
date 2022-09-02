import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AddItem from '../components/AddItem'
import useListItems from '../hooks/useListItems'

const Home = () => {
	const { addItem, handleChange, value, items } = useListItems()

	return (
		<View>
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
		marginHorizontal: 10,
        marginVertical: 10
	},
})

export default Home
