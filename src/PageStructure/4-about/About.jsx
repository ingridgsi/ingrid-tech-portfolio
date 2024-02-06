import Container from "../../Container";

function About() {
  return (
    <section id="about" className=" py-16 mb-16 md:mb-32 bg-[#f8f9fa]">
      <Container>
        <div className="flex flex-col items-center md:block">
          <h3 className="uppercase font-bold text-subheading tracking-subheading">
            About me
          </h3>

          <h2 className="my-6 mb-4 text-headings text-center md:text-start text-headingSecondary ">
            A woman in tech who&apos;s all about crafting cool things online.
          </h2>
        </div>
        <p className="text-paragraphs text-center md:text-start my-4">
          As an enthusiastic and curious woman, I&apos;m always keen on creating
          solutions using technology to make life easy. <br></br>Currently
          I&apos;ve been studying and developing web project using React in
          combination with Tailwind CSS.
        </p>
      </Container>
    </section>
  );
}

export default About;
