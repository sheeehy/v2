import Head from "next/head";
import Link from "next/link";

import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import Image from "next/image";
import me from "public/me.png";
import me2 from "public/me2.png";

import { FiExternalLink } from "react-icons/fi";

import Image1 from "public/git.png";
import Image2 from "public/java.png";
import Image3 from "public/javascript.png";
import Image5 from "public/python.png";
import Image6 from "public/react.png";
import Image7 from "public/spring.png";
import Image9 from "public/nodejs.png";

import Project1 from "public/lgdaProject.JPG";
import Project2 from "public/GeoGit Project.JPG";
import Project3 from "public/APIProject.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jack Sheehy | Student</title>
        <meta name="" content="" />
        <link rel="icon" href="public/me.png" />
      </Head>

      <main className="bg-dark-blue px-10 text-gray-100 font-raleway ">
        <div className="animate-fade-in">
          <nav className="pt-10 mb-12 flex justify-between top-0 bg-transparent">
            <h1 className="text-xl font-extrabold hover:select-none hidden sm:block bg-dark-blue px-5 rounded-lg transition-transform duration-300 hover:-translate-y-1 animate-fade-in delay-1">
              <Link href="/">jack sheehy</Link>
            </h1>

            <ul className="flex items-center animate-fade-in delay-2">
              <li className="font-small tracking-wider ml-8 hover:shadow-glow hover:bg-green-800 transition-transform duration-300 hover:-translate-y-1">
                <a className="text-white cursor-pointer"> Gaeilge </a>
              </li>

              <li className="animate-fade-in delay-3">
                <a
                  className="bg-dark-gray px-5 rounded-lg ml-8 outer-glow text-base py-3 leading-8 tracking-normal text-white max-w-screen-md font-custom transition-opacity duration-100 opacity-100 hover:opacity-80"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="opacity-0 animate-fade-in delay-10">
          <section className="flex items-start justify-center h-screen pt-32">
            <div className="bg-dark-blue flex items-start py-6 px-6 mx-auto rounded-custom outer-glow custom-width hover:select-none ">
              <div className="max-w-lg ">
                <h2 className="text-4xl pb-2 font-extrabold text-glow">
                  Business Computing student at TU Dublin.
                </h2>
                <p className="text-xl pb-2 pt-1 leading-8 tracking-wider text-gray-400 max-w-screen-md font-custom">
                  Hi, I'm <span className="outer-glow1">Jack Sheehy</span>. I'm
                  a hard-working Business Computing student at TU Dublin, based
                  in Wicklow, Ireland.
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

          <section className="pb-5 justify-center min-h-screen flex flex-wrap gap-8 md:gap-16 items-start px-4 md:px-4">
            <div className="bg-dark-blue py-7 px-10 rounded-custom outer-glow hover:select-none w-full md:w-1/2 lg:w-1/3">
              <h3 className="text-3xl pt-0 pb-3 font-extrabold text-glow">
                About Me
              </h3>
              <div className="flex justify-between">
                <p className="text-md py-0 leading-6 tracking-wider text-gray-400 max-w-screen-md font-custom">
                  Hi, I'm Jack Sheehy. I'm currently a student in TU Dublin
                  studying Business Computing. My passion for technology started
                  at a young age, so it was a natural choice for me to pursue a
                  career in that field as I got older.
                </p>
                <Image
                  className="image-size2 self-start pb-0 pl-2 max-2xl:hidden"
                  src={me2}
                />
              </div>
              <p className="text-md py-1 leading-6 tracking-wider text-gray-400 max-w-screen-md font-custom pb-1">
                In addition to my love of technology, I am also interested in
                art and design, as well as business and entrepreneurship. I
                really enjoy learning, regardless of the field, so studying
                Business & Computer Science has left me eager to purse something
                meaningful in the industry.
              </p>
            </div>

            <div className="bg-dark-blue py-7 px-10 rounded-custom outer-glow hover:select-none w-full md:w-1/2 lg:w-1/3">
              <h3 className="text-3xl py-0 font-extrabold text-glow">
                What I'm Learning
              </h3>

              <p className="text-md py-4 leading-6 tracking-wider text-gray-400 max-w-screen-md font-custom ">
                As a Business Computing student, I cover a diverse range of
                topics such as Object-Oriented Programming, Web Development,
                Algorithms, Data Structures, as well as business. We have a
                primary focus on Java, though outside of coursework I'm learning
                other languages and frameworks such as React, Spring Boot,
                Javascript, Python and more. In the future, I'd like to learn C#
                or Rust.
              </p>
              <p className="text-md py-0 leading-6 tracking-wider text-gray-400 max-w-screen-md font-custom ">
                My interest in technology is not limited to software but extends
                to hardware as well. From building custom PCs to tinkering with
                electronic devices.
              </p>
              <div className="flex space-x-4 pt-5  flex-wrap">
                <Image
                  src={Image2}
                  alt="Java Icon"
                  className="w-10 h-10 max-2xl:hidden"
                />
                <Image
                  src={Image3}
                  alt="JavaScript Icon"
                  className="w-10 h-10 max-2xl:hidden"
                />
                <Image
                  src={Image5}
                  alt="Python Icon"
                  className="w-10 h-10 max-2xl:hidden"
                />
                <Image
                  src={Image6}
                  alt="React Icon"
                  className="w-11 h-10 max-2xl:hidden"
                />
                <Image
                  src={Image7}
                  alt="Spring Icon"
                  className="w-11 h-11 max-2xl:hidden"
                />
                <Image
                  src={Image9}
                  alt="Vim Icon"
                  className="w-10 h-10 max-2xl:hidden"
                />
                <Image
                  src={Image1}
                  alt="Git Icon"
                  className="w-10 h-10 max-2xl:hidden"
                />
              </div>
            </div>
          </section>

          <section className="">
            <div class="flex items-center justify-center pb-12">
              <h1 className="max-w-sm text-center py-4 px-6 rounded-3xl outer-glow hover:select-none text-3xl font-extrabold text-glow">
                Projects
              </h1>
            </div>

            <div className="justify-center flex flex-wrap gap-8 md:gap-16 items-start px-4 md:px-4">
              {/* Github Tracker PROJECT */}
              <div class="max-w-screen-custom2 bg-dark-blue py-4 px-2 rounded-custom outer-glow hover:select-none ">
                <Image
                  src={Project2}
                  className="px-3  rounded-custom pt-2 opacity-70 hover:opacity-100 transition-opacity duration-500   w-80 h-52"
                  alt="LGDA Project"
                />

                <div class="px-6 py-4">
                  <div class="text-2xl pt-0 pb-3 font-extrabold text-glow">
                    Geo Git
                  </div>
                  <p class="text-sm py-0 leading-6 tracking-wider text-gray-400 max-w-screen-md font-custom">
                    A full-stack web app that ranks the top GitHub users by
                    location, making use of the GitHub API and GitHub Developer
                    Program. Gathers the top users by location based on
                    followers, number of repositories, etc.
                  </p>
                </div>
                <div class="px-6 pt-2 pb-2">
                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    JavaScript
                  </span>

                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    React
                  </span>

                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    Tailwind
                  </span>

                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    Vercel
                  </span>

                  <div className="text-3xl flex gap-6 py-0 text-gray-400 pt-2 ">
                    <a
                      className="hover:text-gray-500 transition ease-in-out duration-200"
                      href="https://github.com/sheeehy/Geo-Git-v1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                    <a
                      className="hover:text-gray-500 transition ease-in-out duration-200"
                      href="https://geo-git.vercel.app/search.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              {/* LGDA PROJECT */}
              <div class="max-w-screen-custom2 bg-dark-blue py-4 px-2 rounded-custom outer-glow hover:select-none ">
                <Image
                  src={Project1}
                  className="px-3  rounded-custom pt-2 opacity-70 hover:opacity-100 transition-opacity duration-500   w-80 h-52"
                  alt="LGDA Project"
                />

                <div class="px-6 py-4">
                  <div class="text-2xl pt-0 pb-3 font-extrabold text-glow">
                    LGDA Web Platform
                  </div>
                  <p class="text-sm py-0 leading-6 tracking-wider text-gray-400 max-w-screen-md font-custom ">
                    A full-stack web platform built for the Local Government
                    Directors Association. Developed the frontend and backend,
                    including user-friendly UI/UX, a scalable database and
                    secure user-authentication. 100+ active paid members.
                  </p>
                </div>
                <div class="px-6 pt-2 pb-2">
                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    JavaScript
                  </span>

                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    PHP
                  </span>

                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    Heroku
                  </span>

                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    MySQL
                  </span>

                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    NodeJS
                  </span>

                  <div className="text-3xl flex gap-6 py-0 text-gray-400 pt-2 ">
                    <a
                      className="hover:text-gray-500 transition ease-in-out duration-200"
                      href="https://github.com/sheeehy/LGDA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                    <a
                      className="hover:text-gray-500 transition ease-in-out duration-200"
                      href="http://www.lgda.ie/login.php"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              {/* API PROJECT */}
              <div class="max-w-screen-custom2 bg-dark-blue py-4 px-2 rounded-custom outer-glow hover:select-none ">
                <Image
                  src={Project3}
                  className="px-3  rounded-custom pt-2 opacity-70 hover:opacity-100 transition-opacity duration-500   w-80 h-52"
                  alt="API Project"
                />

                <div class="px-6 py-4">
                  <div class="text-2xl pt-0 pb-3 font-extrabold text-glow">
                    Irish Artists API
                  </div>
                  <p class="text-sm py-0 leading-6 tracking-wider text-gray-400 max-w-screen-md font-custom ">
                    A REST API providing comprehensive and reliable information
                    on contemporary Irish artists and creatives. This API aims
                    to allow users to access and utilise frequently updated data
                    regarding the world of Irish artists.
                  </p>
                </div>
                <div class="px-6 pt-2 pb-2">
                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    Java
                  </span>

                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    Spring Boot
                  </span>

                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    Maven
                  </span>

                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    Postman
                  </span>

                  <div className="text-3xl flex gap-6 py-0 text-gray-400 pt-2 ">
                    <a
                      className="hover:text-gray-500 transition ease-in-out duration-200"
                      href="https://github.com/sheeehy/Contemporary-Irish-Artists-API"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-10 sm:pt-10 md:pt-10 lg:pt-10 xl:pt-20 md:grid hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center justify-items-center pb-8 mx-auto max-w-5xl">
              {/* SCRIPT PROJECT */}
              <div class="max-w-xs bg-dark-blue py-4 px-1 rounded-custom outer-glow hover:select-none">
                <div class="px-3 py-2">
                  <div class="text-xl pt-1 pb-3 px-2 font-extrabold text-glow">
                    Retail Checkout Scripts
                  </div>
                  <p class="text-md pt-1 pb-1 px-2 leading-6 tracking-wider text-gray-400 max-w-screen-md font-custom text-sm">
                    Automatic checkout scripts for Irish retailers, allowing
                    users to purchase limited items faster. Also allows users to
                    automate the process. Built with Selenium.
                  </p>
                </div>
                <div class="px-6 pt-0 pb-2">
                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">
                    Python
                  </span>
                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">
                    Selenium
                  </span>

                  <div className="text-2xl flex gap-6 py-0 text-gray-400 pt-2 ">
                    <a
                      className="hover:text-gray-500 transition ease-in-out duration-200"
                      href="https://github.com/sheeehy/Irish-Checkout-Scripts"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                </div>
              </div>

              {/* EVENT-SERVICE PROJECT */}
              <div class="max-w-xs bg-dark-blue py-4 px-1 rounded-custom outer-glow hover:select-none">
                <div class="px-3 py-2">
                  <div class="text-xl pt-1 pb-3 px-2 font-extrabold text-glow">
                    Event Ticketing Service
                  </div>
                  <p class="text-md pt-1 pb-1 px-2 leading-6 tracking-wider text-gray-400 max-w-screen-md font-custom text-sm">
                    Event ticketing system that allows users to create events,
                    as well as buy and sell tickets. Year 1, Semester 2
                    Object-Oriented Programming Project.
                  </p>
                </div>
                <div class="px-6 pt-0 pb-2">
                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">
                    Java
                  </span>

                  <div className="text-2xl flex gap-6 py-0 text-gray-400 pt-2 ">
                    <a
                      className="hover:text-gray-500 transition ease-in-out duration-200"
                      href="https://github.com/sheeehy/Event-Ticketing-Service"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                </div>
              </div>

              {/* v2 Portfolio PROJECT */}
              <div class="max-w-xs bg-dark-blue py-4 px-1 rounded-custom outer-glow hover:select-none">
                <div class="px-3 py-2">
                  <div class="text-xl pt-1 pb-3 px-2 font-extrabold text-glow">
                    Personal Website v2
                  </div>
                  <p class="text-md pt-1 pb-1 px-2 leading-6 tracking-wider text-gray-400 max-w-screen-md font-custom text-sm">
                    My second attempt at a personal website. Displaying
                    information about me, as well as projects I have undertaken.
                  </p>
                </div>
                <div class="px-6 pt-0 pb-2">
                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">
                    React
                  </span>
                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">
                    Next JS
                  </span>
                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">
                    Tailwind CSS
                  </span>
                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">
                    Vercel
                  </span>

                  <div className="text-2xl flex gap-6 py-0 text-gray-400 pt-2 ">
                    <a
                      className="hover:text-gray-500 transition ease-in-out duration-200"
                      href="https://github.com/sheeehy/v2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                </div>
              </div>

              {/* Stock-Control PROJECT */}
              <div class="max-w-xs bg-dark-blue py-4 px-1 rounded-custom outer-glow hover:select-none">
                <div class="px-3 py-2">
                  <div class="text-xl pt-1 pb-3 px-2 font-extrabold text-glow">
                    Stock Control System
                  </div>
                  <p class="text-md pt-1 pb-1 px-2 leading-6 tracking-wider text-gray-400 max-w-screen-md font-custom text-sm">
                    A retail stock control system. Built for both staff and
                    customers. Allows users to track, update and purchase stock.
                    Also features a GUI using JavaFX.
                  </p>
                </div>
                <div class="px-6 pt-0 pb-2">
                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">
                    Java
                  </span>
                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">
                    JavaFX
                  </span>

                  <div className="text-2xl flex gap-6 py-0 text-gray-400 pt-2 ">
                    <a
                      className="hover:text-gray-500 transition ease-in-out duration-200"
                      href="https://github.com/sheeehy/Stock-Control-System"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                </div>
              </div>
              {/* v2 Portfolio PROJECT */}
              <div class="max-w-xs bg-dark-blue py-4 px-1 rounded-custom outer-glow hover:select-none">
                <div class="px-3 py-2">
                  <div class="text-xl pt-1 pb-3 px-2 font-extrabold text-glow">
                    Personal Website v1
                  </div>
                  <p class="text-md pt-1 pb-1 px-2 leading-6 tracking-wider text-gray-400 max-w-screen-md font-custom text-sm">
                    My first attempt at a personal website. Features some of my
                    project, as well as what I'm currently learning.
                  </p>
                </div>
                <div class="px-6 pt-0 pb-2">
                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">
                    JavaScript
                  </span>
                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">
                    HTML
                  </span>
                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">
                    CSS
                  </span>
                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">
                    Vercel
                  </span>

                  <div className="text-2xl flex gap-6 py-0 text-gray-400 pt-2 ">
                    <a
                      className="hover:text-gray-500 transition ease-in-out duration-200"
                      href="https://github.com/sheeehy/v1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                </div>
              </div>
              {/* SCRIPT PROJECT */}
              <div class="max-w-xs bg-dark-blue py-4 px-1 rounded-custom outer-glow hover:select-none">
                <div class="px-3 py-2">
                  <div class="text-xl pt-1 pb-3 px-2 font-extrabold text-glow">
                    Retail Checkout Scripts
                  </div>
                  <p class="text-md pt-1 pb-1 px-2 leading-6 tracking-wider text-gray-400 max-w-screen-md font-custom text-sm">
                    Automatic checkout scripts for Irish retailers, allowing
                    users to purchase limited items faster. Also allows users to
                    automate the process. Built with Selenium.
                  </p>
                </div>
                <div class="px-6 pt-0 pb-2">
                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">
                    Python
                  </span>
                  <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">
                    Selenium
                  </span>

                  <div className="text-2xl flex gap-6 py-0 text-gray-400 pt-2 ">
                    <a
                      className="hover:text-gray-500 transition ease-in-out duration-200"
                      href="https://github.com/sheeehy/Irish-Checkout-Scripts"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center h-screen py-64">
            <div className="bg-dark-blue flex flex-col items-center pt-6 pb-8 px-6 rounded-custom outer-glow custom-width hover:select-none ">
              <div className="max-w-md text-center">
                <h2 className="text-4xl pb-2 font-extrabold text-glow">
                  Get In Touch
                </h2>
                <p className="text-lg pb-6 pt-1 leading-8 tracking-wider text-gray-400 max-w-screen-md font-custom">
                  I'm currently a full-time student, but don't hesitate to
                  contact me if you have a question. I’ll do my best to get back
                  to you! :)
                </p>
              </div>
              <div className="bg-dark-blue py-2  w-48 rounded-custom outer-glow flex justify-center">
                <a
                  href="mailto:jackhughsheehy@gmail.com"
                  className="flex justify-center"
                >
                  <h1 className="text-xl pb-0 font-extrabold text-glow">
                    Contact Me
                  </h1>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
