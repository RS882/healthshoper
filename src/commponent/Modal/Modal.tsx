
import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


export interface IModal {
	isOpen: boolean;
	isPreloader: boolean;
	onClose: (is?: boolean) => void;
	children: React.ReactNode;
}

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};


const ModalWindow: FC<IModal> = ({ children, isOpen, isPreloader, onClose }) => {


	return (

		<Modal
			open={isOpen}
			onClose={() => onClose(isPreloader)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>	{children}</Box>
		</Modal>

	);
};

export default React.memo(ModalWindow);