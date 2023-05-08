import React, { FC } from 'react';
import { selErrorMessage } from '../../Redux/ErrorSlice';
import { useAppSelector } from '../../Redux/store';
import { IModalContainer } from './ModalContainer';
import Typography from '@mui/material/Typography';
import { selInfoMessage } from '../../Redux/RequesrCallSlice';
import { Box } from '@mui/material';
import { selIsAuth } from '../../Redux/AuthorizationSlice';


const ModalMessage: FC<IModalContainer> = ({ title, messages }) => {

	const errorMessage = useAppSelector(selErrorMessage);

	const isAuth = useAppSelector(selIsAuth);
	let infoMessage = useAppSelector(selInfoMessage);
	infoMessage = !infoMessage && isAuth ? ` You are authorized` : infoMessage;
	const otherMessage = infoMessage ? [infoMessage] : messages;
	const errorsTitel = errorMessage.length > 0 ? 'Error' : '';
	const errorMessages = errorMessage.length > 0 ? errorMessage : ['To close the window, click somewhere'];
	const elemTitle = title || errorsTitel;
	const modalMessages = otherMessage && otherMessage.length > 0 ? otherMessage : errorMessages;
	const textElem = modalMessages.map((e, i) => <Typography key={e + i}>{e}</Typography>)

	return (
		<>
			<Typography id="modal-modal-title" variant="h6" component="h2">
				{elemTitle}
			</Typography>
			<Box id="modal-modal-description" sx={{ mt: 2 }}>
				{textElem}
			</Box>
		</>
	);
};

export default React.memo(ModalMessage);