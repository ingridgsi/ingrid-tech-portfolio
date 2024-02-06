import { FiGithub, FiExternalLink } from "react-icons/fi";
import omnifoodProject from "../../images/omnifood.jpg";
import cloudBrigadeProject from "../../images/cloudBrigade.png";
import Container from "../../Container";

function Projects() {
  const projectsData = [
    {
      projectImage: omnifoodProject,
      projectTitle: "Omnifood - Never cook again!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. dsfadfasdfasdfsfas fdafdsfas sdfsafsadf asdf adfdfdfsaf  adsf ddf",
      githubLink: "https://github.com/ingridgsi/omnifood-landing-page.git",
      liveDemoLink: "https://omnifood-healthydiet.netlify.app/",
      stacks: ["html", "css", "JS"],
    },
    {
      projectImage: cloudBrigadeProject,
      projectTitle: "CloudBrigade | Multicloud Services",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. dsfadfasdfasdfsfas fdafdsfas sdfsafsadf asdf adfdfdfsaf  adsf ddf",
      githubLink: "https://github.com/ingridgsi/cloud-brigade.git",
      liveDemoLink: "https://cloudbrigade.ingridtech.com/",
      stacks: ["html", "css", "JS"],
    },
    // Add more project data as needed
  ];

  return (
    <section id="projects" className="mb-28 md:mb-32 ">
      <Container>
        <div className="flex flex-col items-center md:block px-8">
          <span className="uppercase font-bold text-subheading tracking-subheading">
            Projects
          </span>
          <h2 className="my-6 mb-4 text-headings text-center md:text-start text-headingSecondary ">
            All projects built using real world solutions and the latest stacks.
          </h2>
        </div>
        <div className=" flex flex-col gap-6 md:grid items-center px-4">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="  rounded-[10px] h-[37rem]  w-full flex flex-col p-4  shadow-3xl md:flex-row md:h-[18rem] lg:h-[25rem] 2xl:h-[29.5rem]"
            >
              <div className=" shadow-3xl relative overflow-hidden w-full rounded-md ">
                <a href={project.liveDemoLink} target="_blank" rel="noreferrer">
                  <img
                    src={project.projectImage}
                    alt=""
                    className="
                    hover:translate-y-[-83%]
                    transition duration-8000 ease-in-out z-[-10] "
                  />
                </a>
              </div>

              <div className="flex flex-col gap-6 items-center justify-center w-full py-5 px-2">
                <h2 className="text-subheading text-center">
                  {project.projectTitle}{" "}
                </h2>
                <p className="text-paragraphs text-center">
                  {project.description}
                </p>

                <div className="flex gap-3 items-center justify-between">
                  {project.stacks?.map((stack, stackIndex) => (
                    <span
                      className="flex justify-center p-[0.5rem] shadow-3xl w-[5rem] rounded-md "
                      key={stackIndex}
                    >
                      {stack.toUpperCase()}
                    </span>
                  ))}
                </div>
                <div className="  mt-1 flex flex-row items-center justify-center gap-3">
                  <a
                    className="flex items-center gap-1 font-medium px-5
                    hover:text-[#227d7d] text-paragraphs"
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code <FiGithub />
                  </a>

                  <a
                    className="flex items-center gap-1 font-medium px-5 hover:text-[#227d7d]"
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
