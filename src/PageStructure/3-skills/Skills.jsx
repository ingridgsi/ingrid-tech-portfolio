import htmlLogo from "../../images/html.png";
import cssLogo from "../../images/css.png";
import tailwindLogo from "../../images/tailwind.png";
import jsLogo from "../../images/js.png";
import reactLogo from "../../images/science.png";
import ghLogo from "../../images/github.png";
import Container from "../../Container";

function Skills() {
  const skillsLogos = [
    { src: htmlLogo, alt: "HTML" },
    { src: cssLogo, alt: "CSS" },
    { src: tailwindLogo, alt: "Tailwind" },
    { src: jsLogo, alt: "JavaScript" },
    { src: reactLogo, alt: "React" },
    { src: ghLogo, alt: "GitHub" },
  ];

  return (
    <section id="skills" className="my-16 md:my-32">
      <Container>
        <h2 className="uppercase font-bold text-center text-subheading tracking-subheading">
          {" "}
          Tech Stack
        </h2>
        <ul className="flex gap-5 items-center justify-between py-16 px-8">
          {skillsLogos.map((logo, index) => (
            <li key={index}>
              <img
                src={logo.src}
                alt={logo.alt}
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
