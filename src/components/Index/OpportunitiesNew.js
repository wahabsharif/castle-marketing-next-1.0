import React from "react";

const OpportunitiesNew = () => {
  return (
<>
  <div className="sec-title centered">  <h2>Investment Opportunities</h2><span className="dot">.</span></div>
  <input type="radio" id="all" name="button" defaultChecked="" />
  <input type="radio" id="fish" name="button" />
  <input type="radio" id="birds" name="button" />
  <input type="radio" id="lion" name="button" />
  <label className="tag all" htmlFor="all">
    all
  </label>
  <label className="tag tag1" htmlFor="fish">
    fish
  </label>
  <label className="tag tag2" htmlFor="birds">
    birds
  </label>
  <label className="tag tag3" htmlFor="lion">
    lion
  </label>
  <br />
  <div className="images">
    <img src="https://source.unsplash.com/pF4iSe6NVkI" className="lion" />
    <img src="https://source.unsplash.com/BpH--upRlCs" className="lion" />
    <img src="https://source.unsplash.com/2vbhN2Yjb3A" className="lion" />
    <img src="https://source.unsplash.com/eqXiLNfZDc0" className="birds" />
    <img src="https://source.unsplash.com/7_TTPznVIQI" className="birds" />
    <img src="https://source.unsplash.com/YV593oyMKmo" className="fish" />
    <img src="https://source.unsplash.com/nI3bUW1Xqik" className="fish" />
    <img src="https://source.unsplash.com/qlnoAyck9Zc" className="fish" />
  </div>
</>

  );
};

export default OpportunitiesNew;
