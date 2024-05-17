"use client";
import SelectTitre from "@/app/ui/select/select-titre";
import SelectName from "../ui/select/select-name";
import SelectEmail from "../ui/select/selectEmail";
import { useState } from "react";
import Image from "next/image";
export default function Page() {
  const [selectedSexe, setSelectedSexe] = useState("");
  return (
    <div className="">
      <p className="text-xl mb-2 text-center">
        Indiquez vos coordonnées afin que l'on puisse vous contacter
      </p>
      <div className="flex flex-col items-center gap-y-1 md:flex-row md:gap-x-2.5">
        <SelectTitre
          selectedSexe={selectedSexe}
          setSelectedSexe={setSelectedSexe}
        />

        <SelectName type="Nom" />
        <SelectName type="Prenom" />
      </div>
      <div>
        <SelectName type="Rue et Numero" />
      </div>
      <div>
        <SelectName type="Complement Adresse" />
      </div>
      <div className="flex flex-row items-center gap-x-1 gap-x-2.5">
        <SelectName type="Code postal" />
        <SelectName type="Lieux" />
      </div>
      <div className="flex flex-row items-center gap-x-1 gap-x-2.5">
        <SelectName type="Pays" />
        <SelectName type="Numero de telephone" />
      </div>
      <div>
        <SelectEmail />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <button className="text-lg text-white text-center p-2 bg-blue-800 hover:bg-blue-600 w-44">
          Envoyer
        </button>
      </div>
    </div>
  );
}
