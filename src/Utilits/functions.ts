// The function accepts the line and if it consists of 12 digits, returns an array of the type of line of two elements-number in format "+11 111 111-11-11" 2 number in form "1111111111111"



// If the length of the line is more than 12 characters and Masiav of empty lines returned in a line less than 12 digits ['', '']
export const getFormatedTelNumber = (telNumString: string): string[] => {
	if (telNumString.length > 12) return ['', ''];
	const numerArr = telNumString.match(/\d/g);
	if (numerArr?.length === 12) {
		const textNum = [...numerArr];
		textNum.splice(0, 0, '+');
		textNum.splice(3, 0, ' ');
		textNum.splice(7, 0, ' ');
		textNum.splice(11, 0, '-');
		textNum.splice(14, 0, '-');
		return [textNum.join(''), numerArr.join('')]
	}
	return ['', '']
};

//------------------------------
// Changes the first symbol of the text to the title. All other characters become lowercaseex
export const changeFirstSimbolToUpperCase = (text: string): string =>
	text.toLowerCase().split('').map((e, i) => i === 0 ? e.toUpperCase() : e).join('');
//-----------------------------------------
// The first Elem element in the Arr array will be removed
export const delElemFromArray = <T = string>(arr: T[], elem: T): T[] => {
	const newState = [...arr];
	const index = newState.indexOf(elem);
	if (index >= 0) newState.splice(index, 1);
	return [...newState];
};

//-----------------------------------------
// Adding an element to an array without duplicates
export const addItemToArrayOneDublicat = <T>(array: T[], item: T) =>
	item && array.includes(item) ? array : [...array, item];

//----------------------------------------------------
// converts a phone number according to the template
// Returns the array - telephone number and position of the cursor
export const transformPhoneNumber = (value: string, template = '+__ ___ ___-__-__'): [string, number | undefined] => {
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
//-----------------------------------
//Returning an array of income in the template that cannot be filled out
export const positionNumberIsNotForFilling = (telTemplate = '+__ ___ ___-__-__'): number[] => {
	let position: number[] = [];
	telTemplate.split('').map((e, i) => {
		e !== '_' && position.push(i);
	})
	return position;
};
//-------------------------------------------------
// Makes the first letter of the title line
export const ucFirst = (str: string): string => {
	if (!str) return str;
	return str[0].toUpperCase() + str.slice(1);
}
//---------------------------------------
// Makes the first symbol of each word of the Stark with the title

export const makeUcAllFirst = (item: string): string => {
	const ucFirst = (str: string): string => {
		if (!str) return str;
		return str[0].toUpperCase() + str.slice(1);
	}
	return item.split(' ').map(e => ucFirst(e)).join('')
}