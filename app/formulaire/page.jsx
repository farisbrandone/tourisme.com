"use client";
import SelectTitre from "@/app/ui/select/select-titre";
import SelectName from "../ui/select/select-name";
import SelectEmail from "../ui/select/selectEmail";
import PaymentPart from "../ui/select/payment-part";
import { useState } from "react";
import DataDays from "../ui/select/data-days";
import SelectPrenom from "../ui/select/select-prenom";
import SelectRueEtNumero from "../ui/select/select-rue-numero";
import ComplementEtAdresse from "../ui/select/select-comple-adress";
import SelectCodePostal from "../ui/select/select-code-postal";
import SelectLieux from "../ui/select/salect-lieux";
import SelectPays from "../ui/select/select-pays";
import SelectTel from "../ui/select/select-tel";
import { isValidatedCardNumber } from "../lib/utils";
const validator = require("validator");
export default function Page() {
  const [selectedSexe, setSelectedSexe] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedPrenom, setSelectedPrenom] = useState("");
  const [selectedRueEtNumero, setSelectedRueEtNumero] = useState("");
  const [selectedComAdresse, setSelectedComAdresse] = useState("");
  const [selectedCodePostal, setSelectedCodePostal] = useState("");
  const [selectedLieux, setSelectedLieux] = useState("");
  const [selectedPays, setSelectedPays] = useState("");
  const [selectedTel, setSelectedTel] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedCardName, setSelectedCardName] = useState("");
  const [selectedCardNumber, setSelectedCardNumber] = useState("");
  const [selectedMonthExp, setSelectedMonthExp] = useState("");
  const [selectedYearsExp, setSelectedYearsExp] = useState("");
  const [selectedCvv, setSelectedCvv] = useState("");
  const [selectedDays, setSelectedDays] = useState({
    daysStart: "",
    daysEnd: "",
  });
  function activedisable(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    if (
      a &&
      b.length > 2 &&
      c.length > 2 &&
      d.length > 1 &&
      e.length > 1 &&
      f.length > 1 &&
      g.length > 2 &&
      h.length > 5 &&
      validator(i) &&
      j.length > 2 &&
      isValidatedCardNumber(k) &&
      l &&
      m &&
      n.length === 3 &&
      o
    ) {
      return true;
    }
    return false;
  }
  const handleSubmit = () => {
    const result = {
      sexe: selectedSexe,
      nom: selectedName,
      prenom: selectedPrenom,
      rue_et_numero: selectedRueEtNumero,
      adresse_complementaire: selectedComAdresse,
      code_postal: selectedCodePostal,
      lieux: selectedLieux,
      pays: selectedPays,
      telephone: selectedTel,
      email: selectedEmail,
      date_de_darrive: selectedDays.daysStart,
      deta_de_depart: selectedDays.daysEnd,
      nom_sur_carte_de_credit: selectedCardName,
      numero_sur_carte_de_credit: selectedCardNumber,
      mois_dexpiration_de_la_carte: selectedMonthExp,
      année_dexpiration_de_la_carte: selectedYearsExp,
      numero_cvv_de_la_carte: selectedCvv,
    };
    return result;
  };
  return (
    <div>
      <p className="text-xl mb-2 text-center">
        Indiquez vos coordonnées afin que l'on puisse vous contacter
      </p>
      <div className="flex flex-col items-center gap-y-1 md:flex-row md:gap-x-2.5">
        <SelectTitre
          selectedSexe={selectedSexe}
          setSelectedSexe={setSelectedSexe}
        />

        <SelectName
          type="Nom*"
          selectedName={selectedName}
          setSelectedName={setSelectedName}
        />
        <SelectPrenom
          type="Prenom*"
          selectedPrenom={selectedPrenom}
          setSelectedPrenom={setSelectedPrenom}
        />
      </div>
      <div>
        <SelectRueEtNumero
          type="Rue et Numero*"
          selectedRueEtNumero={selectedRueEtNumero}
          setSelectedRueEtNumero={setSelectedRueEtNumero}
        />
      </div>
      <div>
        <ComplementEtAdresse
          type="Complement Adresse"
          selectedComAdresse={selectedComAdresse}
          setSelectedComAdresse={setSelectedComAdresse}
        />
      </div>
      <div className="flex flex-row items-center gap-x-1 gap-x-2.5">
        <SelectCodePostal
          type="Code postal*"
          selectedCodePostal={selectedCodePostal}
          setSelectedCodePostal={setSelectedCodePostal}
        />
        <SelectLieux
          type="Lieux*"
          selectedLieux={selectedLieux}
          setSelectedLieux={setSelectedLieux}
        />
      </div>
      <div className="flex flex-row items-center gap-x-1 gap-x-2.5">
        <SelectPays
          type="Pays*"
          selectedPays={selectedPays}
          setSelectedPays={setSelectedPays}
        />
        <SelectTel
          type="Numero de telephone*"
          selectedTel={selectedTel}
          setSelectedTel={setSelectedTel}
        />
      </div>
      <div>
        <SelectEmail
          selectedEmail={selectedEmail}
          setSelectedEmail={setSelectedEmail}
        />
      </div>
      <div>
        <DataDays
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
        />
      </div>
      <div>
        <PaymentPart
          selectedCardName={selectedCardName}
          setSelectedCardName={setSelectedCardName}
          selectedCardNumber={selectedCardNumber}
          setSelectedCardCardNumber={setSelectedCardNumber}
          selectedMonthExp={selectedMonthExp}
          setSelectedMonthExp={setSelectedMonthExp}
          selectedYearsExp={selectedYearsExp}
          setSelectedYearsExp={setSelectedYearsExp}
          selectedCvv={selectedCvv}
          setSelectedCvv={setSelectedCvv}
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <button
          className="text-lg text-white text-center p-2 bg-blue-800 hover:bg-blue-600 w-44 disabled:bg-slate-300 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={
            activedisable(
              selectedSexe,
              selectedName,
              selectedPrenom,
              selectedRueEtNumero,
              selectedCodePostal,
              selectedLieux,
              selectedPays,
              selectedTel,
              selectedEmail,
              selectedCardName,
              selectedCardNumber,
              selectedMonthExp,
              selectedYearsExp,
              selectedCvv,
              selectedDays
            ) &&
            selectedDays.daysStart &&
            selectedDays.daysEnd
          }
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}
