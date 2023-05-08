import { TextField, TextFieldProps } from '@mui/material';
import { useField } from 'formik';
import React from 'react';
import { InputAttrProps } from '../Types/formikTypes';

const LoginTextField = ({ ...props }: TextFieldProps & InputAttrProps) => {
	const [field, meta, helpers] = useField(props);
	const isError: boolean = meta.touched && !!meta.error;

	return (<>

		<TextField variant="outlined" {...field} {...props}
			error={isError}
			helperText={isError ? meta.error : ' '} />
	</>
	);
};

export default LoginTextField;