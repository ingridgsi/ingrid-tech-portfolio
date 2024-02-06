import { useState } from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import Cta from "../../Cta";

function NavBar() {
  const pages = ["hero", "skills", "about", "projects", "contact"];

  const [isOpen, setIsOpen] = useState("");

  function onClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      <MobileNavBar
        pages={pages}
        onClick={onClick}
        onClose={onClose}
        isOpen={isOpen}
      />

      <DesktopNavBar
        pages={pages}
        onClick={onClick}
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
}

export default NavBar;
