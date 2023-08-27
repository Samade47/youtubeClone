import { ThemeProvider } from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import { GlobalStyle, theme } from "../GlobalStyle";
import { Outlet } from "react-router-dom";
import { AppShell } from "../components/Styles/AppShell";
import SideBar from "../components/SideBar/Expanded/SideBar";

const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar />
        <AppShell >
          <SideBar />
          <Outlet />
        </AppShell>
      </ThemeProvider>
    </>
  );
};
export default Root;
