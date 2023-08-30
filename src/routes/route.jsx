import { ThemeProvider } from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import { GlobalStyle, theme } from "../GlobalStyle";
import { Outlet } from "react-router-dom";
import { AppShell } from "../components/Styles/AppShell";
import SideBar from "../components/SideBar/Expanded/SideBar";
import { useState } from "react";
import ToggleState from "../App/context";

const Root = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToggleState.Provider value={expanded} >
          <GlobalStyle />
          <NavBar setExpanded={setExpanded} />
          <AppShell >
            <SideBar />
            <Outlet />
          </AppShell>
        </ToggleState.Provider>
      </ThemeProvider>
    </>
  );
};
export default Root;
