import { TextField, TextFieldProps } from '@mui/material';
import { useField } from 'formik';
import React, { useRef } from 'react';
import { InputAttrProps } from './../../Types/formikTypes';
import { useEffect } from 'react';
//"Incorrect entry."

const InputTextField = ({ ...props }: TextFieldProps & InputAttrProps) => {
	const [field, meta, helpers] = useField(props);
	const isError: boolean = meta.touched && !!meta.error;
	const inputFielsRef = useRef<HTMLDivElement>(null);

	const transformPhoneNumber = (value: string, template = '+__ ___ ___-__-__'): [string, number | undefined] => {
		const numberInValue = value.match(/\d/g);

		if (!numberInValue) return [template, 1];
		const res: string = numberInValue.reduce((res, e) => {
			const indexInTemplate: number = res.indexOf('_');
			const arrRes = res.split('');
			arrRes.splice(indexInTemplate, 1, e);
			return arrRes.join('');
		}, template);
		const indexCursor: number | undefined = res.indexOf('_') > 0 ? res.indexOf('_') : undefined;
		return [res, indexCursor];
	};

	useEffect(() => {

		if (field.name === 'phoneNumber' && field.value) {


			const [inputText, cursorPosition] = transformPhoneNumber(field.value);
			cursorPosition && inputFielsRef.current!.querySelector('input')?.setSelectionRange(cursorPosition, cursorPosition);
			helpers.setValue(inputText);
		};

	}, [field.value])

	return (
		<>
			<TextField ref={inputFielsRef} variant="outlined" {...field} {...props}
				error={isError}
				helperText={isError ? meta.error : ' '} />
		</>

	);
};

export default React.memo(InputTextField);