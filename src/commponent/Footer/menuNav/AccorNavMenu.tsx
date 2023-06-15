

import React, { FC, useState } from 'react';
import { Accordion, Button, Menu, MenuItem } from '@mui/material';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { makeUcAllFirst, ucFirst } from '../../../Utilits/functions';
import { log } from 'console';

interface IMenuNav {
	btnText: string;
	menuItemText: string[];
}



const AccorNavMenu: FC<IMenuNav> = ({ btnText, menuItemText }) => {
	const navigate: NavigateFunction = useNavigate();


	const classOfAccordeon: string = `panel-footer${btnText.split('').filter(e => e !== ' ').join('')}`

	const menuItem: JSX.Element[] = menuItemText.map((e, i) =>
		<MenuItem onClick={() => { navigate(`/${makeUcAllFirst(e)}`) }} key={e + i}>
			{ucFirst(e)}
		</MenuItem>
	);



	return (
		<>
			<Accordion >
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls={classOfAccordeon}
					id={classOfAccordeon}>
					<Typography>{btnText}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					{menuItem}
				</AccordionDetails>
			</Accordion>



		</>
	);
};

export default AccorNavMenu;