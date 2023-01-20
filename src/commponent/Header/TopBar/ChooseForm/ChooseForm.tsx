import React, { FC } from 'react';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';
import FormControl from '@mui/material/FormControl';
import ChoseFormSelect from './ChoseFormSelect';
import AutoSubmitForFromik from '../../../FormikComponent/AutoSubmitForFromik';
import { useAppDispatch } from '../../../../Redux/store';
import { changeUsersCity } from '../../../../Redux/ItemsSlice';
import { CitysList } from '../cityList';

const ChooseForm: FC<{ list: CitysList }> = ({ list }) => {

	const dispatch = useAppDispatch();

	return (
		<Box component={Formik} initialValues={{ itemList: list[0] }}
			onSubmit={values => { dispatch(changeUsersCity(values.itemList)) }} >
			<FormControl component={Form} >
				<ChoseFormSelect name='itemList' list={list} />
				<AutoSubmitForFromik />
			</FormControl>
		</Box>
	);
};

export default React.memo(ChooseForm);