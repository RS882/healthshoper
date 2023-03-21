import React, { FC } from 'react';
import { selErrorMessage } from '../../Redux/ErrorSlice';
import { useAppSelector } from '../../Redux/store';
import { IModalContainer } from './ModalContainer';
import Typography from '@mui/material/Typography';

const ModalMessage: FC<IModalContainer> = ({ title, messages }) => {

	const errorMessage = useAppSelector(selErrorMessage);
	const errorsTitel = errorMessage.length > 0 ? 'Error' : '';
	const errorMessages = errorMessage.length > 0 ? errorMessage : ['To close the window, click somewhere'];
	const elemTitle = title || errorsTitel;
	const modalMessages = messages && messages.length > 0 ? messages : errorMessages;
	const textElem = modalMessages.map((e, i) => <div key={e + i}>{e}</div>)

	return (
		<>
			<Typography id="modal-modal-title" variant="h6" component="h2">
				{elemTitle}
			</Typography>
			<Typography id="modal-modal-description" sx={{ mt: 2 }}>
				{textElem}
			</Typography>
		</>
	);
};

export default React.memo(ModalMessage);