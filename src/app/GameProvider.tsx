import { ReactNode, useReducer } from "react";

import { GameContext, gameInitialState } from "@/lib/GameContext";

import gameReducer from "@/lib/GameReducer";

function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, gameDispatch] = useReducer(gameReducer, gameInitialState);

  return (
    <GameContext.Provider value={{ gameState, gameDispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;
