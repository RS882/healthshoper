import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';


const StyledHitBox = styled(Box)((props) => ({
	backgroundColor: props.theme.colors.yellow,
	color: props.theme.colors.black,
}));

const StyledPromoBox = styled(Box)((props) => ({
	backgroundColor: props.theme.colors.red,
	color: props.theme.colors.white,
}));


const Banner: FC<{ text: string }> = ({ text }) => {

	const Component = text === 'promotion' ? StyledPromoBox : StyledHitBox;

	return (
		<Component sx={{
			display: 'flex;',
			justifyContent: 'center',
			alignItems: 'center',
			p: 1,
			height: 24,
			textTransform: 'uppercase',
			fontSize: 12,
			fontWeight: 500,
		}}>{text}</Component>
	);
};

export default React.memo(Banner);