import {
	Autocomplete,
	Button,
	Grid,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import './add-character.css';
import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import axios from 'axios';

interface Stat {
	name: string;
	value: number;
}

interface Spell {
	name: string;
	level: number;
}

interface Item {
	name: string;
	quantity: number;
}

interface Character {
	name?: string;
	maxHp?: number;
	class?: string;
	race?: string;
	description?: string;

	stats?: Stat[];
	modifiedStats?: Stat[];
	spells?: Spell[];
	items?: Item[];
}
console.log('wut');

type InputProps = {
	changePage: (newPage: number, params: string[]) => void;
	character?: Character;
	setCharacter: Dispatch<SetStateAction<Character>>;
};

type ItemProps = InputProps & {
	inputs: JSX.Element[];
	page: number;
};

const CharacterContext = createContext<Character>({});

export function AddCharacter() {
	const [page, setPage] = useState(1);
	const [character, setCharacter] = useState<Character>({});

	const changePage = (newPage: number) => {
		setPage(newPage);
	};

	useEffect(() => console.log(character), [character]);

	return (
		<CharacterContext.Provider value={character}>
			<Stack className='input-stack'>
				<Typography variant='h2' fontWeight='bold'>
					Create Character
				</Typography>
				{page === 1 && (
					<InfoInput
						changePage={changePage}
						character={character}
						setCharacter={setCharacter}
					/>
				)}
				{page === 2 && (
					<StatsInput
						changePage={setPage}
						character={character}
						setCharacter={setCharacter}
					/>
				)}
				{page === 3 && (
					<ModifiedStatsInput
						changePage={setPage}
						character={character}
						setCharacter={setCharacter}
					/>
				)}
				{page === 4 && (
					<SpellsInput
						changePage={setPage}
						character={character}
						setCharacter={setCharacter}
					/>
				)}
				{page === 5 && (
					<ItemsInput
						changePage={setPage}
						character={character}
						setCharacter={setCharacter}
					/>
				)}
			</Stack>
		</CharacterContext.Provider>
	);
}

const classes: string[] = ['Hi', 'Wassup', 'Hello', 'Why tho?'];
const races: string[] = ['Hi', 'Wassup', 'Hello', 'Why tho?'];

function InfoInput({ changePage, character, setCharacter }: InputProps) {
	const inputs = [
		<TextField
			className='input-field'
			label='Character Name'
			name='name'
			onChange={(e) => {
				const changed = { ...character };
				changed.name = e.currentTarget.value;
				setCharacter(changed);
			}}
		/>,
		<TextField
			className='input-field'
			type='number'
			label='Maximum HP'
			name='maxHp'
			onChange={(e) => {
				const changed = { ...character };
				changed.maxHp = Number.parseInt(e.currentTarget.value);
				setCharacter(changed);
			}}
		/>,
		<Autocomplete
			className='input-field'
			options={classes}
			onChange={(e) => {
				const _class = e.currentTarget.textContent;
				if (_class) {
					const changed = { ...character };
					changed.class = _class;
					setCharacter(changed);
				}
			}}
			renderInput={(params) => (
				<TextField {...params} label='Class' name='class' />
			)}
		/>,
		<Autocomplete
			className='input-field'
			options={races}
			onChange={(e) => {
				const race = e.currentTarget.textContent;
				if (race) {
					const changed = { ...character };
					changed.race = race;
					setCharacter(changed);
				}
			}}
			renderInput={(params) => (
				<TextField {...params} label='Race' name='race' />
			)}
		/>,
		<TextField
			className='full-width'
			multiline
			label='Character Description'
			name='description'
			onChange={(e) => {
				const changed = { ...character };
				changed.description = e.currentTarget.value;
				setCharacter(changed);
			}}
		/>,
	];
	return (
		<ItemInput
			character={character}
			setCharacter={setCharacter}
			inputs={inputs}
			page={1}
			changePage={changePage}
		/>
	);
}

function StatsInput({ changePage, character, setCharacter }: InputProps) {
	const inputs = [
		<TextField
			className='input-field'
			type='number'
			label='Strength'
			name='strength'
			onChange={(e) => {
				const strength: Stat = {
					name: 'strength',
					value: Number.parseInt(e.currentTarget.value),
				};
				const newStats: Stat[] = character?.stats
					? character.stats
					: [];
				if (character?.stats) {
					const oldStat = newStats.find(
						(el) => el.name === strength.name
					);
					if (oldStat) {
						newStats.splice(newStats.indexOf(oldStat), 1, strength);
					} else {
						newStats.push(strength);
					}
				} else {
					newStats.push(strength);
				}
				const changed: Character = {
					name: character?.name,
					maxHp: character?.maxHp,
					class: character?.class,
					race: character?.race,
					description: character?.description,

					stats: newStats,
					items: character?.items,
					spells: character?.spells,
				};
				setCharacter(changed);
			}}
		/>,
		<TextField
			className='input-field'
			type='number'
			label='Dexterity'
			name='dexterity'
			onChange={(e) => {
				const dexterity: Stat = {
					name: 'dexterity',
					value: Number.parseInt(e.currentTarget.value),
				};
				const newStats: Stat[] = character?.stats
					? character.stats
					: [];
				if (character?.stats) {
					const oldStat = newStats.find(
						(el) => el.name === dexterity.name
					);
					if (oldStat) {
						newStats.splice(
							newStats.indexOf(oldStat),
							1,
							dexterity
						);
					} else {
						newStats.push(dexterity);
					}
				}
				const changed: Character = {
					name: character?.name,
					maxHp: character?.maxHp,
					class: character?.class,
					race: character?.race,
					description: character?.description,

					stats: newStats,
					items: character?.items,
					spells: character?.spells,
				};
				setCharacter(changed);
			}}
		/>,
		<TextField
			className='input-field'
			type='number'
			label='Constituion'
			name='constituion'
			onChange={(e) => {
				const constituion: Stat = {
					name: 'constituion',
					value: Number.parseInt(e.currentTarget.value),
				};
				const newStats: Stat[] = character?.stats
					? character.stats
					: [];
				if (character?.stats) {
					const oldStat = newStats.find(
						(el) => el.name === constituion.name
					);
					if (oldStat) {
						newStats.splice(
							newStats.indexOf(oldStat),
							1,
							constituion
						);
					} else {
						newStats.push(constituion);
					}
				}
				const changed: Character = {
					name: character?.name,
					maxHp: character?.maxHp,
					class: character?.class,
					race: character?.race,
					description: character?.description,

					stats: newStats,
					items: character?.items,
					spells: character?.spells,
				};
				setCharacter(changed);
			}}
		/>,
		<TextField
			className='input-field'
			type='number'
			label='Intelligence'
			name='intelligence'
			onChange={(e) => {
				const intelligence: Stat = {
					name: 'intelligence',
					value: Number.parseInt(e.currentTarget.value),
				};
				const newStats: Stat[] = character?.stats
					? character.stats
					: [];
				if (character?.stats) {
					const oldStat = newStats.find(
						(el) => el.name === intelligence.name
					);
					if (oldStat) {
						newStats.splice(
							newStats.indexOf(oldStat),
							1,
							intelligence
						);
					} else {
						newStats.push(intelligence);
					}
				}
				const changed: Character = {
					name: character?.name,
					maxHp: character?.maxHp,
					class: character?.class,
					race: character?.race,
					description: character?.description,

					stats: newStats,
					items: character?.items,
					spells: character?.spells,
				};
				setCharacter(changed);
			}}
		/>,
		<TextField
			className='input-field'
			type='number'
			label='Wisdom'
			name='wisdom'
			onChange={(e) => {
				const wisdom: Stat = {
					name: 'wisdom',
					value: Number.parseInt(e.currentTarget.value),
				};
				const newStats: Stat[] = character?.stats
					? character.stats
					: [];
				if (character?.stats) {
					const oldStat = newStats.find(
						(el) => el.name === wisdom.name
					);
					if (oldStat) {
						newStats.splice(newStats.indexOf(oldStat), 1, wisdom);
					} else {
						newStats.push(wisdom);
					}
				}
				const changed: Character = {
					name: character?.name,
					maxHp: character?.maxHp,
					class: character?.class,
					race: character?.race,
					description: character?.description,

					stats: newStats,
					items: character?.items,
					spells: character?.spells,
				};
				setCharacter(changed);
			}}
		/>,
		<TextField
			className='input-field'
			type='number'
			label='Charisma'
			name='charisma'
			onChange={(e) => {
				const charisma: Stat = {
					name: 'charisma',
					value: Number.parseInt(e.currentTarget.value),
				};
				const newStats: Stat[] = character?.stats
					? character.stats
					: [];
				if (character?.stats) {
					const oldStat = newStats.find(
						(el) => el.name === charisma.name
					);
					if (oldStat) {
						newStats.splice(newStats.indexOf(oldStat), 1, charisma);
					} else {
						newStats.push(charisma);
					}
				}
				const changed: Character = {
					name: character?.name,
					maxHp: character?.maxHp,
					class: character?.class,
					race: character?.race,
					description: character?.description,

					stats: newStats,
					items: character?.items,
					spells: character?.spells,
				};
				setCharacter(changed);
			}}
		/>,
	];
	return (
		<ItemInput
			character={character}
			setCharacter={setCharacter}
			inputs={inputs}
			page={2}
			changePage={changePage}
		/>
	);
}

function ItemInput({ inputs, page, changePage }: ItemProps) {
	const character = useContext(CharacterContext);

	function handleAddCharacter() {
		axios
			.post('http://localhost:4000/characters', { character })
			.then((res) => {
				console.log(character);
				console.log(res);
				console.log(res.data);
			});
	}

	return (
		<Grid container spacing={4} width='36em'>
			{inputs.map((input) => (
				<Grid item xs={6}>
					{input}
				</Grid>
			))}
			{page > 1 && page < 5 && (
				<Grid item xs={4}>
					<Button
						variant='contained'
						onClick={() => changePage(page - 1, [])}
					>
						Previous step
					</Button>
				</Grid>
			)}
			{page > 1 ? <Grid item xs={5} /> : <Grid item xs={9} />}
			{page < 5 && (
				<Grid item xs={3}>
					<Button
						variant='contained'
						onClick={() => changePage(page + 1, [])}
					>
						Next step
					</Button>
				</Grid>
			)}
			{page === 5 && (
				<>
					<Grid item xs={8} />
					<Grid item xs={4}>
						<Button
							variant='contained'
							onClick={() => handleAddCharacter()}
						>
							Add Character
						</Button>
					</Grid>
				</>
			)}
		</Grid>
	);
}

function ModifiedStatsInput({
	changePage,
	character,
	setCharacter,
}: InputProps) {
	//TODO: get actual stats
	const [stats, setStats] = useState<Stat[]>([{ name: 'Hi', value: 24 }]);
	const [modifiedStats, setModifiedStats] = useState<Stat[]>([]);
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
					onLoad={(e) => {
						const changed = { ...character };
						const name = el.name;
						changed.stats?.push({ name: name, value: 0 });
					}}
				/>,
				<TextField
					className='input-field'
					type='number'
					name={`${el.name}-value`}
					onChange={(e) => {
						const value = Number.parseInt(e.currentTarget.value);
						const index = modifiedStats.indexOf(el);
						el.value = value;
						const statsTemp = [...modifiedStats];
						statsTemp.splice(index, 1, el);
						const characterTemp = { ...character };
						characterTemp.modifiedStats = statsTemp;
						setCharacter(characterTemp);
					}}
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
								if (name) {
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
							}
						}}
					/>
				)}
			/>
			<ItemInput
				character={character}
				setCharacter={setCharacter}
				inputs={inputs}
				page={3}
				changePage={changePage}
			/>
		</>
	);
}

