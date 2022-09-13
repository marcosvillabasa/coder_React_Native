import { useState } from 'react'
import { data } from '../../data/data'

export const useItemsActions = () => {
	const [items, setItems] = useState(data)
	const addItem = (value: string) => {
		setItems([...items, { name: value, id: items.length + 1 }])
	}

	const deleteItem = (id: number | undefined) => {
		return items.filter(item => item.id !== id)
	}

	const findItem = (id: number | undefined) => {
		return items.find(item => item.id === id)
	}

	return {
		addItem,
		deleteItem,
		findItem,
		setItems,
		items,
	}
}

