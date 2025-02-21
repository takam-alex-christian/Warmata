"use client";

import { useContext } from "react";

import GameContext from "@/lib/GameContext";

import CharacterView from "../CharacterView";
import StoresView from "../StoresView";

function GameScreenFeature() {
  const { gameState } = useContext(GameContext);

  return (
    <div
      className={`${
        gameState.currentClass == "taoist" ? "bg-[#C3C8D5]" : "bg-white"
      } relative h-full pt-10 flex flex-col`}
    >
      <div className="mb-20">
        <h1 className="text-4xl font-bold text-center">
          The Return Of WARMATA
        </h1>
        <h3 className="text-xl font-medium text-center">
          Warrior - Mage - Taoist
        </h3>
      </div>

      <div className="w-4/5 mx-auto flex flex-row gap-40">
        <CharacterView />
        <StoresView />
      </div>
      <div className="h-full pb-10 flex flex-col">
        <p className="m-auto ">Develoed with ❤️ by Alex Christian Takam.</p>
      </div>
    </div>
  );
}

export default GameScreenFeature;
