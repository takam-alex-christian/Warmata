import { GameStateType, GameReducerActionType } from "@/lib/GameTypes";
import { createContext, Dispatch } from "react";

const gameInitialState: GameStateType = {
  currentClass: "warrior",
};

const GameContext = createContext<{
  GameState: GameStateType;
  GameDispatch: Dispatch<GameReducerActionType>;
}>({ GameState: gameInitialState, GameDispatch: () => {} });

export default GameContext;
