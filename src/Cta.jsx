import { Link } from "react-scroll";

function Cta({ ctaText, to, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      spy={true}
      isDynamic={true}
      smooth={true}
      offset={-100}
      duration={1000}
      className="font-semibold py-[0.8rem] px-[2.5rem] bg-primary rounded-lg text-[#fff] shadow-3xl hover:text-[#fff] hover:bg-secondary cursor-pointer transition-all duration-500 ease-in-out text-xl md:text-[1.2rem] "
    >
      {ctaText}
    </Link>
  );
}

export default Cta;
