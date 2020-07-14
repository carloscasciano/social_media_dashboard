import styled from "styled-components";
import { colors } from "../../../styles/themes";
const mediaBreakPoint = "600px";

export const MainCardContainer = styled.div`
  height: 216px;
  width: 325px;
  margin: 0 0 23px 0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.cardBG};

  :hover{
    background-color: ${(props) => props.theme.cardHoverEffect};
  }

  @media (min-width: ${mediaBreakPoint}) {
    width: 255px;
    margin: 0 30px 0 0;
  }
`;

export const ColorHighlight = styled.div`
  height: 4px;
  width: 325px;
  border-radius: 4px 4px 0 0;
  background-color: ${(props) => props.socialColor};

  @media (min-width: ${mediaBreakPoint}) {
    width: 255px;
  }
`;

export const SocialContainer = styled.div`
  margin: 28px 0 0 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;

  img {
    align-self: center;
    height: 20px;
    width: 20px;
    margin: 0 4px 0 0;
  }

  p {
    align-self: center;
    padding: 0 0 2px 0;
    margin: 0 0 0 4px;
    color: ${(props) => props.theme.desaturatedText};
    font-weight: 700;
  }
`;
export const MetricsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin: 15px 0 0 0;

  h1 {
    font-weight: 700;
    color: ${(props) => props.theme.contrastText};
    font-size: 58px;
    letter-spacing: -1px;
    padding: 0;
  }

  p {
    color: ${(props) => props.theme.desaturatedText};
    text-transform: uppercase;
    letter-spacing: 6px;
  }
`;

export const ComparisonMetricsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  margin: 15px 0 0 0;

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
