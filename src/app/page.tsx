"use client";

import { Warrior } from "./interfaces/interfaces";
import { myContainer } from "./inversify.config";
import { TYPES } from "./types/types";

export default function Home() {

  const ninja = myContainer.get<Warrior>(TYPES.Warrior);


  return (
      <main className="w-full h-screen grid grid-cols-2 place-items-center">
        <h1>HOLA</h1>
        {ninja.fight()}
      </main>
  );
}