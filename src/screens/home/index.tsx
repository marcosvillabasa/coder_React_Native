import React, { useState } from 'react'
import {
	Button,
	FlatList,
	GestureResponderEvent,
	ListRenderItem,
	Modal,
	Platform,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import AddItem from '../../components/addItem/AddItem'
import Item from '../../components/Item'
import CustomModal from '../../components/modal/CustomModal'
import useListItems from '../../hooks/useListItems'
import { IItem } from '../../interfaces'

const Home = () => {
	const { addItem, handleChange, value, items, setItems } = useListItems()
	const [visible, setVisible] = useState(false)
	const [itemSelected, setItemSelected] = useState<IItem>()

	const handleModal = (id?: number) => {
		setVisible(!visible)
		setItemSelected(items.find((item) => item.id === id))
	}

	const onHandleDeleteItem = (id: number | undefined): void => {
		setItems(items.filter((item) => item.id !== id))
		setItemSelected(undefined)
		setVisible(false)
	}

	const renderItem: ListRenderItem<IItem> = ({ item }) => (
		<Item name={item.name} handleModal={() => handleModal(item.id)} />
	)

	return (
		<View style={styles.homeContainer}>
			<AddItem
				onPress={addItem}
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
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: 'rgba(0,0,0,0.5)',
					}}
				>
					<View
						style={{
							height: 300,
							width: '80%',
							backgroundColor: '#EFEEEE',
							borderRadius: 5,
							borderColor: '#0193f4',
							borderWidth: 2,
						}}
					>
						<View style={styles.modalContent}>
							<Text>Detalle</Text>
						</View>
						<View style={styles.modalMessageContainer}>
							<Text style={styles.modalMessage}>
								¿Estas seguro de que quieres eliminar?
							</Text>
						</View>
						<View style={styles.modalMessageContainer}>
							<Text style={styles.selectedTask}>{'selectedTask?.value'}</Text>
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

const styles = StyleSheet.create({
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

export default Home
