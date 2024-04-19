import ingrid from "../../images/ingrid.jpg";
import Cta from "../../Cta";
import Container from "../../Container";

function Hero() {
  return (
    <section
      id="hero"
      className=" bg-[#f8f9fa] h-[55rem] sm:h-[60rem] flex flex-col items-center justify-center md:pl-8 "
    >
      <Container>
        <div className="flex flex-col gap-5 md:grid grid-cols-2 lg:grid-cols-3  items-center justify-center">
          <div className="lg:col-span-2 flex flex-col items-center md:items-start  ">
            <h1
              className=" text-[2.5rem] text-headings font-headings 
          tracking-headings   pb-4 mb-2 "
            >
              Web Developer
            </h1>
            <p className="leading-defaultLine  mb-12 text-center md:text-start md:text-[1.25rem] lg:text-[1.4rem] text-paragraphs">
              Hey, I&apos;m Ingrid Guimarães, a web developer and proud woman in
              tech. My passion lies in coding, continuous learning, and crafting
              web applications. Feel free to dive into my portfolio and explore
              my projects!
              {/* Excited to embark on this tech journey together! */}
            </p>
            <Cta ctaText={"Saiba mais"} to={"contact"} />
          </div>

          <div className="flex items-center justify-center mt-7">
            <img
              src={ingrid}
              alt="Woman coding"
              className="rounded-[2rem] w-[256px] h-[256px]  shadow-3xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
