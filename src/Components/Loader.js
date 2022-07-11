import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styledComponents from "styled-components";

const CenteredDiv = styledComponents.div`
display: flex;
align-items: center;
justify-content: center;
`;
export class Loader extends Component {
  render() {
    return (
      <CenteredDiv>
        <FontAwesomeIcon icon={faSpinner} spin />
      </CenteredDiv>
    );
  }
}

export default Loader;
