import Image from "next/image";

export default function PaymentPart(props) {
  function listenCardName(e) {
    props.setSelectedCardName(e.target.value);
  }
  function listenCardNumber(e) {
    props.setSelectedCardNumber(e.target.value);
  }
  function listenMonthExp(e) {
    props.setSelectedMonthExp(e.target.value);
  }
  function listenYearsExp(e) {
    props.setSelectedYearsExp(e.target.value);
  }
  function listenCvv(e) {
    props.setSelectedCvv(e.target.value);
  }
  return (
    <div className="flex flex-col w-full md:mt-7 mb-5">
      <hr className="border-8 border-gray-900 mb-6" />
      <p className="mb-5 text-xl"> Effectuer le payement</p>
      <div className="flex flex-col">
        <p>Carte de credit accepté</p>
        <div className="flex flex-rows items-center">
          <Image
            src="/image/icons8-american-express-250.png"
            width={50}
            height={50}
            className=""
            alt="Logo"
          />
          <Image
            src="/image/icons8-discover-card-48.png"
            width={50}
            height={50}
            className=""
            alt="Logo"
          />
          <Image
            src="/image/icons8-mastercard-48.png"
            width={50}
            height={50}
            className=""
            alt="Logo"
          />
          <Image
            src="/image/icons8-visa-50.png"
            width={50}
            height={50}
            className=""
            alt="Logo"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <p>Nom ecrit sur la carte</p>
        <input
          type="text"
          id="cname"
          name="cardname"
          placeholder="John More Doe"
          className="floating-input"
          required
          minlength="2"
          value={props.selectedCardName}
          onChange={listenCardName}
        />
      </div>
      <div className="flex flex-col">
        <p>Numero de la carte de credit</p>
        <input
          type="text"
          id="ccnum"
          name="cardnumber"
          placeholder="1111-2222-3333-4444"
          className="floating-input"
          required
          minlength="19"
          maxlength="19"
          value={props.selectedCardNumber}
          onChange={listenCardNumber}
        />
      </div>
      <div className="flex flex-col">
        <p>Mois d'expiration</p>
        <input
          type="text"
          id="expmonth"
          name="expmonth"
          placeholder="Septembre"
          className="floating-input"
          required
          minlength="3"
          value={props.selectedMonthExp}
          onChange={listenMonthExp}
        />
      </div>

      <div className="flex flex-col">
        <p>Année d'expiration</p>
        <input
          type="text"
          id="expyear"
          name="expyear"
          placeholder="2024"
          className="floating-input"
          required
          minlength="4"
          maxlength="4"
          value={props.selectedYearsExp}
          onChange={listenYearsExp}
        />
      </div>
      <div className="flex flex-col">
        <p>CVV</p>
        <input
          type="text"
          id="cvv"
          name="cvv"
          placeholder="352"
          className="floating-input"
          required
          minlength="3"
          maxlength="3"
          value={props.selectedCvv}
          onChange={listenCvv}
        />
      </div>
    </div>
  );
}
