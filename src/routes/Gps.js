import React from "react";
import styled from "styled-components";
import Header from "../components/layout/neighborhood/Header";
import Body from "../components/layout/neighborhood/Body";
import { MobileContainer } from "../components/common/MobileContainer";
import { MobileInner } from "../components/common/MobileInner";
import { useLocation } from "react-router-dom";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Gps = () => {
  return (
    <MobileContainer>
      <MobileInner>
        <StyledWrapper>
          <Header />
          <Body />
        </StyledWrapper>
      </MobileInner>
    </MobileContainer>
  );
};

export default Gps;
