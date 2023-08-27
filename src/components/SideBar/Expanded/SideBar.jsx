import React from "react";
import { MenuDevider, MenuItem, MenuSection } from "../../Styles/MenuItems";
import { SideBarStyle } from "./SideBarStyle";
import { Gaming, Home, Shorts, Videos, Star, Library, History, Fire, MusicNote, Add, YoutubeIcon, Settings, FeedBack, Help, Flag } from "..";

const SideBar = () => {
  return (
    <SideBarStyle>
      <MenuSection>
        <MenuItem>
          <Home />
          <span>Acceil</span>
        </MenuItem>
        <MenuItem>
          <Shorts />
          <span>shorts</span>
        </MenuItem>
        <MenuItem>
          <Videos />
          <span>abonnements</span>
        </MenuItem>
      </MenuSection>
      <MenuDevider />
      <MenuSection>
        <MenuItem>
          <Library />
          <span>Library</span>
        </MenuItem>
        <MenuItem>
          <History />
          <span>history</span>
        </MenuItem>
      </MenuSection>

      <MenuDevider />

      <MenuSection>
        <h2 className="sectionTitle">Explore</h2>
        <MenuItem>
          <Fire />
          <span>trending</span>
        </MenuItem>
        <MenuItem>
          <MusicNote />
          <span>music</span>
        </MenuItem>
        <MenuItem>
          <Gaming />
          <span>gaming</span>
        </MenuItem>
        <MenuItem>
          <Star />
          <span>sports</span>
        </MenuItem>
      </MenuSection>

      <MenuDevider />

      <MenuSection>
        <MenuItem>
          <Add />
          <span>Browse channels</span>
        </MenuItem>
      </MenuSection>

      <MenuDevider />

      <MenuSection>
        <h2 className="sectionTitle">More from Youtube</h2>
        <MenuItem>
          <YoutubeIcon />
          <span>Youtube kids</span>
        </MenuItem>
      </MenuSection>

      <MenuDevider />

      <MenuSection>
        <MenuItem>
          <Settings />
          <span>Settings</span>
        </MenuItem>
        <MenuItem>
          <Flag />
          <span>Report history</span>
        </MenuItem>
        <MenuItem>
          <Help />
          <span>Help</span>
        </MenuItem>
        <MenuItem>
          <FeedBack />
          <span>Send feedback</span>
        </MenuItem>
      </MenuSection>

      <MenuDevider />
      <MenuSection>
        <p>About Press Copyright Contact us Creatorss Advertise Developers .<br /> Terms Privacy Policy & Safety How Youtube Works test new Features </p>
      </MenuSection>


    </SideBarStyle>
  );
};

export default SideBar;