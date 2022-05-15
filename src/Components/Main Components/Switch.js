import "./Switch.css";

const Switch = (props) => {
  const switchHandler = () => {
    props.onSwitch();
  };

  return (
    <div>
      <span>$</span>
      <label className="switch">
        <input type="checkbox" value={true} onChange={switchHandler} />
        <span className="slider round"></span>
      </label>
      <span>€</span>
    </div>
  );
};
export default Switch;
