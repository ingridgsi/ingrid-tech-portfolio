import htmlLogo from "../../images/html.png";
import cssLogo from "../../images/css.png";
import tailwindLogo from "../../images/tailwind.png";
import jsLogo from "../../images/js.png";
import reactLogo from "../../images/science.png";
import ghLogo from "../../images/github.png";
import Container from "../../Container";

function Skills() {
  const skillsLogos = [
    htmlLogo,
    cssLogo,
    tailwindLogo,
    jsLogo,
    reactLogo,
    ghLogo,
  ];

  return (
    <section id="skills" className="my-16 md:my-32">
      <Container>
        <h2 className="uppercase font-bold text-center text-subheading tracking-subheading">
          {" "}
          Tech Stack
        </h2>
        <ul className="flex gap-5 items-center justify-between py-16 px-8">
          {skillsLogos.map((logo) => (
            <li key={logo.index}>
              <img
                src={logo}
                alt={logo}
                width="58px"
                height="58px"
                className="hover:translate-y-[-8px] transition-all duration-300 ease-in-out cursor-pointer"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Skills;
