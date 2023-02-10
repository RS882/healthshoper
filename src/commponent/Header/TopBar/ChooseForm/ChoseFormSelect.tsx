import { MenuItem, NativeSelect, Typography } from '@mui/material';
import Select from '@mui/material/Select';
import React from 'react';
import { useField } from 'formik';
import { SelectAttrProps } from '../../../../Types/formikTypes';
import { CitysList } from '../cityList';
import { useEffect } from 'react';




const ChoseFormSelect = ({ list, startItem, ...props }: { list: CitysList, startItem: string } & SelectAttrProps) => {
	const [field, meta, helpers] = useField(props);

	const menuItems = list.map((e, i) => {
		const elem = '' + e;
		return <MenuItem value={elem} key={elem + i}>{elem}</MenuItem>
	});

	useEffect(() => {
		helpers.setValue(startItem)
	}, [startItem]);
	return (
		<Select variant='standard' {...field} sx={theme => ({ color: theme.colors.blue3, fontWeight: 500 })}>
			{menuItems}
		</Select>
	);
};

export default React.memo(ChoseFormSelect);