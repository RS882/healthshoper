import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { exampleText } from './exempleText';
import Tooltip from '@mui/material/Tooltip';



const SearchBox = styled(Box)`
position: relative;
	min-height:100%;
	flex: 1 1  746px;
	
	display:flex;
	`;
const SeachInput = styled(InputBase)`

	flex: 1 1 auto;
	padding-left:20px;

`;
const SeachIconWrapper = styled(Button)`
	min-height:100%;

	flex:0 0 50px;
	display:flex;
	justify-content:center;
	align-items:center;
`;


const ToolBarSearch = () => {

	const [inputText, setInputText] = useState('');

	const onClickSearch = () => {
		console.log('Search');
		setInputText('');
	};


	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value);
	};


	const scearchText: string[] = inputText ? exampleText.split(` `).filter(e => e.includes(inputText)) : [];
	const inputLength: number = inputText.length;
	const scearchElem: JSX.Element[] = scearchText.map((e, i) => {
		const startPos: number = e.indexOf(inputText);
		const partFirst: string = startPos ? e.slice(0, startPos) : '';
		const partFinal: string = startPos + inputLength === e.length - 1 ? e.slice(startPos + inputLength) : '';
		return (
			<div key={e + i}>{partFirst}<strong>{inputText}</strong>{partFinal}</div>
		)
	});


	return (
		<SearchBox
			sx={(theme) => ({
				backgroundColor: theme.colors.white,
				// '&:hover': { backgroundColor: theme.colors.blue3 } 
			})}>
			<SeachInput
				placeholder='What are you looking for?'
				inputProps={{ 'aria-label': 'search' }}
				onChange={changeHandler} value={inputText}
			/>
			<Tooltip title={'Search'}>
				<SeachIconWrapper onClick={onClickSearch}>
					<SearchIcon sx={[{ fontSize: '40px', }, (theme) => ({ color: theme.colors.blue3, })]} />
				</SeachIconWrapper>
				{/* {scearchElem} */}
			</Tooltip>
		</SearchBox>
	);
};

export default React.memo(ToolBarSearch);