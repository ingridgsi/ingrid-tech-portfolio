import MenuList from "./MenuList";
import Logo from "./Logo";
import StickNavBar from "./StickNavBar";
import { useState } from "react";
import { useEffect } from "react";

function MobileNavBar({ pages, onClick, onClose, isOpen }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Adjust the duration of the transition as needed

    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <>
      <StickNavBar type={"mobile"}>
        <Logo position="absolute top-3 left-3" />
        <button
          onClick={onClick}
          className={`${
            isOpen
              ? "hidden"
              : "absolute font-semibold text-[#555] top-5 right-5 md:hidden"
          } `}
        >
          <span className="text-xl">&#9776;</span>
        </button>
      </StickNavBar>

      {isOpen && (
        <nav className="fixed inset-0 z-10 opacity-95 bg-[#fff] shadow-xl p-4 rounded-lg flex flex-col justify-center items-center">
          <Logo position="absolute top-3 left-3" />
          <button
            onClick={onClose}
            className="absolute font-semibold top-5 right-5 text-[#555] self-center"
          >
            <span className="text-xl">&#10005;</span>
          </button>

          <MenuList pages={pages} onClose={onClose} />
        </nav>
      )}
    </>
  );
}

export default MobileNavBar;
