type PlayerClassType = "warrior" | "mage" | "taoist";

type GameStateType = {
  currentClass: PlayerClassType;
};

type GameReducerActionType = {
  type: "changed_class";
  payload: { className: PlayerClassType };
};

export type { GameReducerActionType, GameStateType };
