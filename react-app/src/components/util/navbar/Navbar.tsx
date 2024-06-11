import {
	AppBar,
	Avatar,
	Container,
	Divider,
	Stack,
	Typography,
} from '@mui/material';
import './navbar.css';

const pages = ['Campaigns', 'Characters', 'Ongoing sessions'];

type PageLinkProps = {
	title: string;
};

function PageLink({ title }: PageLinkProps) {
	const address = title.split(' ').join('-').toLowerCase();
	return (
		<Typography
			sx={{ color: 'white', fontSize: '1.4em', textDecoration: 'none' }}
			component='a'
			href={`/${address}`}
		>
			{title}
		</Typography>
	);
}

export function Navbar() {
	return (
		<>
			<AppBar
				component='header'
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Container
					className='navbar-content'
					sx={{
						display: 'flex',
						flexDirection: 'row',
						gap: '2em',
						padding: 0,
						margin: 0,
					}}
				>
					<Typography fontWeight='bold' fontSize='32px'>
						Logo
					</Typography>
					<Stack
						component='nav'
						direction='row'
						justifyContent='space-around'
						gap='2em'
						textAlign='center'
						alignItems='center'
					>
						{pages.map((page) => (
							<PageLink title={page} />
						))}
					</Stack>
				</Container>
				<Avatar
					component='button'
					sx={{
						border: 'none',
					}}
					onClick={() => {}}
				/>
			</AppBar>
		</>
	);
}
