// import htmlLogo from "../../images/html.png";
// import cssLogo from "../../images/css.png";
// import tailwindLogo from "../../images/tailwind.png";
// import jsLogo from "../../images/js.png";
// import reactLogo from "../../images/science.png";
// import ghLogo from "../../images/github.png";
// import reduxLogo from "../../images/redux.png";
// import styledLogo from "../../images/styledComponents.png";
import Container from "../../Container";

function Skills() {
  const skillsLogos = [
    { src: "https://skillicons.dev/icons?i=html", alt: "HTML" },
    { src: "https://skillicons.dev/icons?i=css", alt: "CSS" },
    { src: "https://skillicons.dev/icons?i=tailwind", alt: "Tailwind" },
    { src: "https://skillicons.dev/icons?i=js", alt: "JavaScript" },
    { src: "https://skillicons.dev/icons?i=react", alt: "React" },
    { src: "https://skillicons.dev/icons?i=redux", alt: "Redux" },
    { src: "https://skillicons.dev/icons?i=next", alt: "Nextjs" },
    { src: "https://skillicons.dev/icons?i=git", alt: "Git" },
    { src: "https://skillicons.dev/icons?i=github", alt: "GitHub" },
    { src: "https://skillicons.dev/icons?i=supabase", alt: "Supabase" },
    // { src: ghLogo, alt: "GitHub" },
    // { src: reduxLogo, alt: "Redux" },
    // { src: styledLogo, alt: "Styled Components" },
  ];

  return (
    <section id="skills" className="my-16 md:my-32">
      <Container>
        <h2 className="uppercase font-bold text-center text-subheading tracking-subheading">
          {" "}
          Tech Stack
        </h2>
        <ul className="flex  gap-5 items-center justify-between py-16 px-8">
          {skillsLogos.map((logo, index) => (
            <li key={index}>
              <img
                src={logo.src}
                alt={logo.index}
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
{
  /* <img
              src={logo.src}
              alt={logo.alt}
              width="58px"
              height="58px"
              className="hover:translate-y-[-8px] transition-all duration-300 ease-in-out cursor-pointer"
            /> */
}

export default Skills;
