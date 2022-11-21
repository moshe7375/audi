const modelSlider = () => {
  return (
    <div className="model-slider">
      <div className="slider-header">
        <p>Models</p>
      </div>
      <div className="display">
        <div>
          <img
            className="cars-img"
            src={require("../cars/A3.webp")}
            alt="Car"
          />
          <p>A3</p>
        </div>

        <div>
          <img
            className="cars-img"
            src={require("../cars/A-4.webp")}
            alt="Car"
          />
          <p>A4</p>
        </div>

        <div>
          <img className="cars-img" src={require("../cars/A6.png")} alt="Car" />
          <p>A6</p>
        </div>

        <div>
          <img
            className="cars-img"
            src={require("../cars/A-7.webp")}
            alt="Car"
          />
          <p>A7</p>
        </div>

        <div>
          <img
            className="cars-img"
            src={require("../cars/A-8.webp")}
            alt="Car"
          />
          <p>A8</p>
        </div>

        <div>
          <img
            className="cars-img"
            src={require("../cars/Q-5.webp")}
            alt="Car"
          />
          <p>Q5</p>
        </div>

        <div>
          <img
            className="cars-img"
            src={require("../cars/Q-7.webp")}
            alt="Car"
          />
          <p>Q7</p>
        </div>

        <div>
          <img
            className="cars-img"
            src={require("../cars/Q-8.webp")}
            alt="Car"
          />
          <p>Q8</p>
        </div>

        <div>
          <img
            className="cars-img"
            src={require("../cars/TT.webp")}
            alt="Car"
          />
          <p>TT</p>
        </div>
      </div>
    </div>
  );
};

export default modelSlider;

// { require('//cars/A-3.webp') }
