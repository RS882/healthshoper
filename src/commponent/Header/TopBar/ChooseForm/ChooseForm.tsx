import React, { FC } from 'react';
import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import { Form, Formik } from 'formik';
import FormControl from '@mui/material/FormControl';
import ChoseFormSelect from './ChoseFormSelect';

const ChooseForm: FC<{ list: string[] }> = ({ list }) => {



	return (
		<Box component={Formik} initialValues={{ itemList: list[0] }}
			onSubmit={(values, actions) => { }} >

			<FormControl component={Form} >

				<ChoseFormSelect name='itemList' list={list} />

			</FormControl>


		</Box>
	);
};

export default React.memo(ChooseForm);