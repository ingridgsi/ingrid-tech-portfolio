import Container from "../../Container";

function About() {
  return (
    <section id="about" className=" py-16 mb-16 md:mb-20 bg-[#f8f9fa]">
      <Container>
        <div className="flex flex-col items-center md:block px-8">
          <h3 className="uppercase font-bold text-subheading tracking-subheading">
            About me
          </h3>

          <h2 className="mt-6  text-headings text-center md:text-start text-headingSecondary ">
            A woman in tech who&apos;s up to crafting cool things online.
          </h2>
        </div>
        <p className="text-paragraphs text-[1.2rem] text-center md:text-start my-4 px-8">
          As an enthusiastic and curious woman, I have developed a passion for
          the Tech field after working as an IT recruiter. <br></br>
          <br></br>My time as a recruiter strengthened my ability to understand
          diverse perspectives and effectively communicate complex ideas, skills
          which I now apply to crafting intuitive and user-friendly
          applications. <br></br> <br></br>
          Currently I&apos;ve been studying and developing web project using
          React and its third party libraries, such as React Router, Redux,
          Context API, chakra, React Hook Form and Tailwind.
        </p>
      </Container>
    </section>
  );
}

export default About;
