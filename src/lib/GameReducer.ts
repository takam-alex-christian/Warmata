import {
  GameReducerActionType,
  GameStateType,
  PlayerClassType,
} from "@/lib/GameTypes";

import { gameStoreData } from "@/data/stores";

function gameReducer(
  prevState: GameStateType,
  action: GameReducerActionType
): GameStateType {
  switch (action.type) {
    case "changed_class": {
      return { ...prevState, currentClass: action.payload.className };
    }
    case "changed_next_class": {
      const playerClasses: Array<PlayerClassType> = Object.keys(
        gameStoreData
      ).sort() as Array<PlayerClassType>;

      let currentClassIndex = playerClasses.findIndex(
        (eachClass) => eachClass == prevState.currentClass
      ); // certainly not -1

      let nextClassIndex =
        currentClassIndex < playerClasses.length - 1 ? ++currentClassIndex : 0;

      return { ...prevState, currentClass: playerClasses[nextClassIndex] };
    }
    default: {
      return { ...prevState };
    }
  }
}

export default gameReducer;
