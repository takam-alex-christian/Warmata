import { PlayerClassType } from "@/lib/GameTypes";

type StoreType = {
  [key in PlayerClassType]: {
    attributes: Array<string>;
    equipment: Array<string>;
    skills: Array<string>;
  };
};

const gameStoreData: StoreType = {
  warrior: {
    attributes: [],
    equipment: ["axe"],
    skills: [],
  },
  mage: {
    attributes: [],
    equipment: ["dague"],
    skills: [],
  },
  taoist: {
    attributes: [],
    equipment: ["blue"],
    skills: [],
  },
};

export { gameStoreData };
