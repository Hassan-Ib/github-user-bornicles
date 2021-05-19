import React from "react";
import loaderImg from "../images/preloader.gif";

const Loader = () => {
  return (
    <div className="loading-img">
      <img src={loaderImg} alt="loader" />
    </div>
  );
};
export default Loader;
