import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AddItem from './src/components/AddItem'
import useListItems from './src/hooks/useListItems'
import Home from './src/screens/Home'

export default function App() {
	const { addItem, handleChange, value, items } = useListItems()

	return (
			<View style={styles.container}>
				<Home />
			</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		color: 'white',
		marginHorizontal: 10,
    marginTop: 50
	},
})
