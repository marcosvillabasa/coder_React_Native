import { useState } from 'react'
import { data } from '../../data/data'

export const useListItems = () => {
	const [items, setItems] = useState(data)
	const addItem = (value: string) => {
		setItems([...items, { name: value, id: items.length + 1 }])
	}

	const deleteItem = (id: number | undefined) => {
		return items.filter(item => item.id !== id)
	}

	return {
		addItem,
		deleteItem,
		setItems,
		items,
	}
}

