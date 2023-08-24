import { ThemeProvider } from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import { theme } from "../GlobalStyle";

const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
      <NavBar/>
      </ThemeProvider>
    </>
  );
};
export default Root;
