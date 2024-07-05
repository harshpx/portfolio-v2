"use client";
import React,{useState, useEffect, useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowTrendUp, FaRegCopyright } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { IoDocumentAttach } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTerminalFill } from "react-icons/bs";
import { IoLayers } from "react-icons/io5";
import { AiOutlineApi } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiVercel } from "react-icons/si";

import Nav from "@/components/Nav";
import Crousel from "@/components/Crousel";
import useHover from "@/hooks/useHover";

import codelab1 from "@/assets/codelab1.png";
import dp1 from "@/assets/dp1.jpeg";
import dp2 from "@/assets/dp2.jpg";
import dp3 from "@/assets/dp3.webp";
import dp4 from "@/assets/dp4.webp";
import portfolio1 from "@/assets/portfolio1.png";
import ticTacToe from "@/assets/tic-tac-toe.png";
import memoize1 from "@/assets/memoize1.png";
import deepfake1 from "@/assets/deepfakeDetection.png";
import dogBreed1 from "@/assets/dogBreed1.png";
import aulacube from "@/assets/aulacube.png";
import aoc from "@/assets/aoc.png";
import weather from "@/assets/weather.png";
import dashboard from "@/assets/dashboard.png";
import comments from "@/assets/comments.png";
import rentify from "@/assets/rentify.png";
import miniBlog from "@/assets/miniBlog.png";
import tealfox from "@/assets/tealfox.png";
import virtualAssistantReferee from "@/assets/var.png";

