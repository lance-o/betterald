export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen4',
	gen: 3,
	teambuilderConfig: {
		excludeStandardTiers: true,
		customTiers: ['B-OU'],
	},
	init() {
		for (const i in this.data.Moves) {
			this.modData('Moves', i).category = this.modData('Moves', i).category;
		}
	},
};
