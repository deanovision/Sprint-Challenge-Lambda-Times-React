import React from "react";
import {
  HeaderContainer,
  DateContainer,
  TempContainer
} from "./StyledComponents";
const Header = () => {
  return (
    <HeaderContainer>
      <DateContainer>SMARCH 32, 2018</DateContainer>
      <h1>Lambda Times</h1>
      <TempContainer>98°</TempContainer>
    </HeaderContainer>
  );
};

export default Header;
