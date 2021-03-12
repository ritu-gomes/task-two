import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

import CloseIcon from "@material-ui/icons/Close";

function Navbar({ isSidebar, setSidebar }) {
  const [isDark, setDark] = React.useState(false);

  // handle Dark & Light Theme

  const handleLightTheme = () => {
    setDark(false);
    const body = document.body;
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  };

  const handleDarkTheme = () => {
    setDark(true);
    const body = document.body;
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  };

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__left">
          <IconButton
            onClick={() => (isSidebar ? setSidebar(false) : setSidebar(true))}
          >
            {isSidebar ? (
              <CloseIcon style={{ fill: "#fff" }} />
            ) : (
              <MenuIcon style={{ fill: "#fff" }} />
            )}
          </IconButton>
          <span className="brand__name">Live SQL</span>
        </div>
        <div className="navbar__right">
          <IconButton onClick={isDark ? handleLightTheme : handleDarkTheme}>
            {isDark ? (
              <Brightness4Icon style={{ fill: "#fff" }} />
            ) : (
              <WbSunnyIcon style={{ fill: "#fff" }} />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
