import womanCoding from "../../images/woman-coding.png";
import Cta from "../../Cta";
import Container from "../../Container";

function Hero() {
  return (
    <section id="hero" className=" bg-[#f8f9fa] py-16 ">
      <Container>
        <div className="flex flex-col gap-10  md:grid grid-cols-2 items-center ">
          <div className="flex flex-col items-start  ">
            <h1
              className=" text-headingPrimary text-headings font-headings 
          tracking-headings mb-2 "
            >
              Front-end Developer
            </h1>
            <p className="leading-defaultLine text-paragraphs mb-8">
              Hey, I&apos;m Ingrid Guimarães, a web developer and proud woman in
              tech. I love coding and creating digital experiences that speak to
              all. Join me in the mission of shaping a tech world where everyone
              feels at home. Enjoy exploring my portfolio!
              {/* Excited to embark on this tech journey together! */}
            </p>
            <Cta ctaText={"Saiba mais"} to={"contact"} />
          </div>

          <div>
            <img
              src={womanCoding}
              alt="Woman coding"
              className="rounded-full w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
