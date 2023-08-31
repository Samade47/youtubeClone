import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        scrollbar-width: auto;
        scrollbar-color: #636363 transparent;
    }
    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
    width: 7px;
    }

    *::-webkit-scrollbar-track {
    background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #636363;
        border-radius: 10px;
        border: 0px none #ffffff;
    }

    body{
        min-width: 400px;
        display: flex;
        flex-direction: column;
        background-color:${props => props.theme.bgColor};
        color: ${props => props.theme.textColor};
    }
`;

const darkTheme = true;
const theme = {
    // color System
    bgColor: darkTheme ? "#0F0F0F" : "#ffffff",
    bgColorShade: darkTheme ? "##222222" : "#FEFEFE",
    textColor: darkTheme ? "#ffffff" : "#0F0F0F",
    textColorShade: darkTheme ? "#FEFEFE" : "##222222",
    borderColor: darkTheme ? "#ffffff31" : "#b8b8b859",
    tagBackground: "#3D3D3D",
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