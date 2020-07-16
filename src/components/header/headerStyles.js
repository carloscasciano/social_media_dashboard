import styled from "styled-components";
const mediaBreakPoint = "600px";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 236px;
  background-color: ${(props) => props.theme.topBGPattern};
  border-radius: 0 0 25px 25px;
  display: flex;
  flex-direction: column;
  transition: all 0.33s ease;

  @media (min-width: ${mediaBreakPoint}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0 0 0;

  h3 {
    padding: 0 0 0 25px;
    color: ${(props) => props.theme.contrastText};
    font-weight: 700;
    font-size: 23px;
  }

  p {
    margin: 10px 0 20px 0;
    padding: 0 0 0 25px;
    color: ${(props) => props.theme.desaturatedText};
    font-weight: 700;
    font-size: 15px;
  }

  .divider {
    align-self: center;
    width: 86%;
    border-top: 1px solid ${(props) => props.theme.desaturatedText};

    @media (min-width: ${mediaBreakPoint}) {
      display: none;
    }
  }

  @media (min-width: ${mediaBreakPoint}) {
    width: 80%;
    margin: 40px 0 0 120px;
  }
`;

export const ThemeCommandContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  p {
    margin: 15px 0 0 0;
    padding: 0 0 0 25px;
    color: ${(props) => props.theme.desaturatedText};
    font-weight: 700;
    font-size: 15px;
  }

  @media (min-width: ${mediaBreakPoint}) {
    margin: 40px 145px 0 0;
    width: 250px;
  }
`;

export const ToggleButton = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.theme.name === "dark" ? "flex-end" : "flex-start"};
  align-items: center;
  width: 48px;
  height: 24px;
  border-radius: 12px;
  margin: 15px 25px 0 0;
  background-color: ${(props) => props.theme.toggle};

  div {
    height: 18px;
    width: 18px;
    border-radius: 9px;
    margin: 3px;
    background-color: ${(props) => props.theme.topBGPattern};
  }
`;
