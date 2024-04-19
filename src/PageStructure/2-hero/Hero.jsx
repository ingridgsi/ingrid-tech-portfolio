import ingrid from "../../images/ingrid.jpg";
import Cta from "../../Cta";
import Container from "../../Container";

function Hero() {
  return (
    <section
      id="hero"
      className=" bg-[#f8f9fa] h-[55rem] sm:h-[60rem] flex flex-col items-center justify-center "
    >
      <Container>
        <div className="flex flex-col gap-10  md:grid grid-cols-2 items-center justify-center">
          <div className="flex flex-col items-center md:items-start lg:px-10 ">
            <h1
              className=" text-[2.5rem] text-headings font-headings 
          tracking-headings   pb-4 mb-2 "
            >
              Web Developer
            </h1>
            <p className="leading-defaultLine  mb-12 text-center md:text-start md:text-[1rem] lg:text-[1.4rem] text-paragraphs">
              Hey, I&apos;m Ingrid Guimarães, a web developer and proud woman in
              tech. I love coding and creating digital experiences that speak to
              all. Join me in the mission of shaping a tech world where everyone
              feels at home. Enjoy exploring my portfolio!
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
