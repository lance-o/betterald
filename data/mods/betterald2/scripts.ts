import { movesUpdate } from "../../mods/betterald2/movesUpdate";

export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen4',
	gen: 3,
	teambuilderConfig: {
		excludeStandardTiers: true,
		customTiers: ['B-OU'],
	},
	init() {
		const specialTypes = ['Bug', 'Fighting', 'Flying', 'Ground', 'Ghost', 'Normal', 'Poison', 'Rock', 'Steel'];
		let newCategory = '';
		for (const i in this.data.Moves) {
			if (!this.data.Moves[i]) console.log(i);
			if (this.data.Moves[i].category === 'Status') continue;
			newCategory = specialTypes.includes(this.data.Moves[i].type) ? 'Special' : 'Physical';
			if (newCategory !== this.data.Moves[i].category) {
				this.modData('Moves', i).category = newCategory;
			}
		}
		movesUpdate(this);
	},
};
