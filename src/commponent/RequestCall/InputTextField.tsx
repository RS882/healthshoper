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
		const valueRes = value.length > template.length ?
			value.slice(0, template.length) : value;
		const numberInValue = valueRes.match(/\d|_/g);

		if (!numberInValue || !valueRes.match(/\d/g)) return [template, 1];

		const res: [string, number] = numberInValue.reduce((res, e, i) => {
			const [startRes, startIndex] = res;
			const indexInTemplate: number = startRes.indexOf('_', startIndex + 1);
			const arrRes = startRes.split('');
			arrRes.splice(indexInTemplate, 1, e);
			return [arrRes.join(''), indexInTemplate];
		}, [template, 0]);
		const resString = res[0];
		const indexCursor: number | undefined = resString.indexOf('_') > 0 ? resString.indexOf('_') : undefined;
		return [resString, indexCursor];
	};

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
			if (!field.value) {
				const res = field.value.split('');
				res.splice(2, 1, event.key);
				helpers.setValue(res.join(''));
			};
			if (!isPositionNoConsistent(сurrentCursorPosition)) {
				const res = field.value.split('');
				if (res[сurrentCursorPosition] === '_') {
					res.splice(сurrentCursorPosition, 1, event.key);
				};
				helpers.setValue(res.join(''));
			}

		};
		if (event.key === 'Delete') {
			event.preventDefault();
			if (!isPositionNoConsistent(сurrentCursorPosition)) {
				const res = field.value.split('');
				res[сurrentCursorPosition] !== '_' && res.splice(сurrentCursorPosition, 1, '_');
				helpers.setValue(res.join(''));
			};
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
		};

		if (event.key === 'ArrowLeft') сurrentCursorPosition <= 1 ? displacementCursor(1, -1) : displacementCursor(-1);

		if (event.key === 'ArrowRight') displacementCursor(1);
	};

	const onFocusEvent = () => {

		if (!field.value) {
			helpers.setValue(TEL_TEMPLATE);
		}
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