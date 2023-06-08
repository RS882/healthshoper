import { Button, Menu, MenuItem } from '@mui/material';
import React, { FC, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { makeUcAllFirst, ucFirst } from '../../../Utilits/functions';

interface IMenuNav {
	btnText: string;
	menuItemText: string[];
}

const MenuNav: FC<IMenuNav> = ({ btnText, menuItemText }) => {

	const navigate = useNavigate();


	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isOpen: boolean = !!anchorEl;
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};


	const menuItem = menuItemText.map((e, i) =>
		<MenuItem onClick={() => {
			navigate(`/${makeUcAllFirst(e)}`)
			handleClose()
		}
		} key={e + i}>{ucFirst(e)}</MenuItem>
	)
	return (
		<>
			<Button
				onClick={handleClick}
				size='large'
				variant='outlined'
			// endIcon={<KeyboardArrowDownIcon />}
			>{btnText}</Button>
			<Menu
				anchorEl={anchorEl}
				open={isOpen}
				onClose={handleClose}
			>
				{menuItem}
			</Menu>

		</>
	);
};

export default MenuNav