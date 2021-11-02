import { ArtifactsElemObj } from "./ArtifactsElemObj";
import { WeaponElemObj } from "./WeaponElemObj";

export type CharacterElemObj = {
    name: string,
    elementC: string,
    img: string,
    id: number;
    history: string;
    role: string;
    constelacion: string;
    city: string;
    trailer: string;
    artifacts: ArtifactsElemObj[]
    weapon: WeaponElemObj;
  }