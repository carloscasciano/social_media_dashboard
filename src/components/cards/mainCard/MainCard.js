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
import { roundMetrics } from "../../../resources/roundMetrics";

export default function MainCard({ mainCardData }) {
  return (
    <>
      <MainCardContainer>
        <ColorHighlight
          socialColor={getSocialColor(mainCardData.socialMedia)}
        />
        <SocialContainer>
          <img
            src={getSocialImage(mainCardData.socialMedia)}
            alt="social media"
          />
          <p>{mainCardData.userName}</p>
        </SocialContainer>
        <MetricsContainer>
          <h1>{roundMetrics(mainCardData.metricValue)}</h1>
          <p>{mainCardData.metric}</p>
        </MetricsContainer>
        <ComparisonMetricsContainer metricValue={mainCardData.comparisonMetric}>
          <div className="comparison" />
          <p>
            {mainCardData.comparisonMetric < 0
              ? mainCardData.comparisonMetric * -1
              : mainCardData.comparisonMetric}{" "}
            Today
          </p>
        </ComparisonMetricsContainer>
      </MainCardContainer>
    </>
  );
}
