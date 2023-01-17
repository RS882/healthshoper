import { MenuItem, NativeSelect, Typography } from '@mui/material';
import Select from '@mui/material/Select';
import React from 'react';
import { useField } from 'formik';
import { SelectAttrProps } from '../../../../Types/formikTypes';




const ChoseFormSelect = ({ list, ...props }: { list: string[] } & SelectAttrProps) => {
	const [field] = useField(props);
	const menuItems = list.map((e, i) => <MenuItem value={e} key={e + i}>{e}</MenuItem>);
	return (

		<Select variant='standard' {...field} sx={theme => ({ color: theme.colors.blue3, fontWeight: 500 })}>
			{menuItems}
		</Select>
	);
};

export default React.memo(ChoseFormSelect);