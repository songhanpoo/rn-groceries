import React from "react";

import Wifi from "./Wifi";
import Logo from "./MainLogo";
import Carrot from "./Carrot";
const Icon = props => {
  switch (props.name) {
    case "logo":
      return <Logo {...props} />;
    case "wifi":
      return <Wifi {...props} />;
    case "carrot":
      return <Carrot {...props} />;
    default:
      return;
  }
};

export default Icon;
