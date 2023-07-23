import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import Image from "next/image";
import me from "public/me.png";
import me2 from "public/me2.png";

import Image1 from "public/git.png";
import Image2 from "public/java.png";
import Image3 from "public/javascript.png";
import Image4 from "public/linux.png";
import Image5 from "public/python.png";
import Image6 from "public/react.png";
import Image7 from "public/spring.png";
import Image8 from "public/neovim.png";
import Image9 from "public/nodejs.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jack Sheehy | Student</title>
        <meta name="" content="" />
        <link rel="icon" href="/me.png" />
      </Head>
      <main className="bg-dark-blue px-10 text-gray-100 font-raleway ">
        <nav className="pt-10 mb-12 flex justify-between">
          <h1 className="text-xl font-extrabold hover:select-none">
            jack sheehy
          </h1>
          <ul className="flex items-center">
            <li className="font-normal tracking-wider">Gaeilge</li>
            <li>
              <a
                className="bg-dark-gray px-8 rounded-lg ml-8 outer-glow text-xl py-4 leading-8 tracking-wider text-white max-w-screen-md font-custom"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <section className="flex items-start justify-center h-screen pt-32">
          <div className="bg-dark-blue flex items-start py-6 px-6 mx-auto rounded-custom outer-glow custom-width hover:select-none ">
            <div className="max-w-lg ">
              <h2 className="text-4xl pb-2 font-extrabold text-glow">
                Business Computing student at TU Dublin.
              </h2>
              <p className="text-xl pb-2 pt-1 leading-8 tracking-wider text-gray-400 max-w-screen-md font-custom">
                Hi, I'm <span className="outer-glow1">Jack Sheehy</span>. I'm a
                hard-working Business Computing student at TU Dublin, based in
                Wicklow, Ireland.
              </p>

              <div className="text-4xl flex gap-6 py-0 text-gray-400 ">
                <a
                  className="hover:text-gray-500 transition ease-in-out duration-200"
                  href="https://github.com/sheeehy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>

                <a
                  className="hover:text-gray-500 transition ease-in-out duration-200"
                  href="https://www.instagram.com/jack__sheehy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineInstagram />
                </a>

                <a
                  className="hover:text-gray-500 transition ease-in-out duration-200"
                  href="https://www.linkedin.com/in/jack-sheehy-1720b21b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
            <div className="hidden custom1:block pl-5">
              <Image className="image-size" src={me} />
            </div>
          </div>
        </section>

        <section className="justify-center h-screen flex flex-wrap gap-8 md:gap-16 items-start px-4 md:px-4">
          <div className="bg-dark-blue py-7 px-10 rounded-custom outer-glow hover:select-none w-full md:w-1/2 lg:w-1/3">
            <h3 className="text-3xl py-0 font-extrabold text-glow">About Me</h3>
            <p className="text-md py-4 leading-6 tracking-wider text-gray-400 max-w-screen-md font-custom ">
              Hi, I'm Jack Sheehy. I'm currently a student in TU Dublin studying
              Business Computing. My passion for technology started at a young
              age, so it was a natural choice for me to pursue a career in that
              field as I got older.
            </p>

            <p className="text-md py-0 leading-6 tracking-wider text-gray-400 max-w-screen-md font-custom ">
              In addition to my love of technology, I am also interested in art
              and design, as well as business and entrepreneurship. I really
              enjoy learning, regardless of the field, so studying Business &
              Computer Science has left me eager to purse something meaningful
              in the industry.
            </p>
          </div>

          <div className="bg-dark-blue py-7 px-10 rounded-custom outer-glow hover:select-none w-full md:w-1/2 lg:w-1/3">
            <h3 className="text-3xl py-0 font-extrabold text-glow">
              What I'm Learning
            </h3>

            <p className="text-md py-4 leading-6 tracking-wider text-gray-400 max-w-screen-md font-custom ">
              As a Business Computing student, I cover a diverse range of topics
              such as Object-Oriented Programming, Web Development, Algorithms,
              Data Structures, as well as business. My interest in technology is
              not limited to software but extends to hardware as well. From
              building custom PCs to tinkering with electronic devices.
            </p>
            <p className="text-md py-0 leading-6 tracking-wider text-gray-400 max-w-screen-md font-custom ">
              We have a primary focus on Java, though outside of coursework I'm
              learning other languages and frameworks such as React, Spring
              Boot, Javascript and Python. In the future, I'd like to learn C#
              or Rust.
            </p>
            <div className="flex space-x-4 pt-5 overflow-hidden">
              <Image src={Image2} alt="Java Icon" className="w-10 h-10" />
              <Image src={Image3} alt="JavaScript Icon" className="w-10 h-10" />
              <Image src={Image5} alt="Python Icon" className="w-10 h-10" />
              <Image src={Image1} alt="Git Icon" className="w-10 h-10" />
              <Image src={Image6} alt="React Icon" className="w-10 h-10" />
              <Image src={Image7} alt="Spring Icon" className="w-10 h-10" />
              <Image src={Image4} alt="Linux Icon" className="w-10 h-10" />
              <Image src={Image9} alt="Vim Icon" className="w-10 h-10" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
