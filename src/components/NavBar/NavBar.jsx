import { useContext } from "react";
import { BasicBtn, BasicBtnAccent } from "../Styles/BasicBtn";
import NavStyle from "./Style";
import { Humberger, Youtube, SearchIcon, Dots, User, Michrophone } from "./index";

const NavBar = ({ setExpanded }) => {
  const toggleBtn = () => {
    setExpanded(prev => !prev)
  }
  return (
    <NavStyle>
      <div className="menu">
        <BasicBtn border="true" onClick={toggleBtn} >
          <Humberger />
        </BasicBtn>
        <Youtube />
      </div>
      <div className="search">
        <div className="searchBar">
          <div className="searchInput">
            <label htmlFor="search" className="searchBlock">
              <SearchIcon />
            </label>
            <input type="text" name="search" id="search" placeholder="Rechercher" />
          </div>
          <button className="searchBtn" >
            <SearchIcon />
          </button>
        </div>
        <div className="microBtn">
          <Michrophone />
        </div>
      </div>
      <div className="other">
        <BasicBtn border="true">
          <Dots />
        </BasicBtn>
        <BasicBtnAccent>
          <User /> Login
        </BasicBtnAccent>
      </div>
    </NavStyle>
  );
};

export default NavBar;
