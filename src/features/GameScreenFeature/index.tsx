"use client";

import { useContext } from "react";

import GameContext from "@/lib/GameContext";

import CharacterView from "../CharacterView";

function GameScreenFeature() {
  const { gameState, gameDispatch } = useContext(GameContext);

  function handleClassChange() {
    //
    gameDispatch({ type: "changed_next_class" });
  }

  return (
    <div
      className={`${
        gameState.currentClass == "taoist" ? "bg-[#C3C8D5]" : "bg-white"
      } h-full py-10`}
    >
      <div className="w-4/5 mx-auto">
        <CharacterView />
      </div>
    </div>
  );
}

export default GameScreenFeature;
