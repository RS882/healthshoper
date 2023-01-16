import React, { FC } from 'react';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';
import FormControl from '@mui/material/FormControl';
import ChoseFormSelect from './ChoseFormSelect';
import AutoSubmitForFromik from '../../../FormikComponent/AutoSubmitForFromik';

const ChooseForm: FC<{ list: string[] }> = ({ list }) => {



	return (
		<Box component={Formik} initialValues={{ itemList: list[0] }}
			onSubmit={(values, actions) => {
				console.log(values);

			}} >
			<FormControl component={Form} >
				<ChoseFormSelect name='itemList' list={list} />
				<AutoSubmitForFromik />
			</FormControl>


		</Box>
	);
};

export default React.memo(ChooseForm);