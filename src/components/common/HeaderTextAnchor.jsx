import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AnchorWrap = styled.div`
  display: block;
  font-size: 16px;
`;

function HeaderTextAnchor({ href }) {
  return (
    <AnchorWrap>
      <Link to={href}>
        {" "}
        <FontAwesomeIcon icon={faHome} />
      </Link>
    </AnchorWrap>
  );
}

export default HeaderTextAnchor;
