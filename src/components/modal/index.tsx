import React from 'react'
import { Modal } from 'react-native'

interface Props {
	children: JSX.Element[] | JSX.Element
	visible: boolean
	animationType: 'none' | 'fade' | 'slide' | undefined
	onRequestClose: () => void
	transparent: boolean
}

export const CustomModal = ({
	children,
	visible,
	animationType,
	onRequestClose,
	transparent,
}: Props) => {
	return (
		<Modal
			animationType={animationType}
			visible={visible}
			onRequestClose={onRequestClose}
			transparent={transparent}
		>
			{children}
		</Modal>
	)
}

