import React from "react";
import { Link } from "react-scroll";
import Cta from "../../Cta";

function MenuList({ pages, onClose }) {
  return (
    <div>
      <ul className="flex flex-col justify-center items-center md:flex-row gap-10">
        {pages.map((page, index) => (
          <li key={index}>
            {index === pages.length - 1 ? (
              <Cta
                to={pages[pages.length - 1]}
                onClick={onClose}
                ctaText={page.charAt(0).toUpperCase() + page.slice(1)}
              />
            ) : (
              <Link
                to={page}
                spy={true}
                isDynamic={true}
                smooth={true}
                offset={index === 1 ? -150 : -90}
                duration={1000}
                onClick={onClose}
                className="text-paragraphs text-[#555]  md:text-[1.3rem] cursor-pointer font-medium hover:text-primary focus:border-b"
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
