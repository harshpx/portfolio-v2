"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { IoDocumentAttach } from "react-icons/io5";
import { FaLinkedin, FaGithub, FaAward } from "react-icons/fa";
import { RiInstagramFill, RiServiceFill } from "react-icons/ri";
import { TbAppsFilled } from "react-icons/tb";

import useHover from "@/hooks/useHover";
import Screen from "@/components/Screen";

import codelab1 from "@/assets/codelab1.png";
// import dp1 from "@/assets/dp1.jpeg";
import dp2 from "@/assets/dp2.jpg";
// import dp3 from "@/assets/dp3.webp";
// import dp4 from "@/assets/dp4.webp";

const Page = () => {
    const redirect = (url) => {
        window.open(url, "_blank");
    };

    const linkedinRef = useRef(null);
    const githubRef = useRef(null);
    const instagramRef = useRef(null);

    const linkedinHover = useHover(linkedinRef);
    const githubHover = useHover(githubRef);
    const instagramHover = useHover(instagramRef);

    return (
        <Screen>
            {/* Home */}
            <div
                id="Home"
                className={`w-full lg:h-[900px] grid gap-2 grid-cols-1 lg:grid-cols-2`}
            >
                {/* 1st card: intro */}
                <div
                    className={`rounded-[30px] border border-neutral-600 flex flex-col items-start justify-end gap-5 p-10 bg-gradient-to-b from-neutral-800 to-black min-h-[40vh] md:min-h-fit md:w-full`}
                >
                    <div className="w-full text-xl">Harsh Priye</div>
                    <div className="w-full text-4xl text-wrap">
                        Full Stack Developer,
                        <br />
                        Machine Learning Enthusiast
                    </div>
                    <div className="w-full flex flex-wrap items-center gap-2 md:gap-4">
                        <Link
                            href="https://linkedin.com/in/harshpx"
                            target="_blank"
                            className="flex items-center gap-2"
                            ref={linkedinRef}
                        >
                            <FaLinkedin size={28} />
                            <span
                                className={`transition-all duration-150 ${
                                    linkedinHover
                                        ? "w-[60px]"
                                        : "w-0 overflow-hidden"
                                }`}
                            >
                                Linkedin
                            </span>
                        </Link>
                        <Link
                            href="https://github.com/harshpx"
                            target="_blank"
                            className="flex items-center gap-2"
                            ref={githubRef}
                        >
                            <FaGithub size={28} />
                            <span
                                className={`transition-all duration-150 ${
                                    githubHover
                                        ? "w-[50px]"
                                        : "w-0 overflow-hidden"
                                }`}
                            >
                                Github
                            </span>
                        </Link>
                        <Link
                            href="https://www.instagram.com/harshhh.hhhh"
                            target="_blank"
                            className="flex items-center gap-2"
                            ref={instagramRef}
                        >
                            <RiInstagramFill size={30} />
                            <span
                                className={`transition-all duration-150 ${
                                    instagramHover
                                        ? "w-[80px]"
                                        : "w-0 overflow-hidden"
                                }`}
                            >
                                Instagram
                            </span>
                        </Link>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-2/3 font-[300]">
                        Based in New Delhi, IN
                        <br />
                        Building Reliable, Efficient and Robust Web Apps.
                    </div>
                    <Link
                        href="https://drive.google.com/file/d/1CrXWglHd5CSHRNKhUQKmecPTfy8nKnN0/view?usp=sharing"
                        target="_blank"
                        className="flex items-center justify-center gap-2 flex-nowrap text-[14px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[160px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300"
                    >
                        <div className="">
                            <IoDocumentAttach size={20} />
                        </div>
                        <span className="w-full">View Resume</span>
                    </Link>
                </div>
                {/* journey so far */}
                <div className="rounded-[30px] border border-neutral-600 h-[80vh] md:h-full md:row-span-2 relative overflow-hidden flex flex-col gap-4 p-10">
                    <div className="text-4xl font-[300]">My Journey so far</div>
                    <div className="font-[300] text-neutral-300">
                        I dived into web dev and started developing websites
                        from 2022, after that there was no stopping. I&apos;d
                        worked for multiple startups, NGOs and big organizations
                        and also done a lot of freelance.
                    </div>
                    <div className="font-[300] text-neutral-300">
                        I enjoy learning new tools, tech, and methods to make my
                        development the best it can be.
                    </div>

                    <Image
                        src={dp2}
                        priority
                        alt="My Image"
                        className="rounded-[10px] max-w-[50vh] sm:max-w-[90vh] md:max-w-full lg:max-w-[100vh] h-auto border border-neutral-600 grayscale"
                    />
                </div>
                {/* 3rd card: insights */}
                <div
                    className={`grid gap-2 min-h-[70vh] grid-cols-1 md:grid-cols-2 md:w-full md:min-h-fit`}
                >
                    <div className="h-full w-full p-10 rounded-[30px] border border-neutral-600 overflow-hidden relative flex flex-col">
                        <div className="w-full mb-10 text-lg">Web Insights</div>
                        <div className="flex items-start justify-start gap-1 mb-8">
                            <div className="text-7xl">
                                1<sup>st</sup>
                            </div>
                            <FaAward size={30} className="text-green-500" />
                        </div>
                        <div className="z-20 font-[300] text-neutral-300">
                            The very first website was created by Tim
                            Berners-Lee, the inventor of the World Wide Web, in
                            1991. It&apos;s still online and you can visit it at{" "}
                            <Link
                                href="https://info.cern.ch"
                                target="_blank"
                                className="text-green-500 hover:underline"
                            >
                                info.cern.ch
                            </Link>
                        </div>
                        <div className="rounded-[100%] overflow-hidden absolute inset-x-0 bottom-[-14vh] h-[20vh] w-full bg-green-500 opacity-70 blur-2xl"></div>
                    </div>
                    <div className="h-full w-full p-10 rounded-[30px] border border-neutral-600 overflow-hidden relative flex flex-col justify-between">
                        <div className="w-full mb-10 text-lg">Services</div>
                        <div className="flex flex-col items-start gap-8">
                            <span className="font-[300] text-neutral-300">
                                From UI/UX
                                <br />
                                to Full Stack Web Apps, Backend Design and ML
                                integration,
                                <br />I have services to offer everyone.
                            </span>
                            <Link
                                href="/Services"
                                className="flex items-center justify-center gap-2 flex-nowrap text-[14px] rounded-[30px] border border-neutral-600 px-4 py-2 h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300"
                            >
                                <div className="">
                                    <RiServiceFill size={20} />
                                </div>
                                <span className="w-full">View Services</span>
                            </Link>
                        </div>
                        <div className="sphere" />
                    </div>
                </div>
            </div>
            {/* About */}
            <div
                id="About"
                className={`w-full lg:h-[900px] grid gap-2 grid-cols-1 lg:grid-cols-2`}
            >
                {/* latest project */}
                <div className="rounded-[30px] border border-neutral-600 h-[80vh] md:h-full md:w-full md:row-span-2 relative overflow-hidden flex flex-col gap-7 p-10">
                    <div className="text-lg">Latest Project</div>
                    <div className="text-4xl font-[300]">CodeLab</div>
                    <div className="font-[300] text-neutral-300">
                        Codelab is an online code compiler that is specifically
                        designed for competitive programmers.
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <button
                            onClick={() =>
                                redirect("https://codelab-harshpx.vercel.app/")
                            }
                            className="text-[14px] rounded-[30px] border border-neutral-600 px-4 py-2 w-[130px] h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300"
                        >
                            Check out
                        </button>
                        <Link
                            href="/Projects"
                            className="flex items-center justify-center gap-2 flex-nowrap text-[14px] rounded-[30px] border border-neutral-600 px-4 py-2 h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300"
                        >
                            <div className="">
                                <TbAppsFilled size={20} />
                            </div>
                            <span className="w-full">View Projects</span>
                        </Link>
                    </div>
                    <Image
                        src={codelab1}
                        priority
                        alt="CodeLab Image"
                        className="rounded-[20px] max-w-[100vh] h-auto border border-neutral-600 relative left-0 bottom-[-20px] sm:bottom-[-20px] md:bottom-[0px]"
                    />
                </div>
                {/* about */}
                <div
                    className={`rounded-[30px] border border-neutral-600 flex flex-col items-start justify-end gap-5 p-10 bg-gradient-to-b from-neutral-800 to-black min-h-[40vh] md:min-h-fit md:w-full`}
                >
                    <div className="w-full text-4xl font-[300] text-wrap">
                        About
                    </div>
                    <div className="w-full sm:w-3/4 font-[300] text-neutral-300">
                        Hi there! Nice to meet you. My name is Harsh.
                        <br />
                        I&apos;m a passionate web developer based in New Delhi,
                        India.
                        <br />I love to spend my time building robust,
                        efficient, reliable, modern, and low-carbon websites.
                    </div>
                </div>
                {/* contact card */}
                <div
                    className={`flex flex-col justify-end gap-6 p-10 w-full min-h-[70vh] md:min-h-fit border border-neutral-600 rounded-[30px] bg-[#cccccc] relative overflow-hidden`}
                >
                    <div className="text-4xl font-[300] text-black z-20">
                        Let&apos;s build
                        <br />
                        something great
                    </div>
                    <div className="font-[300] text-black w-full md:w-2/3 z-20">
                        Interested in starting your own website project with me?
                        Excellent! I&apos;d love to talk to you about your idea.
                    </div>
                    <Link
                        href="/Contact"
                        className="flex items-center justify-center gap-2 flex-nowrap w-fit text-[14px] text-black rounded-[30px] border border-neutral-600 px-4 py-2 h-[40px] hover:text-white hover:bg-black transition-all duration-300"
                    >
                        <span className="w-full">Get in Touch</span>
                    </Link>
                    <div className="absolute right-[-250px] z-10 w-[50vh] h-[80vh] blur-xl bg-blue-600 opacity-70 rotate-[-30deg] rounded-full"></div>
                    <div className="absolute right-[-50px] w-[40vh] h-[80vh] blur-xl bg-blue-300 opacity-60 rotate-[-90deg] rounded-full"></div>
                </div>
            </div>
            {/* education & experience */}
            <div
                id="Ed&Exp"
                className="w-full grid gap-2 grid-cols-1 md:grid-cols-2 min-h-[60vh]"
            >
                {/* experience */}
                <div className=" order-last md:order-first rounded-[30px] border border-neutral-600 p-10 h-full flex flex-col items-start gap-10 bg-[#cccccc] text-black relative overflow-hidden">
                    <div className="absolute right-[-350px] md:right-[-250px] top-[-400px] z-10 w-[50vh] h-[80vh] blur-xl bg-blue-600 opacity-70 rotate-[-15deg] md:rotate-[-30deg] rounded-full" />
                    <div className="absolute right-[-200px] md:right-[-50px] top-[-400px] w-[40vh] h-[80vh] blur-xl bg-blue-300 opacity-60 rotate-[-90deg] rounded-full" />
                    <h1 className="text-5xl font-[300] z-20">Experience</h1>
                    <div className="w-full flex flex-col gap-10 z-20">
                        {/* hostkicker */}
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-0">
                                <span className="text-2xl font-[300]">
                                    Hostkicker
                                </span>
                                <span className="font-[300] text-neutral-900">
                                    Junior Full Stack Developer &bull; Internship
                                </span>
                                <span className="font-[300] text-neutral-700">
                                    May 2024 - Jun 2024
                                </span>
                            </div>
                            <div className="flex flex-col font-[300] text-neutral-700">
                                <span>
                                    &bull; Working on Advice on Click
                                    Application
                                </span>
                                <span>
                                    &bull; Used Nivo/Line for better data
                                    representation in UI
                                </span>
                                <span>
                                    &bull; Improved data aggregation logic for
                                    better data-grouping during visualization.
                                </span>
                            </div>
                            <div className="flex items-start justify-start gap-4">
                                <span>Skills:</span>
                                <div className="flex flex-wrap w-full md:w-2/3 items-center gap-x-3">
                                    <span className="font-[300]">
                                        &bull; Next.js
                                    </span>
                                    <span className="font-[300]">
                                        &bull; Typescript
                                    </span>
                                    <span className="font-[300]">
                                        &bull; Tailwind CSS
                                    </span>
                                    <span className="font-[300]">
                                        &bull; Git
                                    </span>
                                    <span className="font-[300]">
                                        &bull; Bitbucket
                                    </span>
                                    <span className="font-[300]">
                                        &bull; Jira
                                    </span>
                                    <span className="font-[300]">
                                        &bull; Firebase
                                    </span>
                                    <span className="font-[300]">
                                        &bull; Cloud Firestore
                                    </span>
                                    <span className="font-[300]">
                                        &bull; CI/CD
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* aulacube */}
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-0">
                                <span className="text-2xl font-[300]">
                                    Aulacube
                                </span>
                                <span className="font-[300] text-neutral-900">
                                    Frontend Developer &bull; Internship
                                </span>
                                <span className="font-[300] text-neutral-700">
                                    Mar 2024 - June 2024
                                </span>
                            </div>
                            <div className="flex flex-col font-[300] text-neutral-700">
                                <span>
                                    &bull; Introduced tailwind to the AulaEdge
                                    website for cross-device responsiveness.
                                </span>
                                <span>
                                    &bull; Improved Classroom setup by working
                                    on &apos;optional subjects&apos;, where
                                    individual students could be assigned to
                                    specific subjects.
                                </span>
                                <span>
                                    &bull; Worked on WhatApp messaging module
                                    for school notifications.
                                </span>
                                <span>
                                    &bull; Worked on Lesson Plans and
                                    Assignments feature for Curriculum Design.
                                </span>
                            </div>
                            <div className="flex items-start justify-start gap-4">
                                <span>Skills:</span>
                                <div className="flex flex-wrap w-full md:w-2/3 items-center gap-x-3">
                                    <span className="font-[300]">
                                        &bull; React.js
                                    </span>
                                    <span className="font-[300]">
                                        &bull; Typescript
                                    </span>
                                    <span className="font-[300]">
                                        &bull; Tailwind CSS
                                    </span>
                                    <span className="font-[300]">
                                        &bull; Git
                                    </span>
                                    <span className="font-[300]">
                                        &bull; Github
                                    </span>
                                    <span className="font-[300]">
                                        &bull; Ant Design
                                    </span>
                                    <span className="font-[300]">
                                        &bull; CI/CD
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-0">
                                <span className="text-2xl font-[300]">
                                    Youth Empowerment Foundation
                                </span>
                                <span className="font-[300] text-neutral-900">
                                    Technology Intern &bull; Internship
                                </span>
                                <span className="font-[300] text-neutral-700">
                                    Jan 2023 - March 2023
                                </span>
                            </div>
                            <div className="flex flex-col font-[300] text-neutral-700">
                                <span>
                                    &bull; Built a Retinal Multi-Disease Detection model using TensorFlow, for door-to-door preliminary Eye Checkups in various Shelter Homes and Old Age Homes across Delhi-NCR region.
                                </span>
                                <span>
                                    &bull; Created a responsive web application incorporating the trained model using FastAPI server and React.js
                                </span>
                            </div>
                            <div className="flex items-start justify-start gap-4">
                                <span>Skills:</span>
                                <div className="flex flex-wrap w-full md:w-2/3 items-center gap-x-3">
                                    <span className="font-[300]">
                                        &bull; Python
                                    </span>
                                    <span className="font-[300]">
                                        &bull; TensorFlow
                                    </span>
                                    <span className="font-[300]">
                                        &bull; FastAPI
                                    </span>
                                    <span className="font-[300]">
                                        &bull; React.js
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* education */}
                <div className="rounded-[30px] border border-neutral-600 p-10 h-full flex flex-col items-start gap-10 relative overflow-hidden bg-gradient-to-b from-neutral-800 to-black">
                    <div className="absolute right-[-400px] md:right-[-300px] bottom-[-300px] z-10 w-[50vh] h-[80vh] blur-2xl bg-green-600 opacity-80 rotate-[45deg] rounded-full" />
                    <div className="absolute right-[30px] bottom-[-500px] md:bottom-[-400px] w-[40vh] h-[80vh] blur-xl bg-green-300 opacity-40 rotate-[-90deg] rounded-full" />
                    <h1 className="text-5xl font-[300]">Education</h1>
                    <div className="w-full flex flex-col gap-4">
                        {/* engg */}
                        <div className="flex flex-col gap-2">
                            <span className="text-2xl font-[300]">
                                Bachelor of Technology (B.Tech)
                                <br />
                                in Computer Science
                            </span>
                            <span className="font-[300] text-neutral-300">
                                Netaji Subhas University of Technology (NSUT),
                                New Delhi
                            </span>
                            <div className="flex items-center gap-5">
                                <span className="font-[300] text-neutral-300">
                                    2020-2024
                                </span>
                                <span className="font-[300] text-neutral-300">
                                    Grade: 7.63
                                </span>
                            </div>
                            <div className="flex flex-wrap w-full md:w-2/3 items-center gap-x-3">
                                <span className="font-[300]">&bull; C++</span>
                                <span className="font-[300]">
                                    &bull; Data Structures
                                </span>
                                <span className="font-[300]">
                                    &bull; Algorithms
                                </span>
                                <span className="font-[300]">&bull; DBMS</span>
                                <span className="font-[300]">&bull; OS</span>
                                <span className="font-[300]">
                                    &bull; Computer Networks
                                </span>
                                <span className="font-[300]">
                                    &bull; Machine Learning
                                </span>
                                <span className="font-[300]">
                                    &bull; Web Development
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* 12th */}
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <span className="text-2xl font-[300]">
                                AISSCE (CBSE Class 12th)
                            </span>
                            <span className="font-[300] text-neutral-300">
                                Vishwa Bharati Public School, New Delhi
                            </span>
                            <div className="flex items-center gap-5">
                                <span className="font-[300] text-neutral-300">
                                    2018-2019
                                </span>
                                <span className="font-[300] text-neutral-300">
                                    Score: 87%
                                </span>
                            </div>
                            <div className="flex flex-wrap w-full md:w-2/3 items-center gap-x-3">
                                <span className="font-[300]">
                                    &bull; Physics
                                </span>
                                <span className="font-[300]">
                                    &bull; Chemistry
                                </span>
                                <span className="font-[300]">
                                    &bull; Mathematics
                                </span>
                                <span className="font-[300]">
                                    &bull; Engilsh
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* 10th */}
                    <div className="w-full flex flex-col gap-4 z-20">
                        <div className="flex flex-col gap-2">
                            <span className="text-2xl font-[300]">
                                HSC (CBSE Class 10th)
                            </span>
                            <span className="font-[300] text-neutral-300">
                                Vishwa Bharati Public School, New Delhi
                            </span>
                            <div className="flex items-center gap-5">
                                <span className="font-[300] text-neutral-300">
                                    2016-2017
                                </span>
                                <span className="font-[300] text-neutral-300">
                                    Grade: 10.0
                                </span>
                            </div>
                            <div className="flex flex-wrap w-full md:w-2/3 items-center gap-x-3">
                                <span className="font-[300]">
                                    &bull; General Science
                                </span>
                                <span className="font-[300]">
                                    &bull; Mathematics
                                </span>
                                <span className="font-[300]">
                                    &bull; Social Science
                                </span>
                                <span className="font-[300]">
                                    &bull; English
                                </span>
                                <span className="font-[300]">&bull; Hindi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Screen>
    );
};

export default Page;
