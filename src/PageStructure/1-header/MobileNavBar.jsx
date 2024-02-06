import MenuList from "./MenuList";
import Logo from "./Logo";
import StickNavBar from "./StickNavBar";
import { useState } from "react";

function MobileNavBar({ pages, onClick, onClose, isOpen }) {
  return (
    <>
      <StickNavBar type={"mobile"}>
        <Logo position="absolute top-5 left-5" />
        <button
          onClick={onClick}
          className={`${
            isOpen ? "hidden" : "absolute font-semibold top-5 right-5 md:hidden"
          } `}
        >
          <span className="text-2xl">&#9776;</span>
        </button>
      </StickNavBar>

      {isOpen && (
        <nav className="fixed inset-0 z-10 bg-[#fff] shadow-xl p-4 rounded-lg flex flex-col justify-center items-center">
          <button
            onClick={onClose}
            className="absolute font-semibold top-5 right-5  self-center"
          >
            <span className="text-2xl">&#10005;</span>
          </button>

          <MenuList pages={pages} onClose={onClose} />
        </nav>
      )}
    </>
  );
}

export default MobileNavBar;
