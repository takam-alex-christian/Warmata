"use client";

import { gameStoreData } from "@/data/stores";

import { ReactNode } from "react";

import { useContext } from "react";

import GameContext from "@/lib/GameContext";

function StoreCard(props: { title: string; children: ReactNode }) {
  return (
    <div className="border border-gray-500 text-black flex flex-col gap-2 rounded-lg p-2">
      <h2 className="text-2xl font-bold">{props.title}</h2>
      <div>{props.children}</div>
    </div>
  );
}

function AttributesView() {
  const { gameState } = useContext(GameContext);

  return (
    <StoreCard title={`Attributes`}>
      {gameStoreData[gameState.currentClass].attributes.map((eachAttribute) => {
        return <p key={eachAttribute}>{eachAttribute}</p>;
      })}
    </StoreCard>
  );
}

function EquipmentView() {
  const { gameState } = useContext(GameContext);
  return (
    <StoreCard title={`Equipments`}>
      {gameStoreData[gameState.currentClass].equipment.map((eachEquipment) => {
        return <p key={eachEquipment}>{eachEquipment}</p>;
      })}
    </StoreCard>
  );
}

function SkillsView() {
  const { gameState } = useContext(GameContext);
  return (
    <StoreCard title={`Skills`}>
      {gameStoreData[gameState.currentClass].skills.map((eachSkill) => {
        return <p key={eachSkill}>{eachSkill}</p>;
      })}
    </StoreCard>
  );
}

function StoresView() {
  const { gameDispatch } = useContext(GameContext);

  function changeClassHandler() {
    gameDispatch({ type: "changed_prev_class" });
  }
  return (
    <div className="flex flex-col gap-2 w-full justify-center">
      <div>
        <button
          className="py-2 px-4 rounded-md bg-black text-white"
          onClick={changeClassHandler}
        >
          Change Class
        </button>
      </div>
      <div className="flex flex-col gap-2 w-full justify-center">
        <AttributesView />
        <EquipmentView />
        <SkillsView />
      </div>
    </div>
  );
}

export default StoresView;
