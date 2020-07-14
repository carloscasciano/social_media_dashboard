import React from "react";
import { ThemeProvider } from "styled-components";
import {
  MainCardsDashboardContainer,
  SubCardsDashboardContainer,
  SubTitleContainer,
} from "./dashboardStyles";
import MainCard from "../cards/mainCard/MainCard";
import SubCard from "../cards/subCard/SubCard";

export default function Dashboard(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <MainCardsDashboardContainer>
        {props.mainCardsData.map((card) => (
          <MainCard key={Math.random()} mainCardData={card} />
        ))}
      </MainCardsDashboardContainer>
      
      <SubTitleContainer>
        <h3>Overview - Today</h3>
      </SubTitleContainer>

      <SubCardsDashboardContainer>
        {props.subCardsData.map((card) => (
          <SubCard key={Math.random()} subCardData={card} />
        ))}
      </SubCardsDashboardContainer>
    </ThemeProvider>
  );
}
