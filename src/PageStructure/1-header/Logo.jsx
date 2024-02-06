import { Link } from "react-scroll";
import igLogo from "../../images/igLogo.png";

function Logo({ position }) {
  return (
    <Link
      className={position}
      to="hero"
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
    >
      <img
        src={igLogo}
        alt="IG logo. Initials for Ingrid Guimaraes"
        width="54px"
        height="54px"
        className="hover:translate-y-[-4.5px] transition-all duration-300 ease-in-out cursor-pointer"
      />
    </Link>
  );
}

export default Logo;
