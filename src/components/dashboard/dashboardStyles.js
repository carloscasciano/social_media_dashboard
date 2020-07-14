import styled from "styled-components";
const mediaBreakPoint = "600px"

export const MainCardsDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -44px 0 0 0;

  @media (min-width: ${mediaBreakPoint}) {
    flex-direction: row;
  }
`;

export const SubCardsDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 0 0;

  h3 {
    align-self: flex-start;
    margin: 0 0 15px 0;
    padding: 0 0 0 25px;
    color: ${(props) => props.theme.contrastText};
    font-weight: 700;
    font-size: 23px;
  }
  
`