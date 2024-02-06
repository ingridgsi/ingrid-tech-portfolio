import Container from "../../Container";
import { TbMail } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className=" py-16 px-10 bg-[#f8f9fa] ">
      <Container>
        <div className="flex flex-col items-center md:block">
          <span className="uppercase font-bold text-subheading tracking-subheading">
            Contact
          </span>
          <h2 className="my-6 mb-4 text-headings text-center md:text-start text-headingSecondary">
            Feel free to hit me up!
          </h2>
        </div>

        <div className="flex flex-col  justify-center gap-10 my-10 md:flex-row md:justify-start md:gap-48 ">
          <div className=" flex flex-col items-center md:flex-row gap-3">
            <TbMail className="w-[60px] h-[60px] border-gray-400	 rounded-[50px] p-2 shadow-3xl  stroke-[#227d7d] " />
            <address className="flex flex-col items-center md:items-start">
              <h3 className="text-subheading  not-italic ">Mail</h3>
              <a
                href="mailto: isg.ingridguimaraes@gmail.com"
                className="hover:text-[#227d7d] cursor-pointer not-italic text-paragraphs"
              >
                isg.ingridguimaraes@gmail.com
              </a>
            </address>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-3">
            <FiMapPin className="w-[60px] h-[60px] border-gray-400	 rounded-[50px] p-2 shadow-3xl  stroke-[#227d7d] " />
            <address className="flex flex-col items-center md:items-start">
              <h3 className="text-subheading  not-italic ">Location</h3>
              <p className="hover:text-[#227d7d] cursor-pointer text-paragraphs not-italic text-start">
                Amstelveen, The Netherlands
              </p>
            </address>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
