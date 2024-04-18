import { useState } from "react";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <footer className="bg-primary ">
      <div className="container mx-auto py-10 sm:py-16">
        <h3 className="text-center font-semibold md:font-normal  text-[1.5rem] text-[#fff] ">
          Copyright &copy; {year}. All rights are reserved.
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
