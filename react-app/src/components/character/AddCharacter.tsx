import {
	Autocomplete,
	Button,
	Grid,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import './add-character.css';
import { useEffect, useState } from 'react';

type InputProps = {
	changePage: (newPage: number, params: string[]) => void;
};

type ItemProps = InputProps & {
	inputs: JSX.Element[];
	page: number;
};

export function AddCharacter() {
	const [page, setPage] = useState(3);

	const changePage = (newPage: number, params: string[]) => {
		setPage(newPage);
	};

	return (
		<Stack className='input-stack'>
			<Typography variant='h2' fontWeight='bold'>
				Create Character
			</Typography>
			{page === 1 && <InfoInput changePage={changePage} />}
			{page === 2 && <StatsInput changePage={setPage} />}
			{page === 3 && <ModifiedStatsInput changePage={setPage} />}
			{page === 4 && <SpellsInput changePage={setPage} />}
		</Stack>
	);
}

const classes: Array<string> = ['Hi', 'Wassup', 'Hello', 'Why tho?'];
const races: Array<string> = ['Hi', 'Wassup', 'Hello', 'Why tho?'];

function InfoInput({ changePage }: InputProps) {
	const inputs = [
		<TextField
			className='input-field'
			label='Character Name'
			name='name'
		/>,
		<TextField
			className='input-field'
			type='number'
			label='Maximum HP'
			name='maxHp'
		/>,
		<Autocomplete
			className='input-field'
			options={classes}
			renderInput={(params) => (
				<TextField {...params} label='Class' name='class' />
			)}
		/>,
		<Autocomplete
			className='input-field'
			options={races}
			renderInput={(params) => (
				<TextField {...params} label='Race' name='race' />
			)}
		/>,
		<TextField
			className='full-width'
			multiline
			label='Character Description'
			name='description'
		/>,
	];
	return <ItemInput inputs={inputs} page={1} changePage={changePage} />;
}

function StatsInput({ changePage }: InputProps) {
	const inputs = [
		<TextField
			className='input-field'
			type='number'
			label='Strength'
			name='strength'
		/>,
		<TextField
			className='input-field'
			type='number'
			label='Dexterity'
			name='dexterity'
		/>,
		<TextField
			className='input-field'
			type='number'
			label='Constituion'
			name='constituion'
		/>,
		<TextField
			className='input-field'
			type='number'
			label='Intelligence'
			name='intelligence'
		/>,
		<TextField
			className='input-field'
			type='number'
			label='Wisdom'
			name='wisdom'
		/>,
		<TextField
			className='input-field'
			type='number'
			label='Charisma'
			name='charisma'
		/>,
	];
	return <ItemInput inputs={inputs} page={2} changePage={changePage} />;
}

function ItemInput({ inputs, page, changePage }: ItemProps) {
	return (
		<Grid container spacing={4} width='36em'>
			{inputs.map((input) => (
				<Grid item xs={6}>
					{input}
				</Grid>
			))}
			{page > 1 ? (
				<Grid item xs={4}>
					<Button
						variant='contained'
						onClick={() => changePage(page - 1, [])}
					>
						Previous step
					</Button>
				</Grid>
			) : (
				<></>
			)}
			{page > 1 ? <Grid item xs={5} /> : <Grid item xs={9} />}
			{page > 0 ? (
				<Grid item xs={3}>
					<Button
						variant='contained'
						onClick={() => changePage(page + 1, [])}
					>
						Next step
					</Button>
				</Grid>
			) : (
				<></>
			)}
		</Grid>
	);
}

function ModifiedStatsInput({ changePage }: InputProps) {
	interface Stats {
		name: string;
		value: number;
	}

	//TODO: get actual stats
	const [stats, setStats] = useState<Array<Stats>>([
		{ name: 'Hi', value: 24 },
	]);
	const [modifiedStats, setModifiedStats] = useState<Stats[]>([]);
	const [isValid, setIsValid] = useState(true);
	const [inputs, setInputs] = useState<JSX.Element[]>([]);

	useEffect(() => {
		const el = modifiedStats[modifiedStats.length - 1];
		if (el) {
			setInputs([
				...inputs,
				<TextField
					className='input-field'
					disabled
					value={el.name}
					name={el.name}
				/>,
				<TextField
					className='input-field'
					type='number'
					name={`${el.name}-value`}
					onChange={(e) =>
						(el.value = Number.parseInt(e.currentTarget.value))
					}
				/>,
			]);
		}
	}, [modifiedStats]);

	return (
		<>
			<Autocomplete
				className='full-width'
				options={stats.map((el) => el.name)}
				renderInput={(params) => (
					<TextField
						{...params}
						label='Modified stats'
						name='modifiedStats'
						error={!isValid}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								const name = (
									e.currentTarget.lastChild
										?.firstChild as HTMLInputElement
								).value;
								if (stats.find((el) => el.name === name)) {
									if (
										modifiedStats.find(
											(el) => el.name === name
										)
									) {
										setIsValid(false);
									} else {
										setModifiedStats([
											...modifiedStats,
											//TODO: get corrent value from server
											{ name: name, value: 0 },
										]);
										setIsValid(true);
									}
								} else {
									setIsValid(false);
								}
							}
						}}
					/>
				)}
			/>
			<ItemInput inputs={inputs} page={3} changePage={changePage} />
		</>
	);
}

