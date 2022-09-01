import { useState } from 'react'
import { data } from '../../data/data'

const useListItems = () => {
	const [input, setInput] = useState('')
	const [list, setList] = useState(data)
	const addItem = () => {
		setList([...list, { name: input, id: list.length + 1 }])
		setInput('')
	}

	const handleChange = (text) => {
		setInput(text)
	}
	return {
		addItem,
		handleChange,
		input,
		list,
	}
}

export default useListItems
