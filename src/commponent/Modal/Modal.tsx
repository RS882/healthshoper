
import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';

interface IModal {
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
	minWidth: 300,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 3,
};


const StyledModalBox = styled(Box)((props) => ({
	[props.theme.breakpoints.up('mobile')]: { width: 300, },
	[props.theme.breakpoints.up('laptop')]: { width: 600, },

}));


const ModalWindow: FC<IModal> = ({ children, isOpen, isPreloader, onClose }) => {


	return (

		<Modal
			open={isOpen}
			onClose={() => onClose(isPreloader)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<StyledModalBox sx={style}>	{children}</StyledModalBox>
		</Modal>

	);
};

export default React.memo(ModalWindow);