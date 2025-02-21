type PlayerClassType = "warrior" | "mage" | "taoist";

type GameStateType = {
  currentClass: PlayerClassType;
};

type GameReducerActionType =
  | {
      type: "changed_class";
      payload: { className: PlayerClassType };
    }
  | {
      type: "changed_next_class";
    }
  | {
      type: "changed_prev_class";
    };

export type { GameReducerActionType, GameStateType, PlayerClassType };