function SpellsInput({ changePage, character, setCharacter }: InputProps) {
	const [isValid, setIsValid] = useState(true);
	const [inputs, setInputs] = useState<JSX.Element[]>([]);
	const allSpells: string[] = ['Something', 'Other'];
	const [spells, setSpells] = useState<Spell[]>([]);

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
					onChange={(e) => {
						const changed = { ...character };
						const index = spells.indexOf(el);
						el.level = Number.parseInt(e.currentTarget.value);
						const spellsTemp = [...spells];
						spellsTemp.splice(index, 1, el);
						changed.spells = spellsTemp;
						setCharacter(changed);
					}}
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
								if (name) {
									if (allSpells.find((el) => el === name)) {
										if (
											spells.find(
												(el) => el.name === name
											)
										) {
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
							}
						}}
					/>
				)}
			/>
			<ItemInput
				character={character}
				setCharacter={setCharacter}
				inputs={inputs}
				page={4}
				changePage={changePage}
			/>
		</>
	);
}

function ItemsInput({ changePage, character, setCharacter }: InputProps) {
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
					onChange={(e) => {
						const index = items.indexOf(el);
						el.quantity = Number.parseInt(e.currentTarget.value);
						const itemsTemp = [...items];
						items.splice(index, 1, el);
						const changed = { ...character };
						changed.items = itemsTemp;
						setCharacter(changed);
					}}
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
							if (name) {
								const toBeAdded = {
									name: name,
									quantity: 0,
								};
								setItems([...items, toBeAdded]);
								setIsValid(true);
							}
						}
					}
				}}
			/>
			<ItemInput
				character={character}
				setCharacter={setCharacter}
				inputs={inputs}
				page={5}
				changePage={changePage}
			/>
		</>
	);
}
