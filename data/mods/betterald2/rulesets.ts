export const Rulesets: {[k: string]: ModdedFormatData} = {
	standard: {
		effectType: 'ValidatorRule',
		name: 'Standard',
		desc: "The standard ruleset for all offical Smogon singles tiers (Ubers, OU, etc.)",
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'Switch Priority Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Items Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	betterald: {
		effectType: 'ValidatorRule',
		name: 'Betterald Ruleset',
		desc: "Works pls",
		ruleset: [
			'Obtainable', '+Unobtainable', '+Past', 'Sketch Post-Gen 7 Moves', 'Team Preview', 'Nickname Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			if (species.tier != 'Betterald OU') {
				if (this.ruleTable.has(`+pokemon:${species.id}`)) return;
				return [`${set.name || set.species} does not exist in the National Dex.`];
			}
		},
	},
};
