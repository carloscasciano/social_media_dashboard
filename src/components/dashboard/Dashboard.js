import React from "react";
import { ThemeProvider } from "styled-components";
import {
  MainCardsDashboardContainer,
  SubCardsDashboardContainer,
} from "./dashboardStyles";
import MainCard from "../cards/mainCard/MainCard";
import SubCard from "../cards/subCard/SubCard";

export default function Dashboard(props) {
  return (
    <div>
      <ThemeProvider theme={props.theme}>
        <MainCardsDashboardContainer>
          {props.mainCardsData.map((c) => (
            <MainCard key={Math.random()} mainCardData={c} />
          ))}
        </MainCardsDashboardContainer>
        <SubCardsDashboardContainer>
          <h3>Overview - Today</h3>
          {props.subCardsData.map((c) => (
            <SubCard key={Math.random()} subCardData={c} />
          ))}
        </SubCardsDashboardContainer>
      </ThemeProvider>
    </div>
  );
}
