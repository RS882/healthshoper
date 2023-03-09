import React, { FC } from 'react';
import { selIsModal } from '../../Redux/ModalSlice';
import { useAppSelector } from './../../Redux/store';
import Modal, { IModal } from './Modal';
import { selErrorMessage } from './../../Redux/ErrorSlice';
import { selInitializationSuccess } from '../../Redux/StartSlice';

interface IModalContainer {
	title?: string;
	messages?: string[];

}

const ModalContainer: FC<IModalContainer> = ({ title, messages }) => {

	const isPreloader = !useAppSelector(selInitializationSuccess);

	const isOpen = useAppSelector(selIsModal);
	const errorMessage = useAppSelector(selErrorMessage);
	const errorsTitel = errorMessage.length > 0 ? 'Error' : '';
	const errorMessages = errorMessage.length > 0 ? errorMessage : ['To close the window, click somewhere'];

	const modalProps: IModal = {
		isPreloader: isPreloader,
		isOpen: isPreloader ? isPreloader : isOpen,
		title: title ? title : errorsTitel,
		modalMessages: messages && messages.length > 0 ? messages : errorMessages,
	};

	return (
		<Modal {...modalProps} />
	);
};

export default React.memo(ModalContainer);