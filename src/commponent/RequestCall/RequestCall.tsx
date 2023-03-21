import React from 'react';
import { Box, Button, FormControl, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { useAppDispatch } from './../../Redux/store';
import { setRequsetCallFormClose } from '../../Redux/RequesrCallSlice';


export interface IRequestCall {
	userName: string;
	phoneNumber: string;
};

const RequestCallForm = () => {
	const iniValues = {
		userName: '',
		phoneNumber: '',
	}


	const dispatch = useAppDispatch();
	return (
		<Box component={Formik} initialValues={iniValues}
			onSubmit={values => {
				dispatch(setRequsetCallFormClose());
			}} >
			<FormControl component={Form} >

				<TextField label="Your name" variant="outlined" name='userName' />
				<TextField label="Your phone nummer" variant="outlined" name='phoneNumber' />
				<Button type="submit" variant="contained">Submit</Button>
			</FormControl>
		</Box>
	);
};

export default React.memo(RequestCallForm);