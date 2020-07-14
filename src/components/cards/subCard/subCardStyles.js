import styled from "styled-components";
import { colors } from "../../../styles/themes";
const mediaBreakPoint = "600px";

export const SubCardContainer = styled.div`
  height: 125px;
  width: 325px;
  margin: 0 0 23px 0;
  border-radius: 4px;
  background-color: ${(props) => props.theme.cardBG};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  :hover{
    background-color: ${(props) => props.theme.cardHoverEffect};
  }

  @media (min-width: ${mediaBreakPoint}) {
    width: 255px;
    margin: 0 30px 30px 0;
  }
`;

export const MetricNameContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  p {
    padding: 30px 0 0 20px;
    color: ${(props) => props.theme.desaturatedText};
    font-weight: 700;
  }
`;

export const SocialLogoContainer = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  justify-content: flex-end;

  img {
    height: 20px;
    width: 20px;
    margin: 30px 32px 0 0;
  }
`;

export const MetricValueContainer = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  align-items: flex-end;

  p {
    color: ${(props) => props.theme.contrastText};
    font-weight: 700;
    font-size: 34px;
    padding: 0 0 20px 20px;
  }
`;

export const MetricComparisonContainer = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  .metricHolder{
      display: flex;
      padding: 0 30px 30px 0 ;
  }

  .comparison {
    background-image: ${(props) =>
      props.metricValue > 0
        ? 'url("./images/icon-up.svg")'
        : 'url("./images/icon-down.svg")'};
    height: 10px;
    width: 10px;
    background-repeat: no-repeat;
    margin: 7px 0 0 0;
  }
  p {
    color: ${(props) =>
      props.metricValue > 0 ? colors.limeGreen : colors.brightRed};
    font-weight: 700;
    font-size: 14px;
  }
`;



