import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        min-width: 400px;
        display: flex;
        flex-direction: column;
        background-color:${props => theme.bgColor};
        color: ${props => props.theme.textColor};
    }
`;

const theme = {
    // color System
    bgColor: "#0F0F0F",
    bgColorShade: "##222222",
    textColor: "#ffffff",
    textColorShade: "#FEFEFE",
    borderColor: "#ffffff31",
    primaryColor: "#df0e0e",

    // Space System
    spacerXs: 8,
    spacerSm: 16,
    spacerMd: 24,
    spacerLg: 32,
    spacerXl: 40,
    spacer2xl: 48,
    spacer3xl: 56,
    spacer4xl: 64,
    spacer5xl: 72,

}

export { GlobalStyle, theme }