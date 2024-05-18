export default function ComplementEtAdresse(props) {
  function listenToInput(e) {
    props.setSelectedComAdresse(e.target.value);
  }
  return (
    <div className="floating-label w-full md:mt-7 ">
      <input
        className="floating-input"
        type="text"
        placeholder=" "
        value={props.selectedComAdresse}
        onChange={listenToInput}
      />
      <span className="highlight"></span>
      <label>{props.type}</label>
    </div>
  );
}
