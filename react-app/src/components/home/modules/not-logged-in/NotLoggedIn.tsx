import { Button, Container, Grid, Typography } from '@mui/material';
import DiceImage from '../dice.png';
import '../../../util.css';
import './not-logged-in.css';
import BackgroundImage from './background.png';

type ActionButtonProps = {
	label: string;
	address: string;
	variant: 'text' | 'outlined' | 'contained';
};

export function NotLoggedIn() {
	return (
		<>
			<Container
				className='center container'
				maxWidth={false}
				sx={{
					backgroundImage: `url(${BackgroundImage})`,
					paddingTop: '10em',
				}}
			>
				<Grid
					container
					component='main'
					maxHeight='36em'
					marginX='16em'
					width='auto'
					height='100vh'
					alignItems='center'
					justifyContent='center'
					bgcolor='white'
					columnSpacing={16}
				>
					<Grid
						item
						display='flex'
						justifyContent='center'
						alignItems='center'
						paddingLeft='4em'
						xs={4}
					>
						<img src={DiceImage} width='240em' alt='Dice' />
					</Grid>
					<Grid item xs={8}>
						<GreetingStack />
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

function GreetingStack() {
	return (
		<Grid
			container
			spacing={4}
			direction='column'
			display='flex'
			justifyContent='space-between'
		>
			<Grid item className='text-greeting'>
				<Greeting />
			</Grid>
			<Grid item rowSpacing={4} className='btn-action'>
				<ActionButton
					address='/login'
					label='Login'
					variant='contained'
				/>
				<ActionButton
					address='/register'
					label='Register'
					variant='outlined'
				/>
			</Grid>
		</Grid>
	);
}

function Greeting() {
	return (
		<Typography
			component='h1'
			variant='h3'
			fontWeight='bold'
			textAlign='center'
		>
			Welcome to Dungeons & Dragons Online!
		</Typography>
	);
}

function ActionButton(props: ActionButtonProps) {
	return (
		<Button
			href={props.address}
			variant={props.variant}
			sx={{ height: '48px', width: '16em' }}
		>
			{props.label}
		</Button>
	);
}
