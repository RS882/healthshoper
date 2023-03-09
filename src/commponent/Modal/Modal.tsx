
import React, { FC } from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { setModalClose } from './../../Redux/ModalSlice';
import { useAppDispatch } from './../../Redux/store';
import { delErrorMessage } from './../../Redux/ErrorSlice';

import LinearProgress from '@mui/material/LinearProgress';

export interface IModal {
	isOpen: boolean;
	title: string;
	modalMessages: string[];
	isPreloader: boolean;
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



const ModalWindow: FC<IModal> = ({ title, modalMessages, isOpen, isPreloader }) => {

	const dispatch = useAppDispatch();

	const handleClose = () => {
		if (!isPreloader) {

			dispatch(delErrorMessage());
			dispatch(setModalClose());

		}
	};
	const textElem = modalMessages.map((e, i) => <div key={e + 1}>{e}</div>)

	return (

		<Modal
			open={isOpen}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			{<Box sx={style}>
				{isPreloader ? <LinearProgress /> : <>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						{title}
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{textElem}
					</Typography>
				</>
				}
			</Box>
			}

		</Modal>

	);
};

export default React.memo(ModalWindow);