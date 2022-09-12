import { useState } from 'react'

export const useInput = <T extends Object>(initialState: T) => {
	const [value, setValue] = useState(initialState)

	const handleChange = (e: any) => {
		const { name, value } = e.target
		setValue((prevState) => ({ ...prevState, [name]: value }))
	}

	return {
		value,
		handleChange,
	}
}
