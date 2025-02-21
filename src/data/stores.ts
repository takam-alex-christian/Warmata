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
    attributes: ["Strength", "Invincibility"],
    equipment: ["Sword", "Shield"],
    skills: ["Swimming", "Double jump"],
  },
  mage: {
    attributes: ["Agility", "Calm"],
    equipment: ["Pendant", "Cape"],
    skills: ["Flight", "Mind Control"],
  },
  taoist: {
    attributes: ["Invisibility", "Agility"],
    equipment: ["Ying", "Yang"],
    skills: ["Flight", "light speed run"],
  },
};

export { gameStoreData };
