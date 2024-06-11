import { CardList } from '../CardDisplay';
import './home.css';

export function HomePage() {
	return (
		<>
			<main
				style={{
					margin: '6em 2em',
				}}
			>
				{/* <ItemCard
				title='Acid Splash'
				description="
					You hurl a bubble of acid. Choose one or two creatures you
					can see within range. If you choose two, they must be within
					5 feet of each other. A target must succeed on a Dexterity
					saving throw or take 1d6 acid damage. This spell's damage
					increases by 1d6 when you reach 5th level (2d6), 11th level
					(3d6), and 17th level (4d6)."
			/> */}
				<CardList type='campaign' />
				<CardList type='character' />
			</main>
		</>
	);
}