function SpellsInput({ changePage }: InputProps) {
	interface Spell {
		name: string;
		level: number;
	}

	const [isValid, setIsValid] = useState(true);
	const [inputs, setInputs] = useState<JSX.Element[]>([]);
	const allSpells: Array<string> = ['Spell 1', 'Spell 2'];
	const [spells, setSpells] = useState<Array<Spell>>([]);

	useEffect(() => {
		const el = spells[spells.length - 1];
		if (el) {
			setInputs([
				...inputs,
				<TextField
					className='input-field'
					disabled
					value={el.name}
					name={el.name}
				/>,
				<TextField
					className='input-field'
					type='number'
					name={`${el.name}-level`}
					onChange={(e) =>
						(el.level = Number.parseInt(e.currentTarget.value))
					}
				/>,
			]);
		}
	}, [spells]);

	return (
		<>
			<Autocomplete
				className='full-width'
				options={allSpells}
				renderInput={(params) => (
					<TextField
						{...params}
						label='Select spell'
						name='spell'
						error={!isValid}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								const name = (
									e.currentTarget.lastChild
										?.firstChild as HTMLInputElement
								).value;
								if (allSpells.find((el) => el === name)) {
									if (spells.find((el) => el.name === name)) {
										setIsValid(false);
									} else {
										setSpells([
											...spells,
											//TODO: get corrent level from server
											{ name: name, level: 1 },
										]);
										setIsValid(true);
									}
								} else {
									setIsValid(false);
								}
							}
						}}
					/>
				)}
			/>
			<ItemInput inputs={inputs} page={4} changePage={changePage} />
		</>
	);
}

function ItemsInput({ changePage }: InputProps) {
	interface Item {
		name: string;
		quantity: number;
	}

	const [isValid, setIsValid] = useState(true);
	const [inputs, setInputs] = useState<JSX.Element[]>([]);
	const [items, setItems] = useState<Array<Item>>([]);

	useEffect(() => {
		const el = items[items.length - 1];
		if (el) {
			setInputs([
				...inputs,
				<TextField
					className='input-field'
					disabled
					value={el.name}
					name={el.name}
				/>,
				<TextField
					className='input-field'
					type='number'
					name={`${el.name}-level`}
					onChange={(e) =>
						(el.quantity = Number.parseInt(e.currentTarget.value))
					}
				/>,
			]);
		}
	}, [items]);

	return (
		<>
			<TextField
				label='Add Item'
				name='add-item'
				error={!isValid}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						const name = (
							e.currentTarget.lastChild
								?.firstChild as HTMLInputElement
						).value;
						if (items.find((el) => el.name === name)) {
							setIsValid(false);
						} else {
							setIsValid(true);
						}
					}
				}}
			/>
			<ItemInput inputs={inputs} page={4} changePage={changePage} />
		</>
	);
}
