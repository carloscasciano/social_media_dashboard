import React from "react";
import {
  SubCardContainer,
  MetricNameContainer,
  SocialLogoContainer,
  MetricValueContainer,
  MetricComparisonContainer,
} from "./subCardStyles";
import { getSocialImage } from "../../../resources/getSocialImage";
import { roundMetrics } from "../../../resources/roundMetrics";

export default function SubCard({ subCardData }) {
  return (
    <SubCardContainer>
      <MetricNameContainer>
        <p>{subCardData.metric}</p>
      </MetricNameContainer>
      <SocialLogoContainer>
        <img src={getSocialImage(subCardData.socialMedia)} alt="social media" />
      </SocialLogoContainer>
      <MetricValueContainer>
        <p>{roundMetrics(subCardData.metricValue)}</p>
      </MetricValueContainer>
      <MetricComparisonContainer metricValue={subCardData.comparisonMetric}>
        <div className="metricHolder">
          <div className="comparison" />
          <p>
            {subCardData.comparisonMetric < 0
              ? subCardData.comparisonMetric * -1
              : subCardData.comparisonMetric}
            %
          </p>
        </div>
      </MetricComparisonContainer>
    </SubCardContainer>
  );
}
