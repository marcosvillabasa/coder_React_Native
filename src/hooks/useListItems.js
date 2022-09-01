import { useState } from 'react'
import { data } from '../../data/data'

const useListItems = () => {
	const [value, setValue] = useState('')
	const [items, setItems] = useState(data)
	const addItem = () => {
		setItems([...items, { name: value, id: items.length + 1 }])
		setValue('')
	}

	const handleChange = (text) => {
		setValue(text)
	}
	return {
		addItem,
		handleChange,
		value,
		items,
	}
}

export default useListItems
