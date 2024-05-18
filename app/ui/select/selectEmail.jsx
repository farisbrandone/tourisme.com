export default function SelectEmail(props) {
  function listenToInput(e) {
    props.setSelectedEmail(e.target.value);
  }
  return (
    <div className="floating-label mt-7">
      <input
        className="floating-input"
        type="email"
        placeholder=" "
        required
        value={props.selectedEmail}
        onChange={listenToInput}
      />
      <span className="highlight"></span>
      <label>Email*</label>
    </div>
  );
}
