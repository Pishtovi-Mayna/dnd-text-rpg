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
	type?: 'campaign' | 'character';
};

type CardListProps = {
	type: 'campaign' | 'character';
	items: Array<CardProps>;
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
					{type === 'campaign' ? 'Join' : 'Create'}
				</Button>
				<Button size='small'>
					{type === 'campaign' ? 'Leave' : 'Delete'}
				</Button>
			</CardActions>
		</MuiCard>
	);
}

export function CardList({ items, type }: CardListProps) {
	return (
		<>
			<Stack direction='row' justifyContent='space-between'>
				<Typography variant='h4' fontWeight='500'>
					Ongoing Campaigns
				</Typography>
				<Stack direction='row' spacing={2}>
					<Button variant='outlined' endIcon={<Add />}>
						Create {type}
					</Button>
					<Button variant='contained' endIcon={<ArrowRight />}>
						Join {type}
					</Button>
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
					return <Card title={title} image={image} type={type} />;
				})}
			</List>
		</>
	);
}
