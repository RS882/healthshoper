import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import React, { FC } from 'react';

interface ICallUsLink {
	digNum: string;
	children: React.ReactNode
	mobileStyle: { [property: string]: string; },
	destopStyle: { [property: string]: string; },
};

const CallUsLink: FC<ICallUsLink> = ({ digNum, children, mobileStyle, destopStyle }) => {


	return (
		<Tooltip title='Call us'>
			<Link href={`tel:${digNum}`} underline="none"
				sx={[{ fontWeight: 500, },
				theme => ({
					color: theme.colors.black,
					[theme.breakpoints.up('mobile')]: mobileStyle,
					[theme.breakpoints.up('desktop')]: destopStyle,
				})
				]}>
				{children}
			</Link>
		</Tooltip>)
}

export default React.memo(CallUsLink);