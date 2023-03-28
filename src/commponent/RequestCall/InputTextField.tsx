import { TextField, TextFieldProps } from '@mui/material';
import { useField } from 'formik';
import React, { useRef } from 'react';
import { InputAttrProps } from './../../Types/formikTypes';
import { useEffect } from 'react';
import { positionNumberIsNotForFilling, transformPhoneNumber } from '../../Utilits/functions';


const InputTextField = ({ ...props }: TextFieldProps & InputAttrProps) => {
	const [field, meta, helpers] = useField(props);
	const isError: boolean = meta.touched && !!meta.error;
	const inputFielsRef = useRef<HTMLDivElement>(null);

	const TEL_TEMPLATE = '+__ ___ ___-__-__';
	const isPhoneNumer = field.name === 'phoneNumber';





	const inputElem = inputFielsRef.current !== null ? inputFielsRef.current.querySelector('input') : null;



	const onKeyEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {

		!field.value && helpers.setValue(TEL_TEMPLATE);
		const сurrentCursorPosition = inputElem !== null ? inputElem.selectionStart! : 0;
		const isPositionNoConsistent = (position: number) => positionNumberIsNotForFilling().includes(position);
		const displacementCursor = (displacement: number, displacementForCheck = displacement) => {
			isPositionNoConsistent(сurrentCursorPosition + displacementForCheck) &&
				inputElem?.setSelectionRange(сurrentCursorPosition + displacement, сurrentCursorPosition + displacement)
		};



		if (event.key.match(/\d/)) {
			event.preventDefault();
			if (field.value === TEL_TEMPLATE) {
				const res = field.value.split('');
				res.splice(1, 1, event.key);
				helpers.setValue(res.join(''));
			} else if (!isPositionNoConsistent(сurrentCursorPosition)) {
				const res = field.value.split('');
				res[сurrentCursorPosition] === '_' && res.splice(сurrentCursorPosition, 1, event.key);
				helpers.setValue(res.join(''));
			}
			return;
		};
		if (event.key === 'Delete' && !isPositionNoConsistent(сurrentCursorPosition)) {
			event.preventDefault();
			const res = field.value.split('');
			res[сurrentCursorPosition] !== '_' && res.splice(сurrentCursorPosition, 1, '_');
			helpers.setValue(res.join(''));
			return;
		};
		if (event.key === 'Backspace') {
			event.preventDefault();
			if (!isPositionNoConsistent(сurrentCursorPosition - 1)) {
				const res = field.value.split('');
				res[сurrentCursorPosition - 1] !== '_' && res.splice(сurrentCursorPosition - 1, 1, '_');
				helpers.setValue(res.join(''));
			} else {
				сurrentCursorPosition <= 1 ? displacementCursor(1, -1) : displacementCursor(-1);
			};
			return;
		};

		if (event.key === 'ArrowLeft') {
			сurrentCursorPosition <= 1 ? displacementCursor(1, -1) : displacementCursor(-1);
			return;
		}

		if (event.key === 'ArrowRight') {
			displacementCursor(1);
			return;
		}
	};

	const onFocusEvent = () => {
		!field.value && helpers.setValue(TEL_TEMPLATE);
	};


	useEffect(() => {

		if (isPhoneNumer && field.value) {
			const [inputText, cursorPosition] = transformPhoneNumber(field.value);
			cursorPosition && inputElem?.setSelectionRange(cursorPosition, cursorPosition);
			helpers.setValue(inputText);
		};

	}, [field.value]);


	return (
		<>
			<TextField ref={inputFielsRef} variant="outlined" {...field} {...props}
				onKeyDown={isPhoneNumer ? e => onKeyEvent(e) : undefined}
				onFocus={isPhoneNumer ? onFocusEvent : undefined}
				error={isError}
				helperText={isError ? meta.error : ' '} />
		</>

	);
};

export default React.memo(InputTextField);