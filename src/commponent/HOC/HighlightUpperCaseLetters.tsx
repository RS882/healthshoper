import React from 'react';


// Шч&oзGQежэЖzЩь9ЭБ-cР3YЭqЬБЯlsтnMЙmДХ=IгoЭPЛдzРILНкaс)МиМгzЯfупрЭУы)PВюпJушзЙFxaиКA9геНън#gаянузЛ3wGЯ!.nрУo&еуЫ$СfAк&СюИТ


// looking for capital letters in the line and stylizes them
const HighlightUpperCaseLetters = ({ text }: { text: string }) => {
	const letterAray = text.split('');
	const upLettersArray = letterAray.filter(el => el !== el.toLowerCase());

	const textString: JSX.Element[] = letterAray.map(e => upLettersArray.includes(e) ? <dfn>{e}</dfn> : <span>{e}</span>)
	return (
		<>{textString}</>
	)

};

export default React.memo(HighlightUpperCaseLetters)