import React, { FC } from 'react';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';
import FormControl from '@mui/material/FormControl';
import ChoseFormSelect from './ChoseFormSelect';
import AutoSubmitForFromik from '../../../FormikComponent/AutoSubmitForFromik';
import { useAppDispatch, useAppSelector } from '../../../../Redux/store';
import { changeUsersCity, selUsersCity } from '../../../../Redux/ItemsSlice';
import { CitysList } from '../../../../Types/cityList';


const ChooseForm: FC<{ list: CitysList }> = ({ list }) => {

	const dispatch = useAppDispatch();
	const startCity = useAppSelector(selUsersCity);
	return (
		<Box component={Formik} initialValues={{ itemList: startCity === null ? list[0] : startCity }}
			onSubmit={values => { dispatch(changeUsersCity(values.itemList)) }} >
			<FormControl component={Form} >
				<ChoseFormSelect name='itemList' list={list} startItem={startCity!} />
				<AutoSubmitForFromik />
			</FormControl>
		</Box>
	);
};

export default React.memo(ChooseForm);