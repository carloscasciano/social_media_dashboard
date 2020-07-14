import React from "react";
import {
  MainCardContainer,
  ColorHighlight,
  SocialContainer,
  MetricsContainer,
  ComparisonMetricsContainer,
} from "./mainCardStyles";
import { getSocialImage } from "../../../resources/getSocialImage";
import { getSocialColor } from "../../../resources/getSocialColor";

export default function MainCard() {
  return (
    <>
      <MainCardContainer>
        <ColorHighlight socialColor={getSocialColor("facebook")} />
        <SocialContainer>
          <img src={getSocialImage("facebook")} alt="social media" />
          <p>@oioioi</p>
        </SocialContainer>
        <MetricsContainer>
          <h1>1987</h1>
          <p>followers</p>
        </MetricsContainer>
        <ComparisonMetricsContainer metricValue="-4">
          <div className="comparison" />
          <p>99 Today</p>
        </ComparisonMetricsContainer>
      </MainCardContainer>
    </>
  );
}
