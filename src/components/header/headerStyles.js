import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 236px;
  background-color: ${(props) => props.theme.topBGPattern};
  border-radius: 0 0 25px 25px;
  display: flex;
  flex-direction: column;
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
`;

export const ToggleButton = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.theme.name === "dark" ? "flex-start" : "flex-end"};
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
