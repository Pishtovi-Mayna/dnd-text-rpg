import { Add, ArrowRight } from '@mui/icons-material';
import {
	Button,
	Card as MuiCard,
	CardActions,
	CardContent,
	List,
	Typography,
	Stack,
} from '@mui/material';
import Image from './dice.png';

type CardProps = {
	title: string;
	image: string;
	type?: 'campaign' | 'character';
};

type CardListProps = {
	type: 'campaign' | 'character';
};

function Card({ title, image, type }: CardProps) {
	return (
		<MuiCard
			sx={{
				maxWidth: '25em',
			}}
		>
			<CardContent>
				<Typography gutterBottom variant='h5'>
					{title}
				</Typography>
				<img
					src={image}
					style={{
						objectFit: 'contain',
						width: '12em',
						height: 'auto',
						aspectRatio: '1',
					}}
				/>
			</CardContent>
			<CardActions>
				<Button size='small'>
					{type === 'campaign' ? 'Join' : 'Edit'}
				</Button>
				<Button size='small'>
					{type === 'campaign' ? 'Leave' : 'Delete'}
				</Button>
			</CardActions>
		</MuiCard>
	);
}

export function CardList({ type }: CardListProps) {
	const items = [
		{
			title: 'A title',
			image: Image,
		},
		{
			title: 'Another title',
			image: Image,
		},
		{
			title: 'Yet another title',
			image: Image,
		},
	];

	return (
		<>
			<Stack direction='row' justifyContent='space-between' width='100%'>
				<Typography variant='h4' fontWeight='500'>
					{type === 'campaign'
						? 'Ongoing Campaigns'
						: 'Current Characters'}
				</Typography>
				<Stack direction='row' spacing={2}>
					<Button variant='outlined' endIcon={<Add />}>
						Create {type}
					</Button>
					<Button variant='contained' endIcon={<ArrowRight />}>
						{type === 'campaign' ? `Join ${type}` : `Add ${type}`}
					</Button>
				</Stack>
			</Stack>
			<List
				sx={{
					display: 'flex',
					gap: '16px',
					flexDirection: 'row',
					width: '100%',
					marginBottom: '2em',
				}}
			>
				{items.map(({ title, image }) => {
					return <Card title={title} image={image} type={type} />;
				})}
			</List>
		</>
	);
}
