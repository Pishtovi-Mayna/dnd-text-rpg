import { Container, Grid } from '@mui/material';
import DiceImage from './dice.png';
import '../util.css';
import './home.css';
import BackgroundImage from './background.png';

export function HomePage() {
	return (
		<Container className='center container' maxWidth={false} sx={{
			backgroundImage: `url(${BackgroundImage})`
		}}>
			<Grid container className='center' maxHeight={'360px'} sx={{
				background: 'white',
				marginX: '16rem',
				width: 'auto'
			}} columnSpacing={16}>
				<Grid item display='flex' justifyContent='center' alignItems='center' xs={4}>
					<img src={DiceImage} width='240px' alt='Dice' />
				</Grid>
				<Grid item xs={8}>
					<Grid item>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Quas, dolorum?
					</Grid>
					<Grid item>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Quas, dolorum?
					</Grid>
					<Grid item>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Quas, dolorum?
					</Grid>
					<Grid item>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Quas, dolorum?
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}
