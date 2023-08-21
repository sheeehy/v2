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
        <link rel="icon" href="public/me.png" sizes="any" />
      </Head>

      <main className="bg-dark-blue px-10 text-gray-100 font-raleway ">
        <div className="animate-fade-in">
          <nav className="pt-10 mb-12 flex justify-between top-0 bg-transparent">
            <h1 className="text-xl font-extrabold hover:select-none hidden sm:block bg-dark-blue px-5 rounded-lg transition-transform duration-300 hover:-translate-y-1 animate-fade-in delay-1">
              <Link href="/">jack sheehy</Link>
            </h1>

            <ul className="flex items-center animate-fade-in delay-2">
              <li className="font-small tracking-wider ml-8 transition-transform duration-300">
                <a className="cursor-pointer text-white-to-gradient font-small tracking-wider ml-8">
                  {" "}
                  Gaeilge{" "}
                </a>
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
          <section className="flex flex-col items-center justify-center h-screen pt-32">
            <div className="bg-dark-blue flex items-start pl-8 py-6 px-6 mx-auto rounded-custom outer-glow custom-width hover:select-none ">
              <div className="max-w-lg ">
                <h2 className="text-4xl pb-2 font-extrabold text-glow">
                  Business Computing student at TU Dublin.
                </h2>
                <p className="text-xl pb-2 pt-1 leading-8 tracking-wider text-gray-400 max-w-screen-md font-custom">
                  Hi, I'm <span className="outer-glow1">Jack Sheehy</span>. I'm
                  a hard-working Business Computing student at TU Dublin, based
                  in Wicklow, Ireland.
                </p>

                <div className="text-3xl flex gap-6 py-0 text-gray-400 ">
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
              <div className="hidden custom1:block pl-5 appear-later">
                <Image className="image-size" src={me} />
              </div>
            </div>

            <div class="flex flex-col items-center justify-center example example--1 show-after-5s">
              <span class="relative block h-12 w-6 border-1 border-white rounded-full scroll-icon">
                <span class="absolute left-1/2 top-2.5 h-4 w-1 -ml-0.5 rounded-full overflow-hidden scroll-icon__wheel-outer">
                  <span class="block h-full w-full rounded-full bg-white scroll-icon__wheel-inner"></span>
                </span>
              </span>
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
                  className="image-size2 self-start pb-0 pl-0 max-2xl:hidden"
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
                Javascript, Python and more. In the future, I'd like to learn
                C#.
              </p>
              <p className="text-md py-0 leading-6 tracking-wider text-gray-400 max-w-screen-md font-custom ">
                My interest in technology is not limited to software but extends
                to hardware as well. From building custom PCs to tinkering with
                electronic devices.
              </p>
              <div className="flex space-x-4 pt-5  flex-wrap ">
                <Image
                  src={Image2}
                  alt="Java Icon"
                  className="w-10 h-10 max-2xl:hidden greyscale"
                />
                <Image
                  src={Image3}
                  alt="JavaScript Icon"
                  className="w-10 h-10 max-2xl:hidden greyscale"
                />
                <Image
                  src={Image5}
                  alt="Python Icon"
                  className="w-10 h-10 max-2xl:hidden greyscale"
                />
                <Image
                  src={Image6}
                  alt="React Icon"
                  className="w-11 h-10 max-2xl:hidden greyscale"
                />
                <Image
                  src={Image7}
                  alt="Spring Icon"
                  className="w-11 h-11 max-2xl:hidden greyscale"
                />
                <Image
                  src={Image9}
                  alt="Vim Icon"
                  className="w-10 h-10 max-2xl:hidden greyscale"
                />
                <Image
                  src={Image1}
                  alt="Git Icon"
                  className="w-10 h-10 max-2xl:hidden greyscale"
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
                  className="px-3  rounded-custom pt-2 opacity-100  transition-opacity duration-500   w-80 h-52"
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
                  className="px-3  rounded-custom pt-2 opacity-100 transition-opacity duration-500   w-80 h-52"
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
                    secure user-authentication. 60+ active paid members.
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
              {/* JAVA API PROJECT */}
              <div class="max-w-screen-custom2 bg-dark-blue py-4 px-2 rounded-custom outer-glow hover:select-none ">
                <Image
                  src={Project3}
                  className="px-3  rounded-custom pt-2 opacity-100 transition-opacity duration-500   w-80 h-52"
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
              {/* PYTHON SCRIPT PROJECT */}
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

              {/* EVENT-TICKETING PROJECT */}
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

          <section className="flex items-center justify-center ">
            <p class="textCustom">
              <span className="text-white">Universe brings together</span> the
              world’s developers, enterprise leaders, and security professionals
              for two days of interactive sessions on
              <svg
                className="inlineSvg"
                width="45"
                height="45"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1820_40340)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.6623 35.0814C29.5148 35.0814 37.3332 28.0135 37.3332 26.2269V21.8575C37.1713 20.4019 35.7779 17.8697 33.6202 16.9707C33.5896 16.807 33.5631 16.6378 33.5355 16.4615C33.4688 16.035 33.3955 15.5665 33.2403 15.0325C33.7097 13.8473 33.8333 12.5054 33.8333 11.1707C33.8333 9.139 33.5359 7.0423 32.2168 5.37274C30.8659 3.66282 28.7304 2.75033 25.8598 2.43138C23.0463 2.11876 20.5826 2.51132 18.9914 4.2162C18.8759 4.33992 18.7592 4.46872 18.658 4.60031C18.5569 4.46872 18.4487 4.33992 18.3332 4.2162C16.742 2.51132 14.2783 2.11876 11.4648 2.43138C8.59425 2.75033 6.45874 3.66282 5.10781 5.37274C3.78877 7.0423 3.49138 9.139 3.49138 11.1707C3.49138 12.5054 3.61493 13.8473 4.08437 15.0325C3.92917 15.5665 3.85589 16.0349 3.78916 16.4614C3.76156 16.6378 3.73508 16.807 3.7044 16.9707C1.54678 17.8697 0.153316 20.4019 -0.00854492 21.8575V26.2269C-0.00854492 28.0135 7.80987 35.0814 18.6623 35.0814ZM25.4734 5.90997C23.0369 5.63926 22.0006 6.1217 21.5502 6.60432C21.0745 7.11393 20.7136 8.18719 20.9865 10.3703C21.1982 12.0638 21.6918 13.2406 22.4277 13.9918C23.1256 14.7043 24.2581 15.254 26.25 15.254C28.4021 15.254 29.2356 14.7902 29.6142 14.3683C30.0322 13.9025 30.3333 13.0194 30.3333 11.1707C30.3333 9.38417 30.0474 8.27254 29.4706 7.54248C28.9257 6.85277 27.8529 6.17436 25.4734 5.90997ZM15.7776 6.60432C15.3272 6.1217 14.2909 5.63926 11.8544 5.90997C9.47493 6.17436 8.40211 6.85277 7.85721 7.54248C7.28041 8.27254 6.99447 9.38417 6.99447 11.1707C6.99447 13.0194 7.29558 13.9025 7.71361 14.3683C8.0922 14.7902 8.92571 15.254 11.0778 15.254C13.0697 15.254 14.2022 14.7043 14.9001 13.9918C15.6359 13.2406 16.1296 12.0638 16.3413 10.3703C16.6142 8.18719 16.2533 7.11393 15.7776 6.60432ZM18.6624 31.6173C23.9821 31.6173 29.3574 29.0273 30.3333 28.2732V18.344L30.2794 18.0744C29.1357 18.5636 27.7719 18.754 26.25 18.754C23.5752 18.754 21.4445 17.9898 19.9274 16.441C19.4164 15.9193 19.0015 15.3353 18.6667 14.7079C18.3318 15.3353 17.9084 15.9193 17.3973 16.441C15.8802 17.9898 13.7496 18.754 11.0748 18.754C9.55289 18.754 8.18904 18.5636 7.04536 18.0744L6.99146 18.344V28.2732C7.96738 29.0273 13.3427 31.6173 18.6624 31.6173Z"
                    fill="#A371F7"
                  />
                  <path
                    d="M14.5833 21.0873C15.5498 21.0873 16.3333 21.8708 16.3333 22.8373V26.3373C16.3333 27.3038 15.5498 28.0873 14.5833 28.0873C13.6168 28.0873 12.8333 27.3038 12.8333 26.3373V22.8373C12.8333 21.8708 13.6168 21.0873 14.5833 21.0873Z"
                    fill="#A371F7"
                  />
                  <path
                    d="M24.5 22.8373C24.5 21.8708 23.7165 21.0873 22.75 21.0873C21.7835 21.0873 21 21.8708 21 22.8373V26.3373C21 27.3038 21.7835 28.0873 22.75 28.0873C23.7165 28.0873 24.5 27.3038 24.5 26.3373V22.8373Z"
                    fill="#A371F7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1820_40340">
                    <rect width="37.3333" height="37.3333" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              AI,
              <svg
                className="inlineSvg"
                width="45"
                height="45"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.9111 0.31048C19.1016 0.0514556 18.2315 0.0514542 17.4221 0.310478L5.17208 4.23047C3.48086 4.77167 2.33325 6.34382 2.33325 8.11953V16.333C2.33325 19.9871 3.07812 23.7587 5.37405 27.258C7.66798 30.7545 11.4061 33.8207 17.1151 36.2523C18.1045 36.6737 19.2287 36.6737 20.2181 36.2523C25.927 33.8207 29.6652 30.7545 31.9591 27.258C34.2551 23.7587 34.9999 19.9871 34.9999 16.333V8.11953C34.9999 6.34382 33.8524 4.77167 32.1612 4.23047L19.9111 0.31048ZM18.4888 3.64397C18.6044 3.60696 18.7287 3.60696 18.8444 3.64397L31.0944 7.56397C31.3359 7.64127 31.4999 7.86588 31.4999 8.11953V16.333C31.4999 19.5024 30.859 22.5544 29.0327 25.3381C27.2045 28.1248 24.0837 30.8016 18.8466 33.0323C18.7335 33.0804 18.5997 33.0804 18.4866 33.0323C13.2495 30.8016 10.1288 28.1248 8.30045 25.3381C6.4741 22.5544 5.83325 19.5024 5.83325 16.333V8.11953C5.83325 7.86588 5.99719 7.64127 6.23881 7.56397L18.4888 3.64397ZM26.3206 14.6538C27.0041 13.9704 27.0041 12.8624 26.3206 12.179C25.6372 11.4955 24.5293 11.4955 23.8459 12.179L16.9166 19.1082L14.654 16.8456C13.9706 16.1622 12.8626 16.1622 12.1791 16.8456C11.4957 17.529 11.4957 18.6371 12.1791 19.3205L15.6791 22.8205C16.3626 23.5039 17.4706 23.5039 18.154 22.8205L26.3206 14.6538Z"
                  fill="#298FFF"
                />
              </svg>
              security, and the
              <svg
                className="inlineSvg"
                width="45"
                height="45"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.7457 7.17077L22.3374 1.57901C22.7049 1.21153 23.3332 1.47179 23.3332 1.99149V13.1749C23.3332 13.6946 22.7049 13.9549 22.3374 13.5874L16.7457 7.99572C16.5179 7.76791 16.5179 7.39857 16.7457 7.17077ZM7.58325 5.83325C6.61676 5.83325 5.83325 6.61676 5.83325 7.58325C5.83325 8.54974 6.61676 9.33325 7.58325 9.33325C8.54974 9.33325 9.33325 8.54974 9.33325 7.58325C9.33325 6.61676 8.54974 5.83325 7.58325 5.83325ZM2.33325 7.58325C2.33325 4.68376 4.68376 2.33325 7.58325 2.33325C10.4827 2.33325 12.8333 4.68376 12.8333 7.58325C12.8333 9.86913 11.3723 11.8138 9.33325 12.5345V24.7986C11.3723 25.5194 12.8333 27.464 12.8333 29.7499C12.8333 32.6493 10.4827 34.9999 7.58325 34.9999C4.68376 34.9999 2.33325 32.6493 2.33325 29.7499C2.33325 27.464 3.79418 25.5194 5.83325 24.7986V12.5345C3.79418 11.8138 2.33325 9.86913 2.33325 7.58325ZM25.6666 5.83325H23.3333V9.33325H25.6666C26.9553 9.33325 27.9999 10.3779 27.9999 11.6666V24.7986C25.9608 25.5194 24.4999 27.464 24.4999 29.7499C24.4999 32.6493 26.8505 34.9999 29.7499 34.9999C32.6493 34.9999 34.9999 32.6493 34.9999 29.7499C34.9999 27.464 33.539 25.5194 31.4999 24.7986V11.6666C31.4999 8.44493 28.8882 5.83325 25.6666 5.83325ZM5.83325 29.7499C5.83325 28.7835 6.61676 27.9999 7.58325 27.9999C8.54974 27.9999 9.33325 28.7835 9.33325 29.7499C9.33325 30.7164 8.54974 31.4999 7.58325 31.4999C6.61676 31.4999 5.83325 30.7164 5.83325 29.7499ZM27.9999 29.7499C27.9999 28.7835 28.7835 27.9999 29.7499 27.9999C30.7164 27.9999 31.4999 28.7835 31.4999 29.7499C31.4999 30.7164 30.7164 31.4999 29.7499 31.4999C28.7835 31.4999 27.9999 30.7164 27.9999 29.7499Z"
                  fill="#E85AAD"
                />
              </svg>
              developer experience. Come for the learning, stay for the
              <svg
                className="inlineSvg"
                width="45"
                height="45"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.4702 1.28269C30.3101 0.845222 29.6913 0.845222 29.5312 1.28269L29.0532 2.5883C28.2944 4.66083 26.6613 6.29394 24.5888 7.05271L23.2832 7.5307C22.8457 7.69086 22.8457 8.30958 23.2832 8.46975L24.5888 8.94774C26.6613 9.70651 28.2944 11.3396 29.0532 13.4121L29.5312 14.7178C29.6913 15.1552 30.3101 15.1552 30.4702 14.7178L30.9482 13.4121C31.707 11.3396 33.3401 9.70651 35.4126 8.94774L36.7182 8.46975C37.1557 8.30958 37.1557 7.69086 36.7182 7.5307L35.4126 7.05271C33.3401 6.29394 31.707 4.66083 30.9482 2.5883L30.4702 1.28269Z"
                  fill="#E3B341"
                />
                <path
                  d="M15.997 8.72505C15.6567 7.79543 14.3419 7.79542 14.0016 8.72505L12.9858 11.4995C11.3735 15.9036 7.9031 19.3739 3.49899 20.9863L0.724565 22.0021C-0.205063 22.3424 -0.205063 23.6572 0.724564 23.9975L3.49899 25.0133C7.9031 26.6257 11.3735 30.096 12.9858 34.5001L14.0016 37.2746C14.3419 38.2042 15.6567 38.2042 15.997 37.2746L17.0128 34.5001C18.6252 30.096 22.0955 26.6257 26.4996 25.0133L29.2741 23.9975C30.2037 23.6572 30.2037 22.3424 29.2741 22.0021L26.4996 20.9863C22.0955 19.3739 18.6252 15.9036 17.0128 11.4995L15.997 8.72505Z"
                  fill="#E3B341"
                />
              </svg>
              fun.
              <span className="text-white"> We’ll see you there!</span>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
