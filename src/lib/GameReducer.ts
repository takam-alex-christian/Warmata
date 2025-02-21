import { GameReducerActionType, GameStateType } from "@/lib/GameTypes";

function gameReducer(
  prevState: GameStateType,
  action: GameReducerActionType
): GameStateType {
  switch (action.type) {
    case "changed_class": {
      return { ...prevState, currentClass: action.payload.className };
    }
    default: {
      return { ...prevState };
    }
  }
}

export default gameReducer;
