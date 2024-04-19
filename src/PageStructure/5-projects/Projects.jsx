import { FiGithub, FiExternalLink } from "react-icons/fi";
import omnifoodProject from "../../images/omnifood.jpg";
import Container from "../../Container";
import toDoApp from "../../images/toDoApp.jpg";
import wildOasis from "../../images/wildOasis.jpg";
import fastPizza from "../../images/fastPizza.jpg";

function Projects() {
  const projectsData = [
    {
      projectImage: omnifoodProject,
      projectTitle: "Omnifood - Never cook again!",
      description:
        "Omnifood is a fictional tech company that aims to help people maintain a healthy diet. This landing page primarily utilizes Flexbox and CSS grid, following best practices in web design, to create a dynamic and accessible user interface. Media queries have been implemented to ensure responsiveness across various screen sizes and devices.",
      githubLink: "https://github.com/ingridgsi/omnifood-landing-page.git",
      liveDemoLink: "https://omnifood-healthydiet.netlify.app/",
      stacks: ["html", "css", "JavaScript"],
    },
    {
      projectImage: fastPizza,
      projectTitle: "Fast React Pizza",
      description:
        "A pizza ordering app where users can order their favorite pizza without authentication. In this project, orders are made by sending a POST request with the order data to the API. The API responds with a unique order ID which is then display to the user.",
      githubLink: "https://github.com/ingridgsi/fast-react-pizza.git",
      liveDemoLink: "https://fastpizzareactfast.netlify.app",
      stacks: [
        "React",
        "Tailwind",
        "API Geocoding",
        "React Router",
        "Redux Toolkit",
      ],
    },
    {
      projectImage: wildOasis,
      projectTitle: "The Wild Oasis",
      description:
        "An intuitive hotel management application designed to optimize booking processes. The application offers statistical insights to effectively oversee cabins, users, and bookings. It includes integrated authentication and database storage capabilities, along with a dark mode for user preference.",
      githubLink: "https://github.com/ingridgsi/the-wild-oasis.git",
      liveDemoLink: "https://dynamic-dragon-720e6c.netlify.app",
      stacks: ["React", "Styled-components", "Supabase", "React Router"],
    },

    {
      projectImage: toDoApp,
      projectTitle: "ToDoApp",
      description:
        "A task management app where users can insert tasks to do, edit, delete and filter. It's possible to set a timer to focus, switch to dark mode, check progress based on the stats and get an advice from an API.",
      githubLink: "https://github.com/ingridgsi/toDo-app.git",
      liveDemoLink: "https://todo.ingridtech.com",
      stacks: ["React", "Tailwind", "API", "Redux Toolkit", "Local Storage"],
    },
  ];

  return (
    <section id="projects" className="mb-28 md:mb-32 ">
      <Container>
        <div className="flex flex-col items-center  md:block px-8">
          <span className="uppercase font-bold text-subheading tracking-subheading">
            Projects
          </span>
          <h2 className="my-6 mb-7 text-headings text-center md:text-start text-headingSecondary ">
            Self learning projects built using real world solutions.
          </h2>
        </div>
        <div className=" flex flex-col flex-grow gap-8 md:grid  items-center px-4">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="  rounded-[10px]  w-full flex flex-col p-4  shadow-3xl lg:grid grid-cols-2  gap-3"
            >
              <div className="  shadow-3xl relative overflow-hidden w-full rounded-md ">
                <a href={project.liveDemoLink} target="_blank" rel="noreferrer">
                  <img src={project.projectImage} className="" />
                </a>
              </div>

              <div className="flex flex-col gap-6 items-center justify-center w-full py-5 px-2">
                <h2 className="text-subheading text-center font-semibold ">
                  {project.projectTitle}{" "}
                </h2>
                <p className="text-paragraphs text-center text-[#555]">
                  {project.description}
                </p>

                {/* <div className="flex gap-3 items-center justify-between">
                  {project.stacks?.map((stack, stackIndex) => (
                    <span
                      className="flex justify-center items-center p-[0.5rem] shadow-3xl w-auto  rounded-md text-[#444] font-semibold text-center"
                      key={stackIndex}
                    >
                      {stack.toUpperCase()}
                    </span>
                  ))}
                </div> */}
                <div className="  mt-1 flex flex-row items-center justify-center gap-3">
                  <a
                    className="flex items-center gap-1 font-medium px-5
                    hover:text-[#227d7d] text-paragraphs text-[#555]"
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code <FiGithub />
                  </a>

                  <a
                    className="flex items-center gap-1 font-medium px-5 hover:text-[#227d7d] text-[#555]"
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
