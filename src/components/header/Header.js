import React from "react";
import { ThemeProvider } from "styled-components";
import {
  HeaderContainer,
  TitleContainer,
  ThemeCommandContainer,
  ToggleButton,
} from "./headerStyles";

export default function Header(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <HeaderContainer>
        <TitleContainer>
          <h3>Social Media Dashboard</h3>
          <p>Total Followers: 23,004</p>
          <div className="divider" />
        </TitleContainer>
        <ThemeCommandContainer>
          <p>Dark Mode</p>
          <ToggleButton onClick={()=>props.handleThemeChange()}>
            <div />
          </ToggleButton>
        </ThemeCommandContainer>
      </HeaderContainer>
    </ThemeProvider>
  );
}
