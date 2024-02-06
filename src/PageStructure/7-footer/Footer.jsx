import { useState } from "react";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <footer className="bg-primary ">
      <div className="container mx-auto py-20">
        <h3 className="text-center font-semibold md:font-medium md:text-headingTertiary text-[#fff] md:text-left">
          Copyright &copy; {year}. All rights are reserved.
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
