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
    {
      src: "https://skillicons.dev/icons?i=html",
      name: "HTML",
      alt: "HTML icon",
    },
    { src: "https://skillicons.dev/icons?i=css", name: "CSS", alt: "CSS icon" },
    {
      src: "https://skillicons.dev/icons?i=tailwind",
      name: "Tailwind",
      alt: "Tailwind icon",
    },
    {
      src: "https://skillicons.dev/icons?i=js",
      name: "JavaScript",
      alt: "JavaScript icon",
    },
    {
      src: "https://skillicons.dev/icons?i=react",
      name: "React",
      alt: "React icon",
    },
    {
      src: "https://skillicons.dev/icons?i=redux",
      name: "Redux",
      alt: "Redux icon",
    },
    {
      src: "https://skillicons.dev/icons?i=next",
      name: "Next.js",
      alt: "Next.js icon",
    },
    {
      src: "https://skillicons.dev/icons?i=supabase",
      name: "Supabase",
      alt: "Supabase icon",
    },
    { src: "https://skillicons.dev/icons?i=git", name: "Git", alt: "Git icon" },
    {
      src: "https://skillicons.dev/icons?i=github",
      name: "GitHub",
      alt: "GitHub icon",
    },
    // { src: ghLogo, alt: "GitHub" },
    // { src: reduxLogo, alt: "Redux" },
    // { src: styledLogo, alt: "Styled Components" },
  ];

  return (
    <section id="skills" className="mt-20 mb-10 ">
      <Container>
        <h2 className="uppercase font-bold text-center text-subheading tracking-subheading">
          {" "}
          Tech Stack
        </h2>

        <ul className=" grid grid-cols-4 place-items-center lg:grid-cols-5 gap-8 items-center justify-between py-16   ">
          {skillsLogos.map((logo, index) => (
            <li
              key={index}
              className={`flex flex-col items-center justify-between gap-1 
                ${
                  index >= skillsLogos.length - 2
                    ? "col-start-2 lg:col-start-4"
                    : ""
                } 
                ${
                  index >= skillsLogos.length - 1
                    ? "col-start-3 lg:col-start-5"
                    : ""
                } 
                
              }`}
            >
              <div width="58px" height="58px">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="hover:translate-y-[-8px] transition-all duration-300 ease-in-out cursor-pointer"
                />
              </div>

              <div>
                <span className="text-paragraphs">{logo.name}</span>
              </div>
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
  //
}

export default Skills;
