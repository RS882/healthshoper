import React, { useState } from 'react';
import { useAppDispatch } from '../Redux/store';
import { APIUserLoginModel } from '../Models/ILoginUserModel';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, FormControl, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { setIsLoginFormOpen } from '../Redux/AuthorizationSlice';
import LoginTextField from './loginTextField';
import { login, regUser } from '../Redux/Thunk/thunkAuth';

const LoginForm = () => {

	const dispatch = useAppDispatch();
	const iniValues: APIUserLoginModel = {
		userEmail: '',
		userPassword: '',
	};

	const closeForm = () => {
		dispatch(setIsLoginFormOpen(false))
	};

	const LOGIN_TEXT = 'login';
	const REG_TEXT = 'registation';
	const [submitType, setSubmitType] = useState('');




	return (
		<Box component={Formik} initialValues={iniValues}
			validationSchema={Yup.object({
				userEmail: Yup.string()
					.required('Required')
					.email(),
				userPassword: Yup.string()
					.required('Required')
					.max(32, 'Must be 32 characters or less')
					.min(3, 'Must be at least 3 characters')
			})}
			onSubmit={values => {
				console.log(submitType);
				const data: APIUserLoginModel = { userEmail: values.userEmail, userPassword: values.userPassword };
				if (submitType === REG_TEXT) dispatch(regUser(data));
				if (submitType === LOGIN_TEXT) dispatch(login(data));
				dispatch(setIsLoginFormOpen(false))
				// const val: IRequestCall = { userName: values.userName, phoneNumber: values.phoneNumber.match(/\d/g).join('') };
				// dispatch(setRequestCall(val));
				// closeForm();
			}} >

			<FormControl component={Form} sx={{ width: '100%' }}>
				<Typography variant="h6" component="h2" sx={{ pb: 2 }}>How to contact you?</Typography>
				<LoginTextField sx={{ pb: 2 }} name='userEmail' />
				<LoginTextField sx={{ pb: 2 }} name='userPassword' />
				<Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: 3 }}>
					<Button type="submit" variant="contained" onClick={() => setSubmitType(LOGIN_TEXT)}>Login</Button>
					<Button type="submit" variant="outlined" onClick={() => setSubmitType(REG_TEXT)}>Registration</Button>
					<Button onClick={closeForm} variant="outlined">Cancel</Button>
				</Box>
			</FormControl>
		</Box>
	);
};

export default LoginForm;