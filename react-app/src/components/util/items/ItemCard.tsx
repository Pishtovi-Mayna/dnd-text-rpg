import {
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Stack,
	Typography,
} from '@mui/material';
import cardImg from './abjuration.png';
import './item-card.css';

type ItemCardProps = {
	title: string;
	description: string;
};

type CharacteristicProps = {
	name: string;
	type: string;
};

const Characteristic = ({ name, type }: CharacteristicProps) => {
	return (
		<Stack direction='row' className='characteristic'>
			<Typography variant='h6'>{name}</Typography>
			<Typography variant='h6' fontWeight='400'>{type}</Typography>
		</Stack>
	);
};

export function ItemCard(props: ItemCardProps) {
	return (
		<Card
			sx={{
				maxWidth: '18rem',
			}}
		>
			<CardHeader title={props.title} />
			<CardMedia component='img' image={cardImg} />
			<CardContent>
				<Typography variant='body2'>{props.description}</Typography>
				<Stack className='characteristics'>
					<Characteristic name='Level' type='Cantrip' />
					<Characteristic name='Casting Time' type='1 Action' />
					<Characteristic name='Range/Area' type='60 ft' />
					<Characteristic name='Duration' type='Instantaneous' />
					<Characteristic name='School' type='Conjuration' />
				</Stack>
			</CardContent>
		</Card>
	);
}
