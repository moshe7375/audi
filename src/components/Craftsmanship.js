const Craftsmanship = () => {
  return (
    <div className="craftsmanship">
      {/* <div className="content"> */}

      <div>
        <img src={require("../cars/car.jpg")} alt="" />
        <div className="content">
          <p>
            Progress, <br /> craftsmanship, high <br /> performance. The e‑tron®
            GT.
          </p>
          <button className="btn solid">Learn more</button>
        </div>
      </div>

      <div>
        <img src={require("../cars/car2.jpg")} alt="" />
        <div className="content">
          <p>Electric. Among other wonderful things.</p>
          <p className="small">
            Introducing the Audi Q8 e-tron family—the next step in progressive
            luxury.
          </p>
          <p className="tiny">European model shown.</p>
          <button className="btn clear">Explore Audi Q8 e-tron family</button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Craftsmanship;
