export interface Character {
	name: string;
	maxHP: number;
	class: string;
	race: string;
	imageUrl: string | null;

	Strength: number;
	dexterity: number;
	constitution: number;
	intelligence: number;
	wisdom: number;
	charisma: number;

	modifiedStats: Array<string>;
	spells: Array<string>;
	weapons: Array<string>;
	magicItems: Array<string>;
	regularItems: Array<string>;
}
