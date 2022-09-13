import { useState } from 'react'
import { data } from '../../data/data'

export const useListItems = () => {
	const [items, setItems] = useState(data)
	const addItem = (value: string) => {
		setItems([...items, { name: value, id: items.length + 1 }])
	}

	return {
		addItem,
		setItems,
		items,
	}
}

