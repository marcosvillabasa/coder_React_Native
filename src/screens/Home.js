import React from 'react'
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import AddItem from '../components/AddItem'
import Item from '../components/Item'
import useListItems from '../hooks/useListItems'

const Home = () => {
	const { addItem, handleChange, value, items } = useListItems()

	const renderItem = ({ item }) => <Item name={item.name} />

	return (
		<View style={styles.homeContainer}>
			<AddItem
				onPress={addItem}
				onChange={handleChange}
				isDisabled={value === ''}
				value={value}
			/>
			<View style={styles.itemsContainer}>
				{/* {items.map((item) => (
					<View key={item.id}>
						<Text>{item.name}</Text>
					</View>
				))} */}
				<FlatList
					data={items}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	homeContainer: {
		marginTop: Platform.OS === 'android' ? 25 : 0
	},
	itemsContainer: {
		marginHorizontal: 20,
		marginVertical: 10,
	},
})

export default Home
