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

type CardProps = {
	title: string;
	image: string;
};

type CardListProps = {
	items: Array<CardProps>;
};

function Card({ title, image }: CardProps) {
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
				<Button size='small'>Join</Button>
				<Button size='small'>Leave</Button>
			</CardActions>
		</MuiCard>
	);
}

export function CardList({ items }: CardListProps) {
	return (
		<>
			<Stack direction='row' justifyContent='space-between'>
				<Typography variant='h4' fontWeight='500'>
					Ongoing Campaigns
				</Typography>
				<Stack direction='row' spacing={2}>
					<Button variant='outlined' endIcon={<Add />}>Create campaign</Button>
					<Button variant='contained' endIcon={<ArrowRight />}>Join campaign</Button>
				</Stack>
			</Stack>
			<List
				sx={{
					display: 'flex',
					gap: '16px',
					flexDirection: 'row',
				}}
			>
				{items.map(({ title, image }) => {
					return <Card title={title} image={image} />;
				})}
			</List>
		</>
	);
}
