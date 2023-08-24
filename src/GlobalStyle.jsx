import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --bg-color:#0F0F0F;
        --text-color:#FFFFFF;
        --text-color-shade:#FEFEFE;
    }
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        background-color:var(--bg-color);
        color: var(--text-color);
    }
`;

const theme = {
    bgColor:"#0F0F0F",
    textColor:"#ffffff",
    textColorShade:"#FEFEFE"
}

export {GlobalStyle,theme}