const Page = () => {

    const redirect = (url) => {
        window.open(url, "_blank");
    }

    const linkedinRef = useRef(null);
    const githubRef = useRef(null);
    const instagramRef = useRef(null);
    // const resumeRef = useRef(null);

    const linkedinHover = useHover(linkedinRef);
    const githubHover = useHover(githubRef);
    const instagramHover = useHover(instagramRef);
    // const resumeHover = useHover(resumeRef);

    return (
        <div className="min-h-screen min-w-full bg-black text-white p-2 flex flex-col gap-2">
            {/* 1. Home */}
            <div id="Home" className={`w-full md:h-[95vh] grid gap-2 grid-cols-1 md:grid-cols-2`}>
                {/* 1st card: intro */}
                <div className={`rounded-[30px] border border-neutral-600 flex flex-col items-start justify-end gap-5 p-10 bg-gradient-to-b from-neutral-800 to-black min-h-[40vh] md:min-h-fit md:w-full`}>
                    <div className="w-full text-xl">Harsh Priye</div>
                    <div className="w-full text-4xl text-wrap">Full Stack Developer,<br/>Machine Learning Enthusiast</div>
                    <div className="w-full flex flex-wrap items-center gap-2 md:gap-4">
                        <Link href="https://linkedin.com/in/harshpx" target="_blank" className="flex items-center gap-2" ref={linkedinRef}>
                            <FaLinkedin size={28}/>
                            <span className={`transition-all duration-150 ${linkedinHover ? "w-[60px]" : "w-0 overflow-hidden"}`}>Linkedin</span>
                        </Link>
                        <Link href="https://github.com/harshpx" target="_blank" className="flex items-center gap-2" ref={githubRef}>
                            <FaGithub size={28}/>
                            <span className={`transition-all duration-150 ${githubHover ? "w-[50px]" : "w-0 overflow-hidden"}`}>Github</span>
                        </Link>
                        <Link href="https://www.instagram.com/harshhh.hhhh" target="_blank" className="flex items-center gap-2" ref={instagramRef}>
                            <RiInstagramFill size={30}/>
                            <span className={`transition-all duration-150 ${instagramHover ? "w-[80px]" : "w-0 overflow-hidden"}`}>Instagram</span>
                        </Link>
                        {/* <Link href="https://drive.google.com/file/d/1iaFFOSe93Svnnb1n9UaL7GcM-bJsV6R4/view?usp=sharing" target="_blank" className="flex items-center gap-2" ref={resumeRef}>
                            <IoDocumentAttach size={30}/>
                            <span className={`transition-all duration-150 ${resumeHover ? "w-[50px]" : "w-0 overflow-hidden"}`}>Resume</span>
                        </Link> */}
                    </div>
                    <div className="w-full sm:w-1/2 md:w-2/3 font-[300]">Based in New Delhi, IN<br/>Building Reliable, Efficient and Robust Web Apps.</div>
                    <Link href="https://drive.google.com/file/d/1iaFFOSe93Svnnb1n9UaL7GcM-bJsV6R4/view?usp=sharing" target="_blank" className="flex items-center justify-center gap-2 flex-nowrap text-[14px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[160px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">
                        <div className=""><IoDocumentAttach size={20}/></div>
                        <span className="w-full">View Resume</span>
                    </Link >
                </div>
                {/* 2nd card: latest project */}
                <div className={`rounded-[30px] border border-neutral-600 h-[80vh] md:h-full md:row-span-2 relative overflow-hidden flex flex-col gap-4 p-10`}>
                    <div className="text-lg">Latest Project</div>
                    <div className="text-4xl font-[300]">CodeLab</div>
                    <div>Codelab is an online code compiler that is specifically designed for competitive programmers.</div>
                    <div className="flex items-center justify-start gap-2">
                        <button onClick={()=>redirect('https://codelab-harshpx.vercel.app/')} className="text-[14px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[130px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Check out</button>
                        <button className="flex items-center justify-center flex-nowrap text-[14px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[160px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">
                            <Link href="#Projects" className="w-full text-nowrap">View Projects</Link>
                            <div className=""><FaArrowTrendUp size={20}/></div>
                        </button>
                    </div>
                    <Image src={codelab1} priority alt="CodeLab Image" className="rounded-[20px] max-w-[100vh] h-auto border border-neutral-600 relative left-0 bottom-[-20px] sm:bottom-[-20px] md:bottom-[0px]"/>
                </div>
                {/* 3rd card: insights */}
                <div className={`grid gap-2 min-h-[70vh] grid-cols-1 md:grid-cols-2 md:w-full md:min-h-fit`}>
                    <div className="h-full w-full p-10 rounded-[30px] border border-neutral-600 overflow-hidden relative flex flex-col">
                        <div className="w-full mb-10 text-lg">Web Insights</div>
                        <div className="flex items-start justify-start gap-1 mb-8">
                            <div className="text-7xl">4x</div>
                            <FaArrowTrendUp size={30} className="text-green-500"/>
                        </div>
                        <div className="z-20">Webpages are on average nearly four times larger than they were in 2010.</div>
                        <div className="rounded-[100%] overflow-hidden absolute inset-x-0 bottom-[-14vh] h-[20vh] w-full bg-green-500 opacity-70 blur-2xl"></div>
                    </div>
                    <div className="h-full w-full p-10 rounded-[30px] border border-neutral-600 overflow-hidden relative flex flex-col justify-between">
                        <div className="w-full mb-10 text-lg">Services</div>
                        <div className="flex flex-col items-start gap-8">
                            <span className="font-[300]">From UI/UX<br/>to Full Stack Web Apps, Backend Design and ML integration,<br/>I have services to offer everyone.</span>
                            <button className="flex items-center justify-center flex-nowrap text-[14px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[160px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">
                                <Link href="#Services" className="w-full">View Services</Link>
                                <FaArrowTrendUp size={20}/>
                            </button>
                        </div>
                        <div className="sphere"/>
                    </div>
                </div>
            </div>
            {/* 2. About */}
            <div id="About" className={`w-full grid grid-cols-1 gap-2 md:h-[90vh] md:grid-cols-2`}>
                {/* my journey */}
                <div className={`rounded-[30px] border border-neutral-600 h-[80vh] md:h-full md:w-full md:row-span-2 relative overflow-hidden flex flex-col gap-7 p-10`}>
                    <div className="text-4xl font-[300]">My Journey so far</div>
                    <div>I dived into web dev and started developing websites from 2022, after that there was no stopping. I&apos;d worked for multiple startups, NGOs and big organizations and also done a lot of freelance.</div>
                    <div>I enjoy learning new tools, tech, and methods to make my development the best it can be.</div>

                    <Image src={dp2} alt="CodeLab Image" className="rounded-[10px] max-w-[50vh] sm:max-w-[90vh] md:max-w-full lg:max-w-[100vh] h-auto border border-neutral-600 "/>
                </div>
                {/* about */}
                <div className={`rounded-[30px] border border-neutral-600 flex flex-col items-start justify-end gap-5 p-10 bg-gradient-to-b from-neutral-800 to-black min-h-[40vh] md:min-h-fit md:w-full`}>
                    <div className="w-full text-4xl font-[300] text-wrap">About</div>
                    <div className="w-full sm:w-3/4 font-[200]">Hi there! Nice to meet you. My name is Harsh.<br/>I&apos;m a passionate web developer based in New Delhi, India.<br/>I love to spend my time building robust, efficient, reliable, modern, and low-carbon websites.</div>
                </div>
                
                <div className={`flex flex-col justify-end gap-6 p-10 w-full min-h-[70vh] md:min-h-fit border border-neutral-600 rounded-[30px] bg-[#cccccc] relative overflow-hidden`}>
                    <div className="text-4xl font-[300] text-black z-20">Let&apos;s build<br/>something great</div>
                    <div className="font-[300] text-black w-full md:w-2/3 z-20">Interested in starting your own website project with me? Excellent! I&apos;d love to talk to you about your idea.</div>
                    <button className="text-black hover:text-white hover:bg-black rounded-[30px] border border-neutral-600 px-4 py-2 w-fit transition-all duration-300">
                        <Link href='#Contact' className="w-full">Get in Touch</Link>
                    </button>
                    <div className="absolute right-[-250px] z-10 w-[50vh] h-[80vh] blur-xl bg-blue-600 opacity-70 rotate-[-30deg] rounded-full"></div>
                    <div className="absolute right-[-50px] w-[40vh] h-[80vh] blur-xl bg-blue-300 opacity-60 rotate-[-90deg] rounded-full"></div>
                </div>
            </div>
            {/* tech stack */}
            <div id="Stack" className="flex flex-col items-center justify-start p-10 gap-5 w-full min-h-[40vh] rounded-[30px] border border-neutral-600 bg-gradient-to-b from-neutral-800 to-black">
                <h1 className="text-5xl font-[300]">My Stack</h1>
                <Crousel/>
            </div>
            {/* 3. education & experience */}
            <div id="Ed&Exp" className="w-full grid gap-2 grid-cols-1 md:grid-cols-2 min-h-[60vh]">
                {/* experience */}
                <div className=" order-last md:order-first rounded-[30px] border border-neutral-600 p-10 h-full flex flex-col items-start gap-10 bg-[#cccccc] text-black relative overflow-hidden">
                    <div className="absolute right-[-350px] md:right-[-250px] top-[-400px] z-10 w-[50vh] h-[80vh] blur-xl bg-blue-600 opacity-70 rotate-[-15deg] md:rotate-[-30deg] rounded-full"/>
                    <div className="absolute right-[-200px] md:right-[-50px] top-[-400px] w-[40vh] h-[80vh] blur-xl bg-blue-300 opacity-60 rotate-[-90deg] rounded-full"/>
                    <h1 className="text-5xl font-[300] z-20">Experience</h1>
                    <div className="w-full flex flex-col gap-10 z-20">
                        {/* hostkicker */}
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-0">
                                <span className="text-2xl font-[300]">Hostkicker</span>
                                <span className="font-[300] text-neutral-700">Junior Full Stack Developer</span>
                                <span className="font-[300] text-neutral-700">Jun 2024 - Present</span>
                            </div>
                            <div className="flex flex-col font-[300]">
                                <span>&bull; Working on Advice on Click Application</span>
                                <span>&bull; Used Nivo/Line for better data representation in UI</span>
                                <span>&bull; Improved data aggregation logic for better data-grouping during visualization.</span>
                            </div>
                            <div className="flex items-start justify-start gap-4">
                                <span>Skills:</span>
                                <div className="flex flex-wrap w-full md:w-2/3 items-center gap-x-3">
                                    <span className="font-[300]">&bull; Next.js</span>
                                    <span className="font-[300]">&bull; Typescript</span>
                                    <span className="font-[300]">&bull; Tailwind CSS</span>
                                    <span className="font-[300]">&bull; Git</span>
                                    <span className="font-[300]">&bull; Bitbucket</span>
                                    <span className="font-[300]">&bull; Jira</span>
                                    <span className="font-[300]">&bull; Firebase</span>
                                    <span className="font-[300]">&bull; Cloud Firestore</span>
                                    <span className="font-[300]">&bull; CI/CD</span>
                                </div>
                            </div>
                        </div>
                        {/* aulacube */}
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-0">
                                <span className="text-2xl font-[300]">Aulacube</span>
                                <span className="font-[300] text-neutral-700">Frontend Development Intern</span>
                                <span className="font-[300] text-neutral-700">Mar 2024 - Jul 2024</span>
                            </div>
                            <div className="flex flex-col font-[300]">
                                <span>&bull; Introduced tailwind to the AulaEdge website for cross-device responsiveness.</span>
                                <span>&bull; Improved Classroom setup by working on &apos;optional subjects&apos;, where individual students could be assigned to specific subjects.</span>
                                <span>&bull; Worked on WhatApp messaging module for school notifications.</span>
                                <span>&bull; Worked on Lesson Plans and Assignments feature for Curriculum Design.</span>
                            </div>
                            <div className="flex items-start justify-start gap-4">
                                <span>Skills:</span>
                                <div className="flex flex-wrap w-full md:w-2/3 items-center gap-x-3">
                                    <span className="font-[300]">&bull; React.js</span>
                                    <span className="font-[300]">&bull; Typescript</span>
                                    <span className="font-[300]">&bull; Tailwind CSS</span>
                                    <span className="font-[300]">&bull; Git</span>
                                    <span className="font-[300]">&bull; Github</span>
                                    <span className="font-[300]">&bull; Ant Design</span>
                                    <span className="font-[300]">&bull; CI/CD</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* education */}
                <div className="rounded-[30px] border border-neutral-600 p-10 h-full flex flex-col items-start gap-10 relative overflow-hidden bg-gradient-to-b from-neutral-800 to-black">
                    <div className="absolute right-[-400px] md:right-[-300px] bottom-[-300px] z-10 w-[50vh] h-[80vh] blur-2xl bg-green-600 opacity-80 rotate-[45deg] rounded-full"/>
                    <div className="absolute right-[30px] bottom-[-500px] md:bottom-[-400px] w-[40vh] h-[80vh] blur-xl bg-green-300 opacity-40 rotate-[-90deg] rounded-full"/>
                    <h1 className="text-5xl font-[300]">Education</h1>
                    <div className="w-full flex flex-col gap-4">
                        {/* engg */}
                        <div className="flex flex-col gap-2">
                            <span className="text-2xl font-[300]">Bachelor of Technology (B.Tech)<br/>in Computer Science</span>
                            <span className="font-[300] text-neutral-300">Netaji Subhas University of Technology (NSUT), New Delhi</span>
                            <div className="flex items-center gap-5">
                                <span className="font-[300] text-neutral-300">2020-2024</span>
                                <span className="font-[300] text-neutral-300">Grade: 7.63</span>
                            </div>
                            <div className="flex flex-wrap w-full md:w-2/3 items-center gap-x-3">
                                <span className="font-[300]">&bull; C++</span>
                                <span className="font-[300]">&bull; Data Structures</span>
                                <span className="font-[300]">&bull; Algorithms</span>
                                <span className="font-[300]">&bull; DBMS</span>
                                <span className="font-[300]">&bull; OS</span>
                                <span className="font-[300]">&bull; Computer Networks</span>
                                <span className="font-[300]">&bull; Machine Learning</span>
                                <span className="font-[300]">&bull; Web Development</span>
                            </div>
                        </div>
                    </div>
                    {/* 12th */}
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <span className="text-2xl font-[300]">AISSCE (CBSE Class 12th)</span>
                            <span className="font-[300] text-neutral-300">Vishwa Bharati Public School, New Delhi</span>
                            <div className="flex items-center gap-5">
                                <span className="font-[300] text-neutral-300">2018-2019</span>
                                <span className="font-[300] text-neutral-300">Score: 87%</span>
                            </div>
                            <div className="flex flex-wrap w-full md:w-2/3 items-center gap-x-3">
                                <span className="font-[300]">&bull; Physics</span>
                                <span className="font-[300]">&bull; Chemistry</span>
                                <span className="font-[300]">&bull; Mathematics</span>
                                <span className="font-[300]">&bull; Engilsh</span>
                            </div>
                        </div>
                    </div>
                    {/* 10th */}
                    <div className="w-full flex flex-col gap-4 z-20">
                        <div className="flex flex-col gap-2">
                            <span className="text-2xl font-[300]">HSC (CBSE Class 10th)</span>
                            <span className="font-[300] text-neutral-300">Vishwa Bharati Public School, New Delhi</span>
                            <div className="flex items-center gap-5">
                                <span className="font-[300] text-neutral-300">2016-2017</span>
                                <span className="font-[300] text-neutral-300">Grade: 10.0</span>
                            </div>
                            <div className="flex flex-wrap w-full md:w-2/3 items-center gap-x-3">
                                <span className="font-[300]">&bull; General Science</span>
                                <span className="font-[300]">&bull; Mathematics</span>
                                <span className="font-[300]">&bull; Social Science</span>
                                <span className="font-[300]">&bull; English</span>
                                <span className="font-[300]">&bull; Hindi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 3. projects */}
            <div id="Projects" className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex flex-col items-start justify-end gap-6 p-10 rounded-[30px] border border-neutral-600 md:col-span-2 bg-gradient-to-b from-neutral-800 to-black md:min-h-[40vh]">
                    <span className="text-5xl font-[300]">Projects</span>
                    <span className="font-[300]">My work has crossed many sectors.<br/>I&apos;ve built websites for startups, household names, as well as a number of personal projects.<br/>Always with a focus on reliability and efficiency.</span>
                </div>
                {/* codelab */}
                <div className="flex flex-col gap-5 p-10 rounded-[30px] border border-neutral-600 h-[800px] relative overflow-hidden">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-4xl font-[300]">CodeLab</div>
                        <div className="text-neutral-300">Personal Project &bull; Web Dev &bull; Full-Stack</div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-green-500">&bull; Deployed</span>
                        <span className="text-green-500">&bull; Active</span>
                    </div>
                    <div className="text-neutral-300 w-full">Codelab is an online code compiler that is specifically designed for competitive programmers.</div>
                    <div className="flex flex-col items-start justify-start gap-0 w-full">
                        <span>Tech Stack:</span>
                        <div className="flex flex-wrap w-full items-center gap-x-3">
                            <span className="font-[300]">&bull; React.js</span>
                            <span className="font-[300]">&bull; JavaScript</span>
                            <span className="font-[300]">&bull; Vite</span>
                            <span className="font-[300]">&bull; Tailwind</span>
                            <span className="font-[300]">&bull; Ant Design</span>
                            <span className="font-[300]">&bull; Node.js</span>
                            <span className="font-[300]">&bull; Express.js</span>
                            <span className="font-[300]">&bull; MongoDB</span>
                            <span className="font-[300]">&bull; OAuth</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <button onClick={()=>redirect('https://codelab-harshpx.vercel.app/')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[130px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Check out</button>
                        <button onClick={()=>redirect('https://github.com/harshpx/CodeLab')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[150px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Source Code</button>
                    </div>
                    <Image src={codelab1} alt="CodeLab Image" className="rounded-[20px] max-w-[100vh] h-auto border border-neutral-600 relative left-0 bottom-[-20px] sm:bottom-[-20px] md:bottom-[0px]"/>
                </div>
                {/* portfolio */}
                <div className="flex flex-col gap-5 p-10 rounded-[30px] border border-neutral-600 h-[800px] relative overflow-hidden">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-4xl font-[300]">Personal Portfolio</div>
                        <div className="text-neutral-300">Portfolio &bull; Web Dev &bull; Frontend</div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-green-500">&bull; Deployed</span>
                        <span className="text-green-500">&bull; Active</span>
                    </div>
                    <div className="text-neutral-300 w-full">You are currently browsing my personal portfolio!</div>
                    <div className="flex flex-col items-start justify-start gap-0 w-full">
                        <span>Tech Stack:</span>
                        <div className="flex flex-wrap w-full items-center gap-x-3">
                            <span className="font-[300]">&bull; Next.js</span>
                            <span className="font-[300]">&bull; JavaScript</span>
                            <span className="font-[300]">&bull; Tailwind CSS</span>
                        </div>
                    </div>
                    {/* <div className="flex flex-wrap items-center gap-2">
                        <button className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[130px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Check out</button>
                        <button className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[150px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Source Code</button>
                    </div> */}
                    <Image src={portfolio1} alt="portfolio Image" className="rounded-[20px] max-w-[150vh] h-auto border border-neutral-600 relative left-0 bottom-[-20px] sm:bottom-[-20px] md:bottom-[0px]"/>
                </div>
                {/* tic tac toe */}
                <div className="flex flex-col gap-5 p-10 rounded-[30px] border border-neutral-600 h-[800px] relative overflow-hidden">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-4xl font-[300]">Mini Tic-Tac-Toe</div>
                        <div className="text-neutral-300">Freelance Project &bull; Web Dev &bull; Full-Stack</div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-green-500">&bull; Deployed</span>
                        <span className="text-yellow-500">&bull; Backend Not Active</span>
                    </div>
                    <div className="text-neutral-300 w-full">An online multiplayer tic tac toe game, with in-game chat.</div>
                    <div className="flex flex-col items-start justify-start gap-0 w-full">
                        <span>Tech Stack:</span>
                        <div className="flex flex-wrap w-full items-center gap-x-3">
                            <span className="font-[300]">&bull; JavaScript</span>
                            <span className="font-[300]">&bull; React.js</span>
                            <span className="font-[300]">&bull; Tailwind CSS</span>
                            <span className="font-[300]">&bull; Express.js</span>
                            <span className="font-[300]">&bull; Socket.io</span>
                            <span className="font-[300]">&bull; Websockets</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <button onClick={()=>redirect('https://mini-tic-tac-toe.vercel.app/')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[130px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Check out</button>
                        <button onClick={()=>redirect('https://github.com/harshpx/tic-tac-toe-socket')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[150px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Source Code</button>
                    </div>
                    <Image src={ticTacToe} alt="TicTacToe Image" className="rounded-[20px] max-w-[90vh] lg:max-w-[100vh] h-auto border border-neutral-600 relative left-0 bottom-[-20px] sm:bottom-[-20px] md:bottom-[0px]"/>
                </div>
                {/* memoize notes */}
                <div className="flex flex-col gap-5 p-10 rounded-[30px] border border-neutral-600 h-[800px] relative overflow-hidden">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-4xl font-[300]">Memoize Notes</div>
                        <div className="text-neutral-300">Personal Project &bull; Web Dev &bull; Full-Stack</div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-green-500">&bull; Deployed</span>
                        <span className="text-green-500">&bull; Active</span>
                    </div>
                    <div className="text-neutral-300 w-full">Memoize is a simple and intuitive notes app designed to help you organize your thoughts, ideas, and tasks effortlessly.</div>
                    <div className="flex flex-col items-start justify-start gap-0 w-full">
                        <span>Tech Stack:</span>
                        <div className="flex flex-wrap w-full items-center gap-x-3">
                            <span className="font-[300]">&bull; JavaScript</span>
                            <span className="font-[300]">&bull; React.js</span>
                            <span className="font-[300]">&bull; Tailwind CSS</span>
                            <span className="font-[300]">&bull; Framer</span>
                            <span className="font-[300]">&bull; Express.js</span>
                            <span className="font-[300]">&bull; Node.js</span>
                            <span className="font-[300]">&bull; MongoDB</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <button onClick={()=>redirect('https://memoize-notes.vercel.app/')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[130px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Check out</button>
                        <button onClick={()=>redirect('https://github.com/harshpx/memoize')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[150px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Source Code</button>
                    </div>
                    <Image src={memoize1} alt="Memoize Image" className="rounded-[20px] max-w-[120vh] lg:max-w-[150vh] h-auto border border-neutral-600 relative left-0 bottom-[-20px] sm:bottom-[-20px] md:bottom-[0px]"/>
                </div>
                {/* Aulacube */}
                <div className="flex flex-col gap-5 p-10 rounded-[30px] border border-neutral-600 h-[800px] relative overflow-hidden">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-4xl font-[300]">Aula Edge</div>
                        <div className="text-neutral-300">Work Project &bull; Aulacube &bull; Web Dev</div>
                    </div>
                    {/* <div className="flex flex-wrap items-center gap-2">
                        <span className="text-green-500">&bull; Deployed</span>
                        <span className="text-yellow-500">&bull; Backend Not Active</span>
                    </div> */}
                    <div className="text-neutral-300 w-full">A comprehensive school admin solution with a user-friendly interface & seamlessly integrated modules to enhance administrative efficiency.</div>
                    <div className="flex flex-col items-start justify-start gap-0 w-full">
                        <span>Tech Stack:</span>
                        <div className="flex flex-wrap w-full items-center gap-x-3">
                            <span className="font-[300]">&bull; React.js</span>
                            <span className="font-[300]">&bull; Typescript</span>
                            <span className="font-[300]">&bull; Ant Design</span>
                            <span className="font-[300]">&bull; Tailwind CSS</span>
                            <span className="font-[300]">&bull; Github</span>
                        </div>
                    </div>
                    {/* <div className="flex flex-wrap items-center gap-2">
                        <button className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[130px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Check out</button>
                        <button className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[150px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Source Code</button>
                    </div> */}
                    <Image src={aulacube} alt="Aulacube Image" className="rounded-[20px] max-w-[90vh] sm:max-w-[125vh] h-auto border border-neutral-600 relative left-0 bottom-[-20px] sm:bottom-[-20px] md:bottom-[0px]"/>
                </div>
                {/* hostkicker */}
                <div className="flex flex-col gap-5 p-10 rounded-[30px] border border-neutral-600 h-[800px] relative overflow-hidden">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-4xl font-[300]">Advice on Click</div>
                        <div className="text-neutral-300">Work Project &bull; Hostkicker &bull; Web Dev</div>
                    </div>
                    {/* <div className="flex flex-wrap items-center gap-2">
                        <span className="text-green-500">&bull; Deployed</span>
                        <span className="text-yellow-500">&bull; Backend Not Active</span>
                    </div> */}
                    <div className="text-neutral-300 w-full">Advice on Click is a Web based push-notification service, for automating targeted ads in websites.</div>
                    <div className="flex flex-col items-start justify-start gap-0 w-full">
                        <span>Tech Stack:</span>
                        <div className="flex flex-wrap w-full items-center gap-x-3">
                            <span className="font-[300]">&bull; Next.js</span>
                            <span className="font-[300]">&bull; Typescript</span>
                            <span className="font-[300]">&bull; Tailwind CSS</span>
                            <span className="font-[300]">&bull; Firebase</span>
                            <span className="font-[300]">&bull; Bitbucket</span>
                            <span className="font-[300]">&bull; Jira</span>
                        </div>
                    </div>
                    {/* <div className="flex flex-wrap items-center gap-2">
                        <button className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[130px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Check out</button>
                        <button className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[150px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Source Code</button>
                    </div> */}
                    <Image src={aoc} alt="AOC Image" className="rounded-[20px] max-w-[90vh] sm:max-w-[125vh] h-auto border border-neutral-600 relative left-0 bottom-[-20px] sm:bottom-[-20px] md:bottom-[0px]"/>
                </div>
                {/* deepfake detection */}
                <div className="flex flex-col gap-5 p-10 rounded-[30px] border border-neutral-600 h-[800px] relative overflow-hidden">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-4xl font-[300]">Deepfake Detection</div>
                        <div className="text-neutral-300">College Major Project &bull; Deep Learning &bull; Web Dev &bull; Full-Stack</div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-neutral-500">&bull; Not Deployed</span>
                        {/* <span className="text-green-500">&bull; Active</span> */}
                    </div>
                    <div className="text-neutral-300 w-full">A Full-Stack Deepfake Detection App, developed using TensorFlow, FastAPI and React.js</div>
                    <div className="flex flex-col items-start justify-start gap-0 w-full">
                        <span>Tech Stack:</span>
                        <div className="flex flex-wrap w-full items-center gap-x-3">
                            <span className="font-[300]">&bull; Tensorflow</span>
                            <span className="font-[300]">&bull; Python</span>
                            <span className="font-[300]">&bull; CNN</span>
                            <span className="font-[300]">&bull; OpenCV</span>
                            <span className="font-[300]">&bull; FastAPI</span>
                            <span className="font-[300]">&bull; React.js</span>
                            <span className="font-[300]">&bull; JavaScript</span>
                            <span className="font-[300]">&bull; Tailwind CSS</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        {/* <button className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[130px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Check out</button> */}
                        <button onClick={()=>redirect('https://github.com/harshpx/deepfake-detection')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[150px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Source Code</button>
                    </div>
                    <Image src={deepfake1} alt="Deepfake Image" className="rounded-[20px] max-w-[85vh] md:max-w-[80vh] lg:max-w-[95vh] xl:max-w-[100vh] h-auto border border-neutral-600 relative left-0 bottom-[-20px] sm:bottom-[-20px] md:bottom-[0px]"/>
                </div>
                {/* dog breed identifier */}
                <div className="flex flex-col gap-5 p-10 rounded-[30px] border border-neutral-600 h-[800px] relative overflow-hidden">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-4xl font-[300]">Dog Breed Identifier</div>
                        <div className="text-neutral-300">Personal Project &bull; Deep Learning &bull; Web Dev &bull; Full-Stack</div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-green-500">&bull; Deployed</span>
                        <span className="text-yellow-500">&bull; Backend Not Active</span>
                    </div>
                    <div className="text-neutral-300 w-full">Full-Stack Dog Breed Identifier web application, developed using Tensorflow, OpenCV, React and Tailwind</div>
                    <div className="flex flex-col items-start justify-start gap-0 w-full">
                        <span>Tech Stack:</span>
                        <div className="flex flex-wrap w-full items-center gap-x-3">
                            <span className="font-[300]">&bull; Python</span>
                            <span className="font-[300]">&bull; Tensorflow</span>
                            <span className="font-[300]">&bull; CNN</span>
                            <span className="font-[300]">&bull; FastAPI</span>
                            <span className="font-[300]">&bull; JavaScript</span>
                            <span className="font-[300]">&bull; React.js</span>
                            <span className="font-[300]">&bull; Tailwind CSS</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <button onClick={()=>redirect('https://dog-breed-identifier-client.vercel.app/')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[130px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Check out</button>
                        <button onClick={()=>redirect('https://github.com/harshpx/Dog-Breed-Identifier-client')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[150px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Source Code</button>
                    </div>
                    <Image src={dogBreed1} alt="DogBreed Image" className="rounded-[20px] max-w-[90vh] sm:max-w-[125vh] h-auto border border-neutral-600 relative left-0 bottom-[-20px] sm:bottom-[-20px] md:bottom-[0px]"/>
                </div>
                {/* weather */}
                <div className="flex flex-col gap-5 p-10 rounded-[30px] border border-neutral-600 h-[800px] relative overflow-hidden">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-4xl font-[300]">Weather</div>
                        <div className="text-neutral-300">Personal Project &bull; Web Dev &bull; Frontend</div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-green-500">&bull; Deployed</span>
                        <span className="text-green-500">&bull; Active</span>
                    </div>
                    <div className="text-neutral-300 w-full">The most beautiful weather app!</div>
                    <div className="flex flex-col items-start justify-start gap-0 w-full">
                        <span>Tech Stack:</span>
                        <div className="flex flex-wrap w-full items-center gap-x-3">
                            <span className="font-[300]">&bull; React.js</span>
                            <span className="font-[300]">&bull; JavaScript</span>
                            <span className="font-[300]">&bull; Vite</span>
                            <span className="font-[300]">&bull; Tailwind CSS</span>
                            <span className="font-[300]">&bull; Ant Design</span>
                            <span className="font-[300]">&bull; OpenWeather API</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <button onClick={()=>redirect('https://weather-harshpx.vercel.app/')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[130px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Check out</button>
                        <button onClick={()=>redirect('https://github.com/harshpx/weather')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[150px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Source Code</button>
                    </div>
                    <Image src={weather} alt="Weather Image" className="rounded-[20px] max-w-[125vh] h-auto border border-neutral-600 relative left-0 bottom-[-20px] sm:bottom-[-20px] md:bottom-[0px]"/>
                </div>
                {/* dashboard */}
                <div className="flex flex-col gap-5 p-10 rounded-[30px] border border-neutral-600 h-[800px] relative overflow-hidden">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-4xl font-[300]">Analytics Dashboard</div>
                        <div className="text-neutral-300">Freelance Project &bull; Web Dev &bull; Frontend</div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-green-500">&bull; Deployed</span>
                        <span className="text-green-500">&bull; Active</span>
                    </div>
                    <div className="text-neutral-300 w-full">An Interactive Information Dashboard Component that fetches data from an API and Displays Results in a Beautiful Dashboard.</div>
                    <div className="flex flex-col items-start justify-start gap-0 w-full">
                        <span>Tech Stack:</span>
                        <div className="flex flex-wrap w-full items-center gap-x-3">
                            <span className="font-[300]">&bull; React.js</span>
                            <span className="font-[300]">&bull; JavaScript</span>
                            <span className="font-[300]">&bull; Vite</span>
                            <span className="font-[300]">&bull; Tailwind CSS</span>
                            <span className="font-[300]">&bull; Chart.js</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <button onClick={()=>redirect('https://dashboard-harshpx.vercel.app')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[130px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Check out</button>
                        <button onClick={()=>redirect('https://github.com/harshpx/dashboard')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[150px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Source Code</button>
                    </div>
                    <Image src={dashboard} alt="Dashboard Image" className="rounded-[20px] max-w-[110vh] sm:max-w-[125vh] h-auto border border-neutral-600 relative left-0 bottom-[-20px] sm:bottom-[-20px] md:bottom-[0px]"/>
                </div>
                {/* Rentify */}
                <div className="flex flex-col gap-5 p-10 rounded-[30px] border border-neutral-600 h-[800px] relative overflow-hidden">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-4xl font-[300]">Rentify</div>
                        <div className="text-neutral-300">Freelance Project &bull; Web Dev &bull; Full-Stack</div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-green-500">&bull; Deployed</span>
                        <span className="text-green-500">&bull; Active</span>
                    </div>
                    <div className="text-neutral-300 w-full">Rentify is a marketplace for people in search for houses for rent in major indian cities.</div>
                    <div className="flex flex-col items-start justify-start gap-0 w-full">
                        <span>Tech Stack:</span>
                        <div className="flex flex-wrap w-full items-center gap-x-3">
                            <span className="font-[300]">&bull; React.js</span>
                            <span className="font-[300]">&bull; JavaScript</span>
                            <span className="font-[300]">&bull; Tailwind CSS</span>
                            <span className="font-[300]">&bull; Node.js</span>
                            <span className="font-[300]">&bull; Express.js</span>
                            <span className="font-[300]">&bull; MongoDB</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <button onClick={()=>redirect('https://rentify-harshpx.vercel.app')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[130px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Check out</button>
                        <button onClick={()=>redirect('https://github.com/harshpx/Rentify')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[150px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Source Code</button>
                    </div>
                    <Image src={rentify} alt="Rentify Image" className="rounded-[20px] max-w-[110vh] sm:max-w-[125vh] h-auto border border-neutral-600 relative left-0 bottom-[-20px] sm:bottom-[-20px] md:bottom-[0px]"/>
                </div>
                {/* miniblog */}
                <div className="flex flex-col gap-5 p-10 rounded-[30px] border border-neutral-600 h-[800px] relative overflow-hidden">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-4xl font-[300]">MiniBlog</div>
                        <div className="text-neutral-300">Personal Project &bull; Web Dev &bull; Full-Stack</div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-green-500">&bull; Deployed</span>
                        <span className="text-green-500">&bull; Active</span>
                        <span className="text-yellow-500">&bull; Deprecated</span>
                        <span className="text-yellow-500">&bull; No Active Development</span>
                    </div>
                    <div className="text-neutral-300 w-full">Micro-Blogging social media Web App.</div>
                    <div className="flex flex-col items-start justify-start gap-0 w-full">
                        <span>Tech Stack:</span>
                        <div className="flex flex-wrap w-full items-center gap-x-3">
                            <span className="font-[300]">&bull; React.js</span>
                            <span className="font-[300]">&bull; JavaScript</span>
                            <span className="font-[300]">&bull; Vite</span>
                            <span className="font-[300]">&bull; Tailwind CSS</span>
                            <span className="font-[300]">&bull; Appwrite</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <button onClick={()=>redirect('https://miniblogger.vercel.app/')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[130px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Check out</button>
                        <button onClick={()=>redirect('https://github.com/harshpx/miniBlog')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[150px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Source Code</button>
                    </div>
                    <Image src={miniBlog} alt="moniBlog Image" className="rounded-[20px] max-w-[110vh] sm:max-w-[125vh] h-auto border border-neutral-600 relative left-0 bottom-[-20px] sm:bottom-[-20px] md:bottom-[0px]"/>
                </div>
                {/* tealfox */}
                <div className="flex flex-col gap-5 p-10 rounded-[30px] border border-neutral-600 h-[800px] relative overflow-hidden">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-4xl font-[300]">Tealfox</div>
                        <div className="text-neutral-300">Personal Project &bull; Design &bull; UI</div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-green-500">&bull; Build Available</span>
                    </div>
                    <div className="text-neutral-300 w-full">UserStyle CSS theme for Firefox Browser, based on Teal color palette.</div>
                    <div className="flex flex-col items-start justify-start gap-0 w-full">
                        <span>Tech Stack:</span>
                        <div className="flex flex-wrap w-full items-center gap-x-3">
                            <span className="font-[300]">&bull; Vanilla CSS</span>
                            <span className="font-[300]">&bull; Firefox</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        {/* <button className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[130px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Check out</button> */}
                        <button onClick={()=>redirect('https://github.com/harshpx/TealFox')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[150px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Source Code</button>
                    </div>
                    <Image src={tealfox} alt="Tealfox Image" className="rounded-[20px] max-w-[110vh] sm:max-w-[125vh] h-auto border border-neutral-600 relative left-0 bottom-[-20px] sm:bottom-[-20px] md:bottom-[0px]"/>
                </div>
                {/* VAR */}
                <div className="flex flex-col gap-5 p-10 rounded-[30px] border border-neutral-600 h-[800px] relative overflow-hidden">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-4xl font-[300]">Virtual Assistant Referee</div>
                        <div className="text-neutral-300">College Minor Project &bull; Deep Learning</div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-neutral-500">&bull; Not Deployed</span>
                    </div>
                    <div className="text-neutral-300 w-full">A CNN Based Deep-Learning Video Analysis Model for Player Contact Detection in Football.</div>
                    <div className="flex flex-col items-start justify-start gap-0 w-full">
                        <span>Tech Stack:</span>
                        <div className="flex flex-wrap w-full items-center gap-x-3">
                            <span className="font-[300]">&bull; Python</span>
                            <span className="font-[300]">&bull; Tensorflow</span>
                            <span className="font-[300]">&bull; OpenCV</span>
                            <span className="font-[300]">&bull; CNN</span>
                            <span className="font-[300]">&bull; Streamlit</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        {/* <button className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[130px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Check out</button> */}
                        <button onClick={()=>redirect('https://github.com/harshpx/Virtual-Assistant-Referee')} className="text-[14px] hover:text-[13px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[150px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">Source Code</button>
                    </div>
                    <Image src={virtualAssistantReferee} alt="VAR Image" className="rounded-[20px] max-w-[110vh] sm:max-w-[125vh] h-auto border border-neutral-600 relative left-0 bottom-[-20px] sm:bottom-[-20px] md:bottom-[0px]"/>
                </div>
            </div>
            {/* services */}
            <div id="Services" className="w-full rounded-[30px] bg-gradient-to-b from-neutral-800 to-black border border-neutral-600 grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="md:col-span-2 flex flex-col items-start justify-end gap-6 p-10 md:min-h-[30vh]">
                    <span className="text-5xl font-[300]">Services</span>
                    <span className="font-[300]">From Frontend finesse & Backend development to Full Stack Web Apps, Machine Learning and everything in between.<br/>I have services to offer everyone.</span>
                </div>
                <div className="flex flex-col items-start justify-center gap-6 p-10 md:min-h-[30vh]">
                    <BsTerminalFill className="h-[15vh] w-auto"/>
                    <div className="flex flex-col gap-2">
                        <span className="text-4xl font-[300]">Full-Stack Web Development</span>
                        <span className="font-[300] text-neutral-400">As a full stack developer, I offer comprehensive website development services from start to finish. This includes both front-end and back-end development, ensuring a seamless user experience and robust functionality.</span>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-6 p-10 md:min-h-[30vh]">
                    <IoLayers className="h-[15vh] w-auto"/>
                    <div className="flex flex-col gap-2">
                        <span className="text-4xl font-[300]">UI/UX Development</span>
                        <span className="font-[300] text-neutral-400">Whether you need a brand new website design or want to refresh the look and feel of an existing site, I leverage my design expertise to create stunning and intuitive interfaces that engage users and drive conversions.</span>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-6 p-10 md:min-h-[30vh]">
                    <AiOutlineApi className="h-[15vh] w-auto"/>
                    <div className="flex flex-col gap-2">
                        <span className="text-4xl font-[300]">Production Grade API Development</span>
                        <span className="font-[300] text-neutral-400">I specialize in developing robust and scalable APIs to enable seamless communication between different software applications or services.<br/>Whether you need to integrate third-party services, connect disparate systems within your organization, or build a custom API for your application, I have the expertise to deliver tailored solutions.</span>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-6 p-10 md:min-h-[30vh]">
                    <GiArtificialIntelligence className="h-[15vh] w-auto"/>
                    <div className="flex flex-col gap-2">
                        <span className="text-4xl font-[300]">AI Integration in Web Applications</span>
                        <span className="font-[300] text-neutral-400">Leveraging the power of artificial intelligence (AI) and machine learning (ML), I provide innovative solutions to solve complex business challenges and drive digital transformation.</span>
                    </div>
                </div>
            </div>
            {/* contact */}
            <div id="Contact" className={`flex flex-col items-center justify-center gap-20 p-10 w-full min-h-[70vh] border border-neutral-600 rounded-[30px] bg-[#cccccc] relative overflow-hidden`}>
                <div className="flex flex-col items-center text-center justify-center gap-4 w-full z-20">
                    <div className="text-5xl font-[300] text-black z-20">Let&apos;s build something great!</div>
                    <div className="font-[300] text-black w-full md:w-2/3 z-20">Interested in starting your own website project with me?<br/>Excellent! I&apos;d love to talk to you about your idea.</div>
                </div>
                <div className="flex flex-col items-center text-center justify-center gap-5 w-full">
                    <div className="text-3xl font-[300] text-black z-20">Connect with me</div>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <div className="text-black flex items-center justify-center gap-2">
                            <IoMdMailUnread size={30}/>
                            <Link href={'mailto:harsh.rzf@gmail.com'} target="_blank" className="">harsh.rzf@gmail.com</Link>
                        </div>
                        <div className="text-black flex items-center justify-center gap-2">
                            <FaLinkedin size={28}/>
                            <Link href={'https://linkedin.com/in/harshpx'} target="_blank" className="">{`linkedin.com/in/harshpx`}</Link>
                        </div>
                        <div className="text-black flex items-center justify-center gap-2">
                            <RiInstagramFill size={30}/>
                            <Link href={'https://www.instagram.com/harshhh.hhhh?igsh=MWJrZGczNXd6MGFjMg=='} target="_blank" className="">{`instagram.com/harshhh.hhhh`}</Link>
                        </div>
                    </div>
                </div>
                <div className="absolute top-[-200px] right-[-300px] z-10 w-[50vh] h-[80vh] blur-2xl bg-blue-600 opacity-70 rotate-[-30deg] rounded-full"></div>
                <div className="absolute top-[-300px] right-[-50px] w-[40vh] h-[80vh] blur-xl bg-blue-300 opacity-60 rotate-[-90deg] rounded-full"></div>
            </div>
            {/* footer */}
            <div className="w-full h-fit flex flex-col sm:flex-row items-center justify-between p-3 sm:p-8 text-sm sm:text-base">
                <span className="text-neutral-300 font-[300] flex items-center gap-2"> 
                    <FaRegCopyright className="text-neutral-300"/> 
                    <span className="text-nowrap">2024 Harsh Priye, All Rights Reserved</span>
                </span>
                <span className="text-neutral-300 font-[300] flex items-center gap-2">
                    <span>Hosted with</span>
                    <span className="flex items-center gap-1 text-nowrap"><SiVercel/> Vercel</span>
                </span>
            </div>
            <Nav />
        </div>
    );
};

export default Page;