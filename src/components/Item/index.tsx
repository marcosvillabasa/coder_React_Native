import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'

interface Props {
	name: string
	handleModal: () => void
}

const Item = ({ name, handleModal }: Props) => (
	<View style={styles.itemContainer}>
		<Text style={styles.itemText}>{name}</Text>
		<TouchableOpacity onPress={handleModal}>
			<Text style={styles.btnDelete}>X</Text>
		</TouchableOpacity>
	</View>
)


export default Item
