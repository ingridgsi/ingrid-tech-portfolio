import { useEffect, useState } from "react";

function StickNavBar({ children, type }) {
  const stick = "fixed  top-0 left-0 w-full  bg-[#fff] shadow-3xl p-5 ";
  const desktop =
    "hidden  h-[6rem] md:flex justify-between items-center p-10 z-10";
  const mobile = "h-[4.7rem] z-10 md:hidden flex item-center justify-center";

  const styles = {
    desktopStick: stick + desktop,
    mobileStick: stick + mobile,
    desktopNormal: desktop,
    mobileNormal: mobile,
  };

  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setSticky(scrollPosition > 610);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isSticky ? styles[type + "Stick"] : styles[type + "Normal"]
      } `}
    >
      {children}
    </nav>
  );
}

export default StickNavBar;
