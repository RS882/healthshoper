import React, { FC, useState } from 'react';
import MenuList from '@mui/material/MenuList';
import { Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeUcAllFirst, ucFirst } from '../../../Utilits/functions';



const MenuNavLaptop: FC<{ items: string[] }> = ({ items }) => {
	const navigate = useNavigate();

	const menuItem = items.map((e, i) =>
		<MenuItem onClick={() => {
			navigate(`/${makeUcAllFirst(e)}`)
		}
		} key={e + i}>{ucFirst(e)}</MenuItem>
	)
	return (
		<MenuList>
			{menuItem}
		</MenuList>
	);
};

export default MenuNavLaptop;