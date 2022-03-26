import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faM, faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav>
      <h1>Waves</h1>
      <button>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
