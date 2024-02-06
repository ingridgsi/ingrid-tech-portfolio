import MenuList from "./MenuList";
import Logo from "./Logo";
import StickNavBar from "./StickNavBar";

function MobileNavBar({ pages, onClick, onClose, isOpen }) {
  return (
    <>
      <StickNavBar type={"mobile"}>
        <Logo position="absolute top-3 left-3" />
        <button
          onClick={onClick}
          className={`${
            isOpen ? "hidden" : "absolute font-semibold top-3 right-3 md:hidden"
          } `}
        >
          <span className="text-xl">&#9776;</span>
        </button>
      </StickNavBar>

      {isOpen && (
        <nav className="fixed inset-0 z-10 bg-[#fff] shadow-xl p-4 rounded-lg flex flex-col justify-center items-center">
          <Logo position="absolute top-3 left-3" />
          <button
            onClick={onClose}
            className="absolute font-semibold top-3 right-3  self-center"
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
