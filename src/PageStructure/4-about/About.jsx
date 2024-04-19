import Container from "../../Container";
import coding from "../../images/coding.jpg";

function About() {
  return (
    <section id="about" className=" py-16 mb-16 md:mb-20 bg-[#f8f9fa]">
      <Container>
        <div className="flex flex-col items-center md:block md:px-8">
          <h3 className="uppercase font-bold text-subheading tracking-subheading">
            About me
          </h3>

          <h2 className="mt-6  text-headings text-center md:text-start text-headingSecondary ">
            A woman in tech who&apos;s up to crafting cool things online.
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-6 gap-10 md:px-8">
          <p className="text-paragraphs text-[1.2rem] text-center md:text-start my-4 ">
            As an enthusiastic and curious woman, I have developed a passion for
            the Tech field after working as an IT recruiter. My experience
            exposed me to the dynamic intersection of technology and human
            potential, sparking a strong interest in software development.{" "}
            <br></br>
            <br></br> Transitioning from a role in recruitment to one in
            development, I bring a unique blend of people skills and technical
            proficiency to the table, which helps me to create digital
            experiences that speak to all. <br></br> <br></br>
            Currently I&apos;ve been studying and developing web project using
            React and its third party libraries, such as React Router, Redux,
            Context API, Chakra, React Hook Form and Tailwind.
          </p>
          <img
            src={coding}
            alt="Laptop with code on the screen"
            className="rounded-[2rem] md:w-[356px] md:h-[260px] shadow-3xl "
          />
        </div>
      </Container>
    </section>
  );
}

export default About;
