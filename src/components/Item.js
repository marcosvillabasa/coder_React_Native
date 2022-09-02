import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Item = ({ name }) => (
	<View style={styles.itemContainer}>
		<Text style={styles.itemText} >{name}</Text>
	</View>
)

const styles = StyleSheet.create({
	itemContainer: {
		padding: 10,
		marginVertical: 10,
        backgroundColor: '#0193f4'
	},
    itemText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center'
        
    }
})
export default Item
