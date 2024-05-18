"use client";
import clsx from "clsx";
import { useState } from "react";

export default function SelectTitre(props) {
  // const [selectedSexe, setSelectedSexe] = useState("");
  function listenToInput(e) {
    props.setSelectedSexe(e.target.value);
  }
  return (
    <div className="floating-label md:mt-7 w-full md:w-40">
      <select
        className="floating-select"
        value={props.selectedSexe ? props.selectedSexe : ""} // ...force the select's value to match the state variable...
        onChange={listenToInput}
        required
        minlength="4"
      >
        <option value=""></option>
        <option value="Male">Male</option>
        <option value="Femelle">Femelle</option>
      </select>
      <span className="highlight"></span>
      <label
        className={clsx({
          "-top-5 text-base text-blue-500": props.selectedSexe !== "",
        })}
      >
        Sexe*
      </label>
    </div>
  );
}
