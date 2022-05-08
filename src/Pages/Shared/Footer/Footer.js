import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Footer = () => {
  return (
    <div className="container navigation-menu py-6 text-center">
      <p>
        <small>
          <FontAwesomeIcon className="text-slate-700" icon={faCopyright} /> 2022 The Motorbike Warehouse. All Rights
          Reserved.
        </small>
      </p>
    </div>
  );
};

export default Footer;
