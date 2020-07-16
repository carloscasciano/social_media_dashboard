 
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        transition: all 0.3s ease;
    }
    html, body, #root {
        height: 100%; 
        
    }
    body {
        background-color: ${props => (props.theme.bg)};
        height: 100%;
        font: 15px 'Inter', sans-serif;
        font-weight: 300;
        
    }
`;