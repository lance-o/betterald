import { movesUpdate } from "../../mods/betterald2/movesUpdate";

export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen4',
	gen: 3,
	teambuilderConfig: {
		excludeStandardTiers: true,
		customTiers: ['B-OU'],
	},
	init() {
		movesUpdate(this);
	},
};
