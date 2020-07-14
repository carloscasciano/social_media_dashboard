import styled from "styled-components"

export const MainCardContainer = styled.div`
    height: 216px;
    width: 325px;
    margin: 0 0 23px 0;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.cardBG};
`

export const ColorHighlight = styled.div`
    height: 4px;
    width: 325px;
    border-radius: 4px 4px 0 0;
    background-color: red;
`

export const SocialContainer = styled.div`
    display: flex;
    align-items: center;

    img{}

    p{
        color: ${(props) => props.theme.desaturatedText}
    }
`