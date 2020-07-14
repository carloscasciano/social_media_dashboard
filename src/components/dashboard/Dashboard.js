import React from "react";
import MainCard from "../cards/mainCard/MainCard";
import { MainCardsDashboardContainer } from "./dashboardStyles";
import { ThemeProvider } from "styled-components";

export default function Dashboard(props) {
  return (
    <div>
      <ThemeProvider theme={props.theme}>
        <MainCardsDashboardContainer>
          {props.mainCardsData.map((c) => (
            <MainCard
              key={Math.random()}
              mainCardData = {c}
            />
          ))}
        </MainCardsDashboardContainer>
      </ThemeProvider>
    </div>
  );
}
