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