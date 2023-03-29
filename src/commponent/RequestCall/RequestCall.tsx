import React from 'react';
import { Box, Button, FormControl, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { useAppDispatch } from './../../Redux/store';
import { setRequsetCallFormClose } from '../../Redux/RequesrCallSlice';
import InputTextField from './InputTextField';
import Typography from '@mui/material/Typography';
import * as Yup from 'yup';
import { setRequestCall } from '../../Redux/Thunk/thunkRequestCall';
import { positionNumberIsNotForFilling } from '../../Utilits/functions';
import { IRequestCall } from '../../Types/ARITypes';




const RequestCallForm = () => {

	const dispatch = useAppDispatch();
	const iniValues: IRequestCall = {
		userName: '',
		phoneNumber: '',
	};
	const closeForm = () => {
		dispatch(setRequsetCallFormClose());
	};


	return (
		<Box component={Formik} initialValues={iniValues}
			validationSchema={Yup.object({
				userName: Yup.string()
					.required('Required'),
				phoneNumber: Yup.string()
					.required('Required')
					.max(17, 'Must be 12 characters or less')
					.test('telNumberRequired', 'Required ', (values) => values.match(/\d/g)?.length === 12)
					.test('telNumber', 'Unacceptable symbol ', (values) => {
						const arr = values.split('')
							.filter((e, i) => !positionNumberIsNotForFilling().includes(i) && e !== '_')
							.join('');
						return (/^\d+$/).test(arr)
					}),
			})}
			onSubmit={values => {
				const val: IRequestCall = { userName: values.userName, phoneNumber: values.phoneNumber.match(/\d/g).join('') };
				dispatch(setRequestCall(val));
				closeForm();
			}} >
			<FormControl component={Form} sx={{ width: '100%' }}>
				<Typography variant="h6" component="h2" sx={{ pb: 2 }}>How to contact you?</Typography>
				<InputTextField sx={{ pb: 2 }} label="Your name" name='userName' />
				<InputTextField sx={{ pb: 2 }} label="Your phone nummer" name='phoneNumber' />
				<Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 2 }}>
					<Button type="submit" variant="contained">Submit</Button>
					<Button onClick={closeForm} variant="outlined">Cancel</Button>
				</Box>
			</FormControl>
		</Box>
	);
};

export default React.memo(RequestCallForm);