import { ThemeProvider } from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import { GlobalStyle, theme } from "../GlobalStyle";

const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
      <NavBar/>
      </ThemeProvider>
    </>
  );
};
export default Root;
