import "./Slider.css";

const Slider = (props) => {
  const handleChange = (event) => {
    props.onSlide(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <div className="slidecontainer">
        <label className="sliderLabel">
          Select number of users:
          <input
            type="range"
            min="1"
            max="500"
            onChange={handleChange}
            value={props.currentValue}
          ></input>
          <div>{props.currentValue}</div>
        </label>
      </div>
    </div>
  );
};
export default Slider;
