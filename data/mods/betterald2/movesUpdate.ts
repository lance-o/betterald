// Functionality "inspired" by hoenngaiden... I absolutely hate the way the dex was implemented too, f this
import { ModdedDex } from "../../../sim/dex";

export function movesUpdate(dex: ModdedDex) {
	dex.modData("Moves", "signalbeam").category = "Special";
};
