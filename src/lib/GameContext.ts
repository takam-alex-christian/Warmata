import { GameStateType, GameReducerActionType } from "@/lib/GameTypes";
import { createContext, Dispatch } from "react";

const gameInitialState: GameStateType = {
  currentClass: "warrior",
};

const GameContext = createContext<{
  gameState: GameStateType;
  gameDispatch: Dispatch<GameReducerActionType>;
}>({ gameState: gameInitialState, gameDispatch: () => {} });

export default GameContext;

export { GameContext, gameInitialState };
