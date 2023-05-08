import React, { FC } from 'react';
import { selIsModal, setModalClose } from '../../Redux/ModalSlice';
import { useAppDispatch, useAppSelector } from './../../Redux/store';
import Modal from './Modal';
import { delErrorMessage } from './../../Redux/ErrorSlice';
import { selInitializationSuccess } from '../../Redux/StartSlice';
import LinearProgress from '@mui/material/LinearProgress';
import RequestCallForm from './../RequestCall/RequestCall';

import ModalMessage from './ModalMessage';
import { clearRCallMessage, selIsRequsetCallForm, setRequsetCallFormClose } from './../../Redux/RequesrCallSlice';
import { selIsLoginFormOpen, setIsLoginFormOpen } from '../../Redux/AuthorizationSlice';
import LoginForm from '../../Login/LoginForm';

export interface IModalContainer {
	title?: string;
	messages?: string[];

}

const ModalContainer: FC<IModalContainer> = (props) => {
	const dispatch = useAppDispatch();

	const handleClose = (is?: boolean) => {
		if (!is) {
			dispatch(delErrorMessage());
			dispatch(clearRCallMessage());
			dispatch(setRequsetCallFormClose());
			dispatch(setIsLoginFormOpen(false));
			dispatch(setModalClose());
		}
	};

	const isPreloader = !useAppSelector(selInitializationSuccess);
	const isOpen = useAppSelector(selIsModal);
	const isRequestCallFormOpen = useAppSelector(selIsRequsetCallForm);
	const IsLoginOpen = useAppSelector(selIsLoginFormOpen);

	let contentsOfModalWindow: React.ReactNode = <ModalMessage {...props} />;
	if (isPreloader) contentsOfModalWindow = <LinearProgress />;
	if (isRequestCallFormOpen) contentsOfModalWindow = <RequestCallForm />
	if (IsLoginOpen) contentsOfModalWindow = <LoginForm />

	const modalProps = {
		isPreloader: isPreloader,
		isOpen: isPreloader || isRequestCallFormOpen || isOpen || IsLoginOpen,
		onClose: handleClose,
	};

	return (
		<Modal {...modalProps} >{contentsOfModalWindow}</Modal>
	);
};

export default React.memo(ModalContainer);