"use client";

import { useContext } from "react";

import GameContext from "@/lib/GameContext";

import CharacterView from "../CharacterView";
import StoresView from "../StoresView";

function GameScreenFeature() {
  const { gameState, gameDispatch } = useContext(GameContext);

  return (
    <div
      className={`${
        gameState.currentClass == "taoist" ? "bg-[#C3C8D5]" : "bg-white"
      } h-full py-10`}
    >
      <div className="w-4/5 mx-auto flex flex-row gap-40">
        <CharacterView />
        <StoresView />
      </div>
    </div>
  );
}

export default GameScreenFeature;
