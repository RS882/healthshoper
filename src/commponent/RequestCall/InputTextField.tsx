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

	const TEL_TEMPLATE = '+__ ___ ___-__-__';
	const isPhoneNumer = field.name === 'phoneNumber';
	const positionNumberIsNotForFilling = (telTemplate = '+__ ___ ___-__-__'): number[] => {
		let position: number[] = [];
		telTemplate.split('').map((e, i) => {
			if (e !== '_') position.push(i);
		})
		return position;
	};

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

	const inputElem = inputFielsRef.current !== null ? inputFielsRef.current.querySelector('input') : null;

	// console.log(positionNumberIsNotForFilling());
	// console.log(сurrentCursorPosition);

	const onKeyEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
		const сurrentCursorPosition = inputElem !== null ? inputElem.selectionStart! : 0;
		const isPositionNoConsistent = (position: number) => positionNumberIsNotForFilling().includes(position);

		const displacementCursor = (displacement: number, displacementForCheck = displacement) => {
			isPositionNoConsistent(сurrentCursorPosition + displacementForCheck) &&
				inputElem?.setSelectionRange(сurrentCursorPosition + displacement, сurrentCursorPosition + displacement)
		};


		// positionNumberIsNotForFilling().includes(сurrentCursorPosition) &&
		// 	inputElem?.setSelectionRange(сurrentCursorPosition + 1, сurrentCursorPosition + 1)

		if (event.key === 'Delete') {
			event.preventDefault();

			if (!isPositionNoConsistent(сurrentCursorPosition)) {
				const res = field.value.split('');
				res.splice(сurrentCursorPosition - 1, 1, '_');
				helpers.setValue(res.join(''));

			}
		};
		if (event.key === 'Backspace') {
			event.preventDefault();
			console.log(event.key)
		};
		if (event.key === 'ArrowLeft')
			сurrentCursorPosition <= 1 ? displacementCursor(1, -1) : displacementCursor(-1);

		if (event.key === 'ArrowRight') displacementCursor(1);



	}


	useEffect(() => {

		if (isPhoneNumer && field.value) {
			const [inputText, cursorPosition] = transformPhoneNumber(field.value);
			cursorPosition && inputElem?.setSelectionRange(cursorPosition, cursorPosition);
			helpers.setValue(inputText);
		};

	}, [field.value])

	return (
		<>
			<TextField ref={inputFielsRef} variant="outlined" {...field} {...props}
				onKeyDown={isPhoneNumer ? e => onKeyEvent(e) : undefined}
				error={isError}
				helperText={isError ? meta.error : ' '} />
		</>

	);
};

export default React.memo(InputTextField);