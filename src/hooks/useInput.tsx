import { useState } from 'react'

export const useInput = () => {
	const [value, setValue] = useState('')

	const handleChange = (text: string) => {
		setValue(text)
	}

	return {
		value,
		handleChange,
	}
}
