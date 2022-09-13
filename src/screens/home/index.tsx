import React, { useState } from 'react'
import { Button, FlatList, ListRenderItem, Text, View } from 'react-native'

import AddItem from '../../components/addItem/AddItem'
import Item from '../../components/Item'
import CustomModal from '../../components/modal/CustomModal'

import { useItemsActions, useInput } from '../../hooks'
import { IItem } from '../../interfaces'
import { styles } from './styles'

const Home = () => {
	const { addItem, deleteItem, findItem, items, setItems } = useItemsActions()
	const { handleChange, value } = useInput()
	const [visible, setVisible] = useState(false)
	const [itemSelected, setItemSelected] = useState<IItem>()

	const handleModal = (id?: number) => {
		setVisible(!visible)
		setItemSelected(findItem(id))
	}

	const onHandleDeleteItem = (id: number | undefined): void => {
		setItems(deleteItem(id))
		setItemSelected(undefined)
		setVisible(false)
	}

	const renderItem: ListRenderItem<IItem> = ({ item }) => (
		<Item name={item.name} handleModal={() => handleModal(item.id)} />
	)

	return (
		<View style={styles.homeContainer}>
			<AddItem
				onPress={() => addItem(value)}
				onChange={handleChange}
				isDisabled={value === ''}
				value={value}
				titleButton='Add'
				placeholder='Add item here...'
			/>
			<View style={styles.itemsContainer}>
				<FlatList
					data={items}
					renderItem={renderItem}
					keyExtractor={({ id }: any) => `item-${id}`}
				/>
			</View>
			<CustomModal
				animationType='slide'
				visible={visible}
				transparent={true}
				onRequestClose={() => console.log('on request')}
			>
				<View style={styles.modalBg}>
					<View style={styles.modalContainer}>
						<View>
							<Text style={styles.modalTitle}>Detalle</Text>
						</View>
						<View>
							<Text>¿Estas seguro de que quieres eliminar?</Text>
						</View>
						<View>
							<Text style={styles.selectedItem}>{itemSelected?.name}</Text>
						</View>
						<View style={styles.buttonContainer}>
							<Button
								title='Eliminar'
								onPress={() => onHandleDeleteItem(itemSelected?.id)}
								color='#0193f4'
							/>
							<Button title='Cancelar' onPress={() => handleModal()} color='#cccccc' />
						</View>
					</View>
				</View>
			</CustomModal>
		</View>
	)
}

export default Home
