import styled from "styled-components";
const mediaBreakPoint = "600px";

export const MainCardsDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -44px 0 0 0;

  @media (min-width: ${mediaBreakPoint}) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    margin: -100px auto 0 auto;
  }
`;

export const SubCardsDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 0 0;


  @media (min-width: ${mediaBreakPoint}) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto 0 auto;
  }
`;

export const SubTitleContainer = styled.div`
    h3 {
    align-self: flex-start;
    margin: 0 0 15px 0;
    padding: 0 0 0 25px;
    color: ${(props) => props.theme.contrastText};
    font-weight: 700;
    font-size: 23px;

    @media (min-width: ${mediaBreakPoint}) {
      margin: 20px 0 30px 120px;
      display: block;
    }
  }
`