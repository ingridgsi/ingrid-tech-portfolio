import MenuList from "./MenuList";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import StickNavBar from "./StickNavBar";

function DesktopNavBar({ pages }) {
  return (
    <StickNavBar type={"desktop"}>
      <Logo position="static" />
      <MenuList pages={pages} />
    </StickNavBar>
  );
}
export default DesktopNavBar;
