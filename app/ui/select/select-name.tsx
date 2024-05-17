export type myProps = {
  type: string;
};
export default function SelectName(props: myProps) {
  return (
    <div className="floating-label w-full md:mt-7 ">
      <input className="floating-input" type="text" placeholder=" " />
      <span className="highlight"></span>
      <label>{props.type}</label>
    </div>
  );
}
