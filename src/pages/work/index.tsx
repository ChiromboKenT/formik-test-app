import React from "react";
import Showcase from "../../features/showcase/Showcase";

const Work = () => {
  return (
    <div className="w3-container" style={{ padding: "128px 16px" }} id="work">
      <h3 className="w3-center">OUR WORK</h3>
      <p className="w3-center w3-large">What we've done for people</p>
      <Showcase />
    </div>
  );
};

export default Work;
