export default function SelectEmail() {
  return (
    <div className="floating-label mt-7">
      <input className="floating-input" type="email" placeholder=" " required />
      <span className="highlight"></span>
      <label>Email</label>
    </div>
  );
}
