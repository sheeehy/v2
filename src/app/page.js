import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import Image from "next/image";
import me from "../public/me.png"; // adjust the path as necessary
import Flag from "react-flagkit";
import React, { useState } from "react";

export default function Home() {
  const [country, setCountry] = useState("IE");

  const handleFlagClick = () => {
    setCountry("GB"); // assuming you want to change the flag to the UK
  };

  return (
    <div>
      <Head>
        <title>Jack Sheehy | Student</title>
        <meta name="" content="" />
        <link rel="icon" href="/me.png" />
      </Head>
      <main className="bg-dark-blue px-10 text-gray-100 font-raleway ">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-extrabold hover:select-none">
            jack sheehy
          </h1>
          <ul className="flex items-center">
            <li onClick={handleFlagClick}>
              <Flag country={country} size={40} />
            </li>

            <li>
              <a
                className="bg-dark-gray  px-8 rounded-lg ml-8 outer-glow text-xl py-4 leading-8 tracking-wider text-white max-w-screen-md font-custom"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <section className="flex items-center justify-center h-screen">
          <div className="bg-dark-blue flex justify-center items-start py-7 px-10 mx-auto rounded-custom outer-glow custom-width hover:select-none mt-[-300px]">
            <div className="max-w-lg ">
              <h2 className="text-4xl py-0 font-extrabold text-glow">
                Business Computing student at TU Dublin.
              </h2>
              <p className="text-xl py-4 leading-8 tracking-wider text-gray-400 max-w-screen-md font-custom">
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
            <div className="hidden custom1:block">
              <Image className="image-size" src={me} />
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-2xl mx-auto tracking-wider ">
            <h3 className="text-4xl py-0 font-extrabold text-glow">About Me</h3>
            <p className="text-xl py-4 leading-8 tracking-wider text-gray-400 max-w-screen-md font-custom ">
              Hi, I'm Jack Sheehy. I'm currently a student in TU Dublin studying
              Business Computing. My passion for technology started at a young
              age, so it was a natural choice for me to pursue a career in that
              field as I got older.
            </p>
            <p className="text-xl py-4 leading-8 tracking-wider text-gray-400 max-w-screen-md font-custom ">
              In addition to my love of technology, I am also interested in art
              and design, as well as business and entrepreneurship. I really
              enjoy learning, regardless of the field, so studying Business &
              Computer Science has left me eager to purse something meaningful
              in the industry.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
