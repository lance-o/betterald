/**
 * Gen 3 moves
 */

export const Moves: { [k: string]: ModdedMoveData } = {
	leechlife: {
		inherit: true,
		basePower: 50,
		pp: 20,
	},
	bugbite: {
		inherit: true,
		gen: 3,
		desc: "30% chance to flinch.", // long description
		shortDesc: "30% chance to flinch.", // short description, shows up in /dt
		basePower: 60,
		pp: 20,
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
	},
	silverwind: {
		inherit: true,
		basePower: 60,
		pp: 10,
	},
	knockoff: {
		inherit: true,
		basePower: 30,
	},
	thief: {
		inherit: true,
		basePower: 50,
	},
	pursuit: {
		inherit: true,
		basePower: 50,
	},
	bounce: {
		inherit: true,
		accuracy: 90,
		condition: {
			duration: 2,
			onInvulnerability(target, source, move) {
				if (['gust', 'shoryuken', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceBasePower(basePower, target, source, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
		},
	},
	shockwave: {
		inherit: true,
		basePower: 70,
	},
	thunder: {
		inherit: true,
		accuracy: 75,
	},
	triplekick: {
		inherit: true,
		basePower: 15,
	},
	vitalthrow: {
		inherit: true,
		basePower: 80,
		pp: 15,
	},
	dynamicpunch: {
		inherit: true,
		basePower: 110,
		accuracy: 60,
	},
	willowisp: {
		inherit: true,
		accuracy: 90,
	},
	aircutter: {
		inherit: true,
		accuracy: 100,
	},
	aerialace: {
		inherit: true,
		basePower: 70,
	},
	airslash: {
		inherit: true,
		gen: 3,
		accuracy: 100,
	},
	drillpeck: {
		inherit: true,
		basePower: 85,
	},
	skyattack: {
		inherit: true,
		accuracy: 100,
	},
	lick: {
		inherit: true,
		basePower: 30,
	},
	shadowpunch: {
		inherit: true,
		basePower: 70,
	},
	shadowclaw: {
		inherit: true,
		gen: 3,
		basePower: 80,
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		critRatio: 1,
	},
	bulletseed: {
		inherit: true,
		basePower: 15,
		pp: 25,
	},
	vinewhip: {
		inherit: true,
		basePower: 40,
		pp: 25,
	},
	megadrain: {
		inherit: true,
		basePower: 50,
		pp: 20,
	},
	razorleaf: {
		inherit: true,
		accuracy: 100,
		pp: 25,
	},
	gigadrain: {
		inherit: true,
		basePower: 70,
		pp:15,
	},
	solarbeam: {
		inherit: true,
		basePower: 130,
	},
	stunspore: {
		inherit: true,
		accuracy: 100,
		pp: 20,
	},
	sleeppowder: {
		inherit: true,
		pp: 20,
	},
	cottonspore: {
		inherit: true,
		pp: 20,
	},
	synthesis: {
		inherit: true,
		pp: 10,
	},
	mudslap: {
		inherit: true,
		basePower: 40,
		pp: 20,
	},
	mudshot: {
		inherit: true,
		pp: 20,
	},
	boneclub: {
		inherit: true,
		accuracy: 100,
	},
	earthpower: {
		inherit: true,
		basePower: 95,
		gen: 3,
	},
	magnitude: {
		inherit: true,
		pp: 25,
	},
	iceshard: {
		inherit: true,
		gen: 3,
	},
	wrap: {
		inherit: true,
		accuracy: 100,
		pp: 25,
	},
	furyswipes: {
		inherit: true,
		accuracy: 100,
		basePower: 20,
		pp: 20,
	},
	constrict: {
		inherit: true,
		basePower: 30,
		pp: 30,
		desc: "30% chance to Paralyze target.",
		shortDesc: "30% chance to Paralyze target.",
		secondary: {
			chance: 30,
			status: 'par',
		},
	},
	doublehit: {
		inherit: true,
		gen: 3,
		accuracy: 100,
		pp: 20,
	},
	tackle: {
		inherit: true,
		accuracy: 100,
		basePower: 40,
	},
	cut: {
		inherit: true,
		accuracy: 100,
	},
	falseswipe: {
		inherit: true,
		basePower: 50,
		pp: 35,
	},
	payday: {
		inherit: true,
		basePower: 55,
		pp: 20,
	},
	snore: {
		inherit: true,
		basePower: 60,
		pp: 15,
	},
	slam: {
		inherit: true,
		basePower: 65,
		accuracy: 100,
		pp: 20,
	},
	swift: {
		inherit: true,
		basePower: 70,
		pp: 20,
	},
	dizzypunch: {
		inherit: true,
		pp: 20,
	},
	smellingsalts: {
		inherit: true,
		basePower: 75,
		pp: 20,
	},
	triattack: {
		inherit: true,
		basePower: 75,
		pp: 20,
	},
	extremespeed: {
		inherit: true,
		priority: 1,
		pp: 10,
	},
	takedown: {
		inherit: true,
		accuracy: 100,
	},
	hypervoice: {
		inherit: true,
		basePower: 95,
		pp: 15,
	},
	thrash: {
		inherit: true,
		basePower: 120,
	},
	skullbash: {
		inherit: true,
		basePower: 120,
	},
	absorb: {
		inherit: true,
		pp: 15,
	},
	acid: {
		inherit: true,
		secondary: {
			chance: 10,
			boosts: {
				def: -1,
			},
		},
	},
	ancientpower: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
	},
	assist: {
		inherit: true,
		flags: {metronome: 1, noassist: 1, nosleeptalk: 1},
	},
	astonish: {
		inherit: true,
		basePowerCallback(pokemon, target) {
			if (target.volatiles['minimize']) return 60;
			return 30;
		},
	},
	beatup: {
		inherit: true,
		onModifyMove(move, pokemon) {
			pokemon.addVolatile('beatup');
			move.type = '???';
			move.category = 'Physical';
			move.allies = pokemon.side.pokemon.filter(ally => !ally.fainted && !ally.status);
			move.multihit = move.allies.length;
		},
		condition: {
			duration: 1,
			onModifySpAPriority: -101,
			onModifySpA(atk, pokemon, defender, move) {
				// https://www.smogon.com/forums/posts/8992145/
				// this.add('-activate', pokemon, 'move: Beat Up', '[of] ' + move.allies![0].name);
				this.event.modifier = 1;
				return move.allies!.shift()!.species.baseStats.atk;
			},
			onFoeModifySpDPriority: -101,
			onFoeModifySpD(def, pokemon) {
				this.event.modifier = 1;
				return pokemon.species.baseStats.def;
			},
		},
	},
	bide: {
		inherit: true,
		accuracy: 100,
		priority: 0,
		condition: {
			duration: 3,
			onLockMove: 'bide',
			onStart(pokemon) {
				this.effectState.totalDamage = 0;
				this.add('-start', pokemon, 'move: Bide');
			},
			onDamagePriority: -101,
			onDamage(damage, target, source, move) {
				if (!move || move.effectType !== 'Move' || !source) return;
				this.effectState.totalDamage += damage;
				this.effectState.lastDamageSource = source;
			},
			onBeforeMove(pokemon, target, move) {
				if (this.effectState.duration === 1) {
					this.add('-end', pokemon, 'move: Bide');
					if (!this.effectState.totalDamage) {
						this.add('-fail', pokemon);
						return false;
					}
					target = this.effectState.lastDamageSource;
					if (!target) {
						this.add('-fail', pokemon);
						return false;
					}
					if (!target.isActive) {
						const possibleTarget = this.getRandomTarget(pokemon, this.dex.moves.get('pound'));
						if (!possibleTarget) {
							this.add('-miss', pokemon);
							return false;
						}
						target = possibleTarget;
					}
					const moveData = {
						id: 'bide' as ID,
						name: "Bide",
						accuracy: 100,
						damage: this.effectState.totalDamage * 2,
						category: "Physical",
						priority: 0,
						flags: {contact: 1, protect: 1},
						effectType: 'Move',
						type: 'Normal',
					} as unknown as ActiveMove;
					this.actions.tryMoveHit(target, pokemon, moveData);
					pokemon.removeVolatile('bide');
					return false;
				}
				this.add('-activate', pokemon, 'move: Bide');
			},
			onMoveAborted(pokemon) {
				pokemon.removeVolatile('bide');
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Bide', '[silent]');
			},
		},
	},
	blizzard: {
		inherit: true,
		accuracy: 85,
		onModifyMove() { },
	},
	brickbreak: {
		inherit: true,
		onTryHit(target, source) {
			// will shatter screens through sub, before you hit
			const foe = source.side.foe;
			foe.removeSideCondition('reflect');
			foe.removeSideCondition('lightscreen');
		},
	},
	charge: {
		inherit: true,
		boosts: null,
	},
	conversion: {
		inherit: true,
		onHit(target) {
			const possibleTypes = target.moveSlots.map(moveSlot => {
				const move = this.dex.moves.get(moveSlot.id);
				if (move.id !== 'curse' && !target.hasType(move.type)) {
					return move.type;
				}
				return '';
			}).filter(type => type);
			if (!possibleTypes.length) {
				return false;
			}
			const type = this.sample(possibleTypes);

			if (!target.setType(type)) return false;
			this.add('-start', target, 'typechange', type);
		},
	},
	counter: {
		inherit: true,
		condition: {
			duration: 1,
			noCopy: true,
			onStart(target, source, move) {
				this.effectState.slot = null;
				this.effectState.damage = 0;
			},
			onRedirectTargetPriority: -1,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectState.target || !this.effectState.slot) return;
				return this.getAtSlot(this.effectState.slot);
			},
			onDamagePriority: -101,
			onDamage(damage, target, source, effect) {
				if (
					effect.effectType === 'Move' && !source.isAlly(target) &&
					(effect.category === 'Physical' || effect.id === 'hiddenpower')
				) {
					this.effectState.slot = source.getSlot();
					this.effectState.damage = 2 * damage;
				}
			},
		},
	},
	covet: {
		inherit: true,
		basePower: 50,
		pp: 20,
		flags: {protect: 1, mirror: 1, noassist: 1},
	},
	crunch: {
		inherit: true,
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
	},
	dig: {
		inherit: true,
		basePower: 80,
	},
	disable: {
		inherit: true,
		accuracy: 55,
		flags: {protect: 1, mirror: 1, bypasssub: 1, metronome: 1},
		volatileStatus: 'disable',
		condition: {
			durationCallback() {
				return this.random(2, 6);
			},
			noCopy: true,
			onStart(pokemon) {
				if (!this.queue.willMove(pokemon)) {
					this.effectState.duration++;
				}
				if (!pokemon.lastMove) {
					return false;
				}
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id === pokemon.lastMove.id) {
						if (!moveSlot.pp) {
							return false;
						} else {
							this.add('-start', pokemon, 'Disable', moveSlot.move);
							this.effectState.move = pokemon.lastMove.id;
							return;
						}
					}
				}
				return false;
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Disable');
			},
			onBeforeMove(attacker, defender, move) {
				if (move.id === this.effectState.move) {
					this.add('cant', attacker, 'Disable', move);
					return false;
				}
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id === this.effectState.move) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		},
	},
	dive: {
		inherit: true,
		basePower: 60,
	},
	doomdesire: {
		inherit: true,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			const moveData = {
				name: "Doom Desire",
				basePower: 120,
				category: "Physical",
				flags: {metronome: 1, futuremove: 1},
				willCrit: false,
				type: '???',
			} as unknown as ActiveMove;
			const damage = this.actions.getDamage(source, target, moveData, true);
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				duration: 3,
				move: 'doomdesire',
				source: source,
				moveData: {
					id: 'doomdesire',
					name: "Doom Desire",
					accuracy: 85,
					basePower: 0,
					damage: damage,
					category: "Physical",
					flags: {metronome: 1, futuremove: 1},
					effectType: 'Move',
					type: '???',
				},
			});
			this.add('-start', source, 'Doom Desire');
			return null;
		},
	},
	encore: {
		inherit: true,
		volatileStatus: 'encore',
		condition: {
			durationCallback() {
				return this.random(3, 7);
			},
			onStart(target, source) {
				const moveIndex = target.lastMove ? target.moves.indexOf(target.lastMove.id) : -1;
				if (
					!target.lastMove || target.lastMove.flags['failencore'] ||
					!target.moveSlots[moveIndex] || target.moveSlots[moveIndex].pp <= 0
				) {
					// it failed
					return false;
				}
				this.effectState.move = target.lastMove.id;
				this.add('-start', target, 'Encore');
			},
			onOverrideAction(pokemon) {
				return this.effectState.move;
			},
			onResidualOrder: 10,
			onResidualSubOrder: 14,
			onResidual(target) {
				if (
					target.moves.includes(this.effectState.move) &&
					target.moveSlots[target.moves.indexOf(this.effectState.move)].pp <= 0
				) {
					// early termination if you run out of PP
					target.removeVolatile('encore');
				}
			},
			onEnd(target) {
				this.add('-end', target, 'Encore');
			},
			onDisableMove(pokemon) {
				if (!this.effectState.move || !pokemon.hasMove(this.effectState.move)) {
					return;
				}
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id !== this.effectState.move) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		},
	},
	extrasensory: {
		inherit: true,
		basePowerCallback(pokemon, target) {
			if (target.volatiles['minimize']) return 160;
			return 80;
		},
	},
	fakeout: {
		inherit: true,
		flags: {protect: 1, mirror: 1, metronome: 1},
	},
	feintattack: {
		inherit: true,
		basePower: 70,
		flags: {protect: 1, mirror: 1, metronome: 1},
	},
	flash: {
		inherit: true,
		accuracy: 70,
	},
	fly: {
		inherit: true,
		basePower: 80,
		condition: {
			duration: 2,
			onInvulnerability(target, source, move) {
				if (['gust', 'shoryuken', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceBasePower(basePower, target, source, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
		},
	},
	followme: {
		inherit: true,
		volatileStatus: undefined,
		slotCondition: 'followme',
		condition: {
			duration: 1,
			onStart(target, source, effect) {
				this.add('-singleturn', target, 'move: Follow Me');
				this.effectState.slot = target.getSlot();
			},
			onFoeRedirectTargetPriority: 1,
			onFoeRedirectTarget(target, source, source2, move) {
				const userSlot = this.getAtSlot(this.effectState.slot);
				if (this.validTarget(userSlot, source, move.target)) {
					return userSlot;
				}
			},
		},
	},
	foresight: {
		inherit: true,
		accuracy: 100,
	},
	furycutter: {
		inherit: true,
		basePower: 20,
		onHit(target, source) {
			source.addVolatile('furycutter');
		},
	},
	glare: {
		inherit: true,
		ignoreImmunity: false,
	},
	hiddenpower: {
		inherit: true,
		category: "Physical",
		onModifyMove(move, pokemon) {
			move.type = pokemon.hpType || 'Dark';
			const specialTypes = ['Fire', 'Water', 'Grass', 'Ice', 'Electric', 'Dark', 'Psychic', 'Dragon'];
			move.category = specialTypes.includes(move.type) ? 'Special' : 'Physical';
		},
	},
	highjumpkick: {
		inherit: true,
		basePower: 100,
		onMoveFail(target, source, move) {
			if (target.runImmunity('Fighting')) {
				const damage = this.actions.getDamage(source, target, move, true);
				if (typeof damage !== 'number') throw new Error("HJK recoil failed");
				this.damage(this.clampIntRange(damage / 2, 1, Math.floor(target.maxhp / 2)), source, source, move);
			}
		},
	},
	hypnosis: {
		inherit: true,
		accuracy: 60,
	},
	jumpkick: {
		inherit: true,
		basePower: 70,
		onMoveFail(target, source, move) {
			if (target.runImmunity('Fighting')) {
				const damage = this.actions.getDamage(source, target, move, true);
				if (typeof damage !== 'number') throw new Error("Jump Kick didn't recoil");
				this.damage(this.clampIntRange(damage / 2, 1, Math.floor(target.maxhp / 2)), source, source, move);
			}
		},
	},
	leafblade: {
		inherit: true,
		basePower: 80,
	},
	lockon: {
		inherit: true,
		accuracy: 100,
	},
	memento: {
		inherit: true,
		accuracy: true,
	},
	mindreader: {
		inherit: true,
		accuracy: 100,
	},
	mimic: {
		inherit: true,
		flags: {protect: 1, bypasssub: 1, allyanim: 1, failencore: 1, noassist: 1, failmimic: 1},
	},
	mirrorcoat: {
		inherit: true,
		condition: {
			duration: 1,
			noCopy: true,
			onStart(target, source, move) {
				this.effectState.slot = null;
				this.effectState.damage = 0;
			},
			onRedirectTargetPriority: -1,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectState.target || !this.effectState.slot) return;
				return this.getAtSlot(this.effectState.slot);
			},
			onDamagePriority: -101,
			onDamage(damage, target, source, effect) {
				if (
					effect.effectType === 'Move' && !source.isAlly(target) &&
					effect.category === 'Special' && effect.id !== 'hiddenpower'
				) {
					this.effectState.slot = source.getSlot();
					this.effectState.damage = 2 * damage;
				}
			},
		},
	},
	mirrormove: {
		inherit: true,
		flags: {metronome: 1, failencore: 1, nosleeptalk: 1, noassist: 1},
		onTryHit() { },
		onHit(pokemon) {
			const noMirror = [
				'assist', 'curse', 'doomdesire', 'focuspunch', 'futuresight', 'magiccoat', 'metronome', 'mimic', 'mirrormove', 'naturepower', 'psychup', 'roleplay', 'sketch', 'sleeptalk', 'spikes', 'spitup', 'taunt', 'teeterdance', 'transform',
			];
			const lastAttackedBy = pokemon.getLastAttackedBy();
			if (!lastAttackedBy?.source.lastMove || !lastAttackedBy.move) {
				return false;
			}
			if (noMirror.includes(lastAttackedBy.move) || !lastAttackedBy.source.hasMove(lastAttackedBy.move)) {
				return false;
			}
			this.actions.useMove(lastAttackedBy.move, pokemon);
		},
		target: "self",
	},
	naturepower: {
		inherit: true,
		accuracy: 95,
		onHit(target) {
			this.actions.useMove('swift', target);
		},
	},
	needlearm: {
		inherit: true,
		basePowerCallback(pokemon, target) {
			if (target.volatiles['minimize']) return 120;
			return 60;
		},
	},
	nightmare: {
		inherit: true,
		accuracy: true,
	},
	odorsleuth: {
		inherit: true,
		accuracy: 100,
	},
	outrage: {
		inherit: true,
		basePower: 120,
	},
	overheat: {
		inherit: true,
		accuracy: 100,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
	},
	petaldance: {
		inherit: true,
		basePower: 70,
	},
	recover: {
		inherit: true,
		pp: 20,
	},
	rocksmash: {
		inherit: true,
		basePower: 50,
	},
	sketch: {
		inherit: true,
		flags: {bypasssub: 1, failencore: 1, noassist: 1, failmimic: 1},
	},
	sleeptalk: {
		inherit: true,
		onHit(pokemon) {
			const moves = [];
			for (const moveSlot of pokemon.moveSlots) {
				const moveid = moveSlot.id;
				const pp = moveSlot.pp;
				const move = this.dex.moves.get(moveid);
				if (moveid && !move.flags['nosleeptalk'] && !move.flags['charge']) {
					moves.push({move: moveid, pp: pp});
				}
			}
			if (!moves.length) {
				return false;
			}
			const randomMove = this.sample(moves);
			if (!randomMove.pp) {
				this.add('cant', pokemon, 'nopp', randomMove.move);
				return;
			}
			this.actions.useMove(randomMove.move, pokemon);
		},
	},
	spite: {
		inherit: true,
		onHit(target) {
			const roll = this.random(2, 6);
			if (target.lastMove && target.deductPP(target.lastMove.id, roll)) {
				this.add("-activate", target, 'move: Spite', target.lastMove.id, roll);
				return;
			}
			return false;
		},
	},
	stockpile: {
		inherit: true,
		pp: 10,
		condition: {
			noCopy: true,
			onStart(target) {
				this.effectState.layers = 1;
				this.add('-start', target, 'stockpile' + this.effectState.layers);
			},
			onRestart(target) {
				if (this.effectState.layers >= 3) return false;
				this.effectState.layers++;
				this.add('-start', target, 'stockpile' + this.effectState.layers);
			},
			onEnd(target) {
				this.effectState.layers = 0;
				this.add('-end', target, 'Stockpile');
			},
		},
	},
	struggle: {
		inherit: true,
		flags: {contact: 1, protect: 1, noassist: 1, failencore: 1, failmimic: 1},
		accuracy: 100,
		recoil: [1, 4],
		struggleRecoil: false,
	},
	surf: {
		inherit: true,
		target: "allAdjacentFoes",
	},
	taunt: {
		inherit: true,
		flags: {protect: 1, bypasssub: 1, metronome: 1},
		condition: {
			duration: 2,
			onStart(target) {
				this.add('-start', target, 'move: Taunt');
			},
			onResidualOrder: 10,
			onResidualSubOrder: 15,
			onEnd(target) {
				this.add('-end', target, 'move: Taunt', '[silent]');
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.dex.moves.get(moveSlot.move).category === 'Status') {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMove(attacker, defender, move) {
				if (move.category === 'Status') {
					this.add('cant', attacker, 'move: Taunt', move);
					return false;
				}
			},
		},
	},
	teeterdance: {
		inherit: true,
		flags: {protect: 1, metronome: 1},
	},
	tickle: {
		inherit: true,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1, metronome: 1},
	},
	uproar: {
		inherit: true,
		basePower: 70,
		pp: 15,
		condition: {
			onStart(target) {
				this.add('-start', target, 'Uproar');
				// 2-5 turns
				this.effectState.duration = this.random(2, 6);
			},
			onResidual(target) {
				if (target.volatiles['throatchop']) {
					target.removeVolatile('uproar');
					return;
				}
				if (target.lastMove && target.lastMove.id === 'struggle') {
					// don't lock
					delete target.volatiles['uproar'];
				}
				this.add('-start', target, 'Uproar', '[upkeep]');
			},
			onResidualOrder: 10,
			onResidualSubOrder: 11,
			onEnd(target) {
				this.add('-end', target, 'Uproar');
			},
			onLockMove: 'uproar',
			onAnySetStatus(status, pokemon) {
				if (status.id === 'slp') {
					if (pokemon === this.effectState.target) {
						this.add('-fail', pokemon, 'slp', '[from] Uproar', '[msg]');
					} else {
						this.add('-fail', pokemon, 'slp', '[from] Uproar');
					}
					return null;
				}
			},
		},
	},
	volttackle: {
		inherit: true,
		secondary: null,
	},
	waterfall: {
		inherit: true,
		secondary: null,
	},
	weatherball: {
		inherit: true,
		pp: 15,
		onModifyMove(move) {
			switch (this.field.effectiveWeather()) {
			case 'sunnyday':
				move.type = 'Fire';
				move.category = 'Special';
				break;
			case 'raindance':
				move.type = 'Water';
				move.category = 'Special';
				break;
			case 'sandstorm':
				move.type = 'Rock';
				move.category = 'Special';
				break;
			case 'hail':
				move.type = 'Ice';
				move.category = 'Special';
				break;
			}
			if (this.field.effectiveWeather()) move.basePower *= 2;
		},
	},
	zapcannon: {
		inherit: true,
		basePower: 100,
	},
	crosscut: {
		accuracy: 100, // a number or true for always hits
		basePower: 50, // Not used for Status moves, base power of the move, number
		category: "Physical", // "Physical", "Special", or "Status"
		desc: "10% chance to lower target Defense by 1.", // long description
		shortDesc: "10% chance to lower target Defense by 1.", // short description, shows up in /dt
		name: "Cross Cut",
		gen: 3,
		pp: 25, // unboosted PP count
		priority: 0, // move priority, -6 -> 6
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1}, // Move flags https://github.com/smogon/pokemon-showdown/blob/master/data/moves.js#L1-L27
		onTryMove() {
			this.attrLastMove('[still]'); // For custom animations
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'X-Scissor', target);
		}, // For custom animations
		secondary: {
			boosts: {
				def: -1,
			},
			chance: 10,
		}, // secondary, set to null to not use one. Exact usage varies, check data/moves.js for examples
		target: "normal", // What does this move hit?
		// normal = the targeted foe, self = the user, allySide = your side (eg light screen), foeSide = the foe's side (eg spikes), all = the field (eg raindance). More can be found in data/moves.js
		type: "Bug", // The move's type
		// Other useful things
		critRatio: 1, // The higher the number (above 1) the higher the ratio, lowering it lowers the crit ratio
	},
	crushcutter: {
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		desc: "10% chance to lower target Defense by 1.",
		shortDesc: "10% chance to lower target Defense by 1.",
		name: "Crush Cutter",
		gen: 3,
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'X-Scissor', target);
			this.add('-anim', source, 'X-Scissor', target);
		},
		secondary: {
			boosts: {
				def: -1,
			},
			chance: 10,
		},
		target: "normal",
		type: "Bug",
	},
	strangleweb: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "10% chance to lower target Speed by 1.",
		shortDesc: "10% chance to lower target Speed by 1.",
		name: "Strangle Web",
		gen: 3,
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Sticky Web', target);
		},
		secondary: {
			boosts: {
				spe: -1,
			},
			chance: 10,
		},
		target: "normal",
		type: "Bug",
	},
	shadowpurge: {
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "+1 priority.",
		shortDesc: "+1 priority.",
		name: "Shadow Purge",
		gen: 3,
		pp: 25,
		priority: 1,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Shadow Ball', target);
		},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	blackritual: {
		accuracy: 100,
		basePower: 95,
		category: "Special",
		desc: "10% chance to lower target Sp.Defense by 1.",
		shortDesc: "10% chance to lower target Sp.Defense by 1.",
		name: "Black Ritual",
		gen: 3,
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Grudge', target);
		},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Dark",
	},
	evileye: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers target Attack and Defense by 1.",
		shortDesc: "Lowers target Attack and Defense by 1.",
		name: "Evil Eye",
		pp: 20,
		priority: 0,
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Mean Look', target);
		},
		flags: { protect: 1, reflectable: 1, mirror: 1, allyanim: 1, metronome: 1 },
		boosts: {
			atk: -1,
			def: -1,
		},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	shoryuken: {
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		desc: "Can hit Pokemon during semi-invulnerable turns of Fly and Bounce.",
		shortDesc: "Can hit Pokemon during Fly and Bounce.",
		name: "Shoryuken",
		pp: 15,
		priority: 0,
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Sky Uppercut', target);
		},
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		secondary: null,
		target: "normal",
		type: "Dragon",
	},
	dragonblast: {
		accuracy: 100,
		basePower: 95,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		name: "Dragon Blast",
		gen: 3,
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Dragon Pulse', target);
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
	},
	ebolawrath: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "30% chance to raise user Attack by 1.",
		shortDesc: "30% chance to raise user Attack by 1.",
		name: "Ebola Wrath",
		gen: 3,
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Eternabeam', target);
		},
		secondary: {
			chance: 30,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Dragon",
	},
	slamdunk: {
		accuracy: 100,
		basePower: 150,
		category: "Special",
		desc: "30% chance to raise all stats by 1.",
		shortDesc: "30% chance to raise all stats by 1.",
		name: "Slam Dunk",
		gen: 3,
		pp: 5,
		priority: 0,
		flags: { metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Tackle', target);
		},
		secondary: {
			chance: 30,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Dragon",
	},
	hungerbolt: {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		desc: "30% chance to raise user Defense by 1.",
		shortDesc: "30% chance to raise user Defense by 1.",
		name: "Hunger Bolt",
		gen: 3,
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Zap Cannon', target);
		},
		secondary: {
			chance: 30,
			self: {
				boosts: {
					def: 1,
				},
			},
		},
		target: "normal",
		type: "Electric",
	},
	voltup: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises user Sp.Attack by 1.",
		shortDesc: "Raises user Sp.Attack by 1.",
		name: "Volt Up",
		pp: 40,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Charge', source);
		},
		boosts: {
			spa: 1,
		},
		secondary: null,
		target: "self",
		type: "Electric",
	},
	kickaway: {
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		desc: "Removes target's item.",
		shortDesc: "Removes target's item.",
		name: "Kick Away",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Jump Kick', target);
		},
		onAfterHit(target, source) {
			if (source.hp) {
				const item = target.takeItem();
				if (item) {
					this.add('-enditem', target, item.name, '[from] move: Kick Away', '[of] ' + source);
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	cheapshot: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "30% chance to flinch.",
		shortDesc: "30% chance to flinch.",
		name: "Cheap Shot",
		pp: 30,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Karate Chop', target);
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Fighting",
	},
	hadouken: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		name: "Hadouken",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Aura Sphere', target);
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	superfight: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "100% chance to raise all stats by 1.",
		shortDesc: "100% chance to raise all stats by 1.",
		name: "Superfight",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Superpower', target);
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Fighting",
	},
	superkick: {
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		name: "Super Kick",
		pp: 5,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Mega Kick', target);
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	hellwheel: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "Has 33% recoil.",
		shortDesc: "Has 33% recoil.",
		name: "Hell Wheel",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Submission', target);
		},
		recoil: [33, 100],
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	spitfire: {
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "+1 priority.",
		shortDesc: "+1 priority.",
		name: "Spitfire",
		gen: 3,
		pp: 25,
		priority: 1,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Dragon Rage', target);
		},
		secondary: null,
		target: "normal",
		type: "Fire",
	},
	wildfire: {
		accuracy: 100,
		basePower: 65,
		category: "Special",
		desc: "10% chance to burn the target.",
		shortDesc: "10% chance to burn the target.",
		name: "Wildfire",
		gen: 3,
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Fire Spin', target);
		},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
	},
	heatburst: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "30% chance to burn the target.",
		shortDesc: "30% chance to burn the target.",
		name: "Heat Burst",
		gen: 3,
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Flame Burst', target);
		},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "allAdjacentFoes",
		type: "Fire",
	},
	jetkick: {
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		desc: "User is hurt by 1/8 of damage it would have dealt if it misses.",
		shortDesc: "User is hurt by 1/8 of damage if it misses.",
		name: "Jet Kick",
		gen: 3,
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Blaze Kick', target);
		},
		hasCrashDamage: true,
		onMoveFail(target, source, move) {
			if (target.runImmunity('Fire')) {
				const damage = this.actions.getDamage(source, target, move, true);
				if (typeof damage !== 'number') throw new Error("Jet Kick didn't recoil");
				this.damage(this.clampIntRange(damage / 2, 1, Math.floor(target.maxhp / 2)), source, source, move);
			}
		},
		target: "normal",
		type: "Fire",
	},
	steelmelter: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		desc: "Has 33% recoil.",
		shortDesc: "Has 33% recoil.",
		name: "Steel Melter",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Blast Burn', target);
		},
		recoil: [33, 100],
		secondary: null,
		target: "normal",
		type: "Fire",
	},
	peckingorder: {
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		name: "Pecking Order",
		gen: 3,
		pp: 5,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Drill Peck', target);
		},
		secondary: null,
		target: "normal",
		type: "Flying",
	},
	galeritual: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises user Attack and Speed by 1.",
		shortDesc: "Raises user Attack and Speed by 1.",
		name: "Gale Ritual",
		pp: 20,
		priority: 0,
		flags: { snatch: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Dragon Dance', source);
		},
		boosts: {
			atk: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Flying",
	},
	soulsiphon: {
		accuracy: 100,
		basePower: 70,
		category: "Special",
		desc: "User recovers 50% of the damage dealt.",
		shortDesc: "User recovers 50% of the damage dealt.",
		name: "Soul Siphon",
		gen: 3,
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, heal: 1, metronome: 1 },
		drain: [1, 2],
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Giga Drain', target);
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
	},
	petrify: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Paralyzes the target.",
		shortDesc: "Paralyzes the target.",
		name: "Petrify",
		pp: 20,
		priority: 0,
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Mean Look', target);
		},
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
		status: 'par',
		secondary: null,
		target: "normal",
		type: "Ghost",
		ignoreImmunity: false,
	},
	leafpunch: {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "20% chance to flinch.", // long description
		shortDesc: "20% chance to flinch.", // short description, shows up in /dt
		name: "Leaf Punch",
		gen: 3,
		pp: 15,
		priority: 0,
		flags: { contact:1, protect: 1, mirror: 1, metronome: 1 },
		drain: [1, 2],
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Needle Arm', target);
		},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Grass",
	},
	miracleleaf: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "10% chance to lower target Sp.Defense by 1.",
		shortDesc: "10% chance to lower target Sp.Defense by 1.",
		name: "Miracle Leaf",
		gen: 3,
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Magical Leaf', target);
		},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Grass",
	},
	traumathorn: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "10% chance to Paralyze target.",
		shortDesc: "10% chance to Paralyze target.",
		name: "Trauma Thorn",
		gen: 3,
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Frenzy Plant', target);
		},
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Grass",
	},
	superflower: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "Lowers the user's Attack and Defense by 1.",
		shortDesc: "Lowers the user's Attack and Defense by 1.",
		name: "Trauma Thorn",
		gen: 3,
		pp: 5,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Petal Dance', target);
		},
		self: {
			boosts: {
				atk: -1,
				def: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Grass",
	},
	greensing: {
		accuracy: 55,
		basePower: 0,
		category: "Status",
		name: "Green Sing",
		pp: 15,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Grass Whistle', target);
		},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Grass",
	},
	dustdevil: {
		accuracy: 100,
		basePower: 65,
		category: "Special",
		desc: "30% chance to flinch.", // long description
		shortDesc: "30% chance to flinch.", // short description, shows up in /dt
		name: "Dust devil",
		gen: 3,
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		drain: [1, 2],
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Sand Tomb', target);
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ground",
	},
	applesurge: {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		desc: "30% chance to raise user Defense by 1.",
		shortDesc: "30% chance to raise user Defense by 1.",
		name: "Apple Surge",
		gen: 3,
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Muddy Water', target);
		},
		secondary: {
			chance: 30,
			self: {
				boosts: {
					def: 1,
				},
			},
		},
		target: "normal",
		type: "Ground",
	},
	icicleblitz: {
		accuracy: 90,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return 20 * move.hit;
		},
		category: "Physical",
		name: "Icicle Blitz",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Icicle Spear', target);
		},
		multihit: 3,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Ice",
	},
	frostbite: {
		accuracy: 90,
		basePower: 75,
		category: "Special",
		desc: "40% chance to Freeze target.",
		shortDesc: "40% chance to Freeze target.",
		name: "Frostbite",
		gen: 3,
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Sheer Cold', target);
		},
		secondary: {
			chance: 40,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
	},
	partytime: {
		accuracy: 100,
		basePower: 10,
		category: "Special",
		desc: "100% chance to Burn, Paralyze or Freeze target.",
		shortDesc: "100% chance to Burn, Paralyze or Freeze target.",
		name: "Party Time",
		gen: 3,
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Flatter', source);
		},
		secondary: {
			chance: 100,
			onHit(target, source) {
				const result = this.random(3);
				if (result === 0) {
					target.trySetStatus('brn', source);
				} else if (result === 1) {
					target.trySetStatus('par', source);
				} else {
					target.trySetStatus('frz', source);
				}
			},
		},
		target: "normal",
		type: "Normal",
	},
	grapple: {
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		desc: "100% chance to lower target Speed by 1.",
		shortDesc: "100% chance to lower target Speed by 1.",
		name: "Grapple",
		gen: 3,
		pp: 15,
		priority: 0,
		flags: { contact:1, protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Bind', source);
		},
		secondary: {
			boosts: {
				spe: -1,
			},
			chance: 100,
		},
		target: "normal",
		type: "Normal",
	},
	twerk: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "30% chance to Confuse target.",
		shortDesc: "30% chance to Confuse target.",
		name: "Grapple",
		gen: 3,
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Flail', target);
		},
		secondary: {
			chance: 30,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Normal",
	},
	taxreturn: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "Scatters coins.",
		shortDesc: "Scatters coins.",
		name: "Tax Return",
		gen: 3,
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'G-Max Gold Rush', target);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	timebomb: {
		accuracy: 100,
		basePower: 140,
		category: "Physical",
		desc: "Hits two turns after being used.",
		shortDesc: "Hits two turns after being used.",
		name: "Time Bomb",
		gen: 3,
		pp: 5,
		priority: 0,
		flags: { metronome: 1, futuremove: 1 },
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			const moveData = {
				name: "Time Bomb",
				basePower: 140,
				category: "Physical",
				flags: { metronome: 1, futuremove: 1 },
				willCrit: false,
				type: '???',
			} as unknown as ActiveMove;
			const damage = this.actions.getDamage(source, target, moveData, true);
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				duration: 3,
				move: 'timebomb',
				source: source,
				moveData: {
					id: 'timebomb',
					name: "Time Bomb",
					accuracy: 100,
					basePower: 0,
					damage: damage,
					category: "Physical",
					flags: { metronome: 1, futuremove: 1 },
					effectType: 'Move',
					type: '???',
				},
			});
			this.add('-start', source, 'Future Sight');
			return null;
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Doom Desire', target);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
};
