export default function SelectPrenom(props) {
  function listenToInput(e) {
    props.setSelectedPrenom(e.target.value);
  }
  return (
    <div className="floating-label w-full md:mt-7 ">
      <input
        className="floating-input"
        type="text"
        placeholder=" "
        required
        minLength={1}
        value={props.selectedPrenom}
        onChange={listenToInput}
      />
      <span className="highlight"></span>
      <label>{props.type}</label>
    </div>
  );
}
