"use client";

import GameContext from "@/lib/GameContext";
import { useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import { gameStoreData } from "@/data/stores";

import Image, { StaticImageData } from "next/image";

import mageImage from "@/assets/mage.jpg";
import warriorImage from "@/assets/warrior.jpg";
import taoistImage from "@/assets/taoist.jpg";
import { PlayerClassType } from "@/lib/GameTypes";

function CharacterView() {
  const imageSrcLib: { [k in PlayerClassType]: StaticImageData } = {
    warrior: warriorImage,
    mage: mageImage,
    taoist: taoistImage,
  };

  const { gameState, gameDispatch } = useContext(GameContext);

  function nextClassHandler() {
    gameDispatch({ type: "changed_next_class" });
  }

  function prevClassHandler() {
    gameDispatch({ type: "changed_prev_class" });
  }
  return (
    <div className="relative h-full  w-[500px]">
      <AnimatePresence>
        <div
          key="class_name_container"
          className="relative h-10 w-full text-center"
        >
          {Object.keys(gameStoreData)
            .toSorted()
            .map((eachClass) => {
              return (
                <div key={eachClass}>
                  {gameState.currentClass == eachClass && (
                    <motion.p
                      className="absolute w-full py-2 text-2xl font-bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={eachClass}
                    >
                      {eachClass}
                    </motion.p>
                  )}
                </div>
              );
            })}
        </div>
        <div key={"class_character"} className="flex flex-row gap-2">
          <div
            key="left_button"
            className="flex flex-col items-center justify-center"
          >
            <button
              className="w-10 h-10 rounded-md bg-black text-white"
              onClick={prevClassHandler}
            >
              {"<"}
            </button>
          </div>
          <div key="center" className="w-[400px] min-h-[590px]">
            {Object.keys(gameStoreData)
              .toSorted()
              .map((eachClass) => {
                return (
                  <div key={eachClass}>
                    {gameState.currentClass == eachClass && (
                      <motion.div
                        className="absolute flex-grow py-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          src={imageSrcLib[gameState.currentClass]}
                          width={400}
                          alt={`${gameState.currentClass} Character`}
                        />
                      </motion.div>
                    )}
                  </div>
                );
              })}
          </div>
          <div
            key="right_button"
            className="flex flex-col items-center justify-center"
          >
            <button
              className="w-10 h-10 rounded-md bg-black text-white"
              onClick={nextClassHandler}
            >
              {">"}
            </button>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default CharacterView;
