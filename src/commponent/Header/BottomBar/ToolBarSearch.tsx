import { Box, Button } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


const SearchBox = styled(Box)`
position: relative;
	min-height:100%;
	flex: 1 1 auto;
	max-width: 736px;
	display:flex;
	`;
const SeachInput = styled(InputBase)`
	border: 1px solid #000;
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

	const onClickSearch = () => {
		console.log('Search');

	}
	return (
		<SearchBox
			sx={(theme) => ({
				backgroundColor: theme.colors.white,
				// '&:hover': { backgroundColor: theme.colors.blue3 } 
			})}>
			<SeachInput
				placeholder='What are you looking for?'
				inputProps={{ 'aria-label': 'search' }}
			/>
			<SeachIconWrapper onClick={onClickSearch}>
				<SearchIcon sx={[{ fontSize: '40px', }, (theme) => ({ color: theme.colors.blue3, })]} />
			</SeachIconWrapper>

		</SearchBox>
	);
};

export default React.memo(ToolBarSearch);