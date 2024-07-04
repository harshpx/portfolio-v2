"use client";
import React,{useState, useEffect} from "react";
import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";
import Nav from "@/components/Nav";
import codelab1 from "@/assets/codelab1.png";
import dp1 from "@/assets/dp1.jpeg";
import dp2 from "@/assets/dp2.jpg";
import dp3 from "@/assets/dp3.webp";
import dp4 from "@/assets/dp4.webp";

const page = () => {
    // const [isMobile, setIsMobile] = useState(false);
    // useEffect(() => {
    //     const handleResize = () => {
    //       setIsMobile(window.innerWidth < 768);
    //     };
    //     handleResize();
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);

    // useEffect(() => {
    //     console.log(isMobile);
    // }, [isMobile]);

    return (
        <div className="min-h-screen min-w-full bg-black text-white p-2 flex flex-col gap-2">
            {/* 1. home component */}
            <div className={`w-full md:h-[95vh] grid gap-2 grid-cols-1 md:grid-cols-2`}>
                {/* 1st card 'intro' */}
                <div className={`rounded-[30px] border border-neutral-600 flex flex-col items-start justify-end gap-5 p-10 bg-gradient-to-b from-neutral-800 to-black min-h-[40vh] md:min-h-fit md:w-full`}>
                    <div className="w-full text-xl">Harsh Priye</div>
                    <div className="w-full text-4xl text-wrap">Full Stack Developer,<br/>Machine Learning Enthusiast</div>
                    <div className="w-full sm:w-1/2 md:w-2/3 font-[300]">Based in New Delhi, IN<br/>Building Reliable, Efficient and Robust Web Apps.</div>
                </div>
                {/* 2nd card 'latest project' */}
                <div className={`rounded-[30px] border border-neutral-600 h-[80vh] md:h-full md:w-full md:row-span-2 relative overflow-hidden flex flex-col gap-4 p-10`}>
                    <div className="text-md">Latest Project</div>
                    <div className="text-4xl font-[300]">CodeLab</div>
                    <div>Codelab is an online code compiler that is specifically designed for competitive programmers.</div>
                    <button className="rounded-[30px] border border-neutral-600 px-4 py-2 w-fit">Check out</button>
                    <Image src={codelab1} alt="CodeLab Image" className="rounded-[20px] max-w-[70vh] md:max-w-[100vh] h-auto border border-neutral-600 absolute left-[40px] bottom-[-150px] sm:bottom-[-100px] md:bottom-[-180px]"/>
                </div>
                {/* 3rd card 'insights' */}
                <div className={`grid gap-2 min-h-[70vh] grid-cols-1 md:grid-cols-2 md:w-full md:min-h-fit`}>
                    <div className="h-full w-full p-10 rounded-[30px] border border-neutral-600 overflow-hidden relative flex flex-col">
                        <div className="w-full mb-10">Web Insights</div>
                        <div className="flex items-start justify-start gap-1 mb-8">
                            <div className="text-7xl">4x</div>
                            <FaArrowTrendUp size={30} className="text-green-500"/>
                        </div>
                        <div>Webpages are on average nearly four times larger than they were in 2010.</div>
                        <div className="rounded-[100%] overflow-hidden absolute inset-x-0 bottom-[-14vh] h-[20vh] w-full bg-green-500 opacity-70 blur-2xl"></div>
                    </div>
                    <div className="h-h-full w-full p-10 rounded-[30px] border border-neutral-600 overflow-hidden relative flex flex-col justify-between">
                        <div className="w-full mb-10">Services</div>
                        <div className="flex flex-col items-start gap-8">
                            <span className="font-[300]">From UI/UX<br/>to Full Stack Web Apps, Backend Design and ML integration,<br/>I have services to offer everyone.</span>
                            <button className="rounded-[30px] border border-neutral-600 px-4 py-2">View Services</button>
                        </div>
                        <div className="sphere"/>
                    </div>
                </div>
            </div>
            {/* 2. About component */}
            <div className={`w-full grid grid-cols-1 gap-2 md:h-[95vh] md:grid-cols-2`}>
                {/* my journey */}
                <div className={`rounded-[30px] border border-neutral-600 h-[80vh] md:h-full md:w-full md:row-span-2 relative overflow-hidden flex flex-col gap-7 p-10`}>
                    <div className="text-4xl font-[300]">My Journey so far</div>
                    <div>I dived into web dev and started developing websites from 2022, after that there was no stopping. I&apos;d worked for multiple startups, NGOs and big organizations and also done a lot of freelance.</div>
                    <div>I enjoy learning new tools, tech, and methods to make my development the best it can be.</div>

                    <Image src={dp3} alt="CodeLab Image" className="rounded-[10px] max-w-[70vh] md:max-w-[100vh] h-auto border border-neutral-600 absolute left-[40px] bottom-[-300px] sm:bottom-[-200px] md:bottom-[-450px] lg:bottom-[-350px]"/>
                </div>
                {/* about */}
                <div className={`rounded-[30px] border border-neutral-600 flex flex-col items-start justify-end gap-5 p-10 bg-gradient-to-b from-neutral-800 to-black min-h-[40vh] md:min-h-fit md:w-full`}>
                    <div className="w-full text-4xl font-[300] text-wrap">About</div>
                    <div className="w-full sm:w-3/4 font-[200]">Hi there! Nice to meet you. My name is Harsh.<br/>I&apos;m a passionate web developer based in New Delhi, India.<br/>I love to spend my time building robust, efficient, reliable, modern, and low-carbon websites.</div>
                </div>
                
                <div className={`flex flex-col justify-end gap-6 p-10 w-full min-h-[70vh] md:min-h-fit border border-neutral-600 rounded-[30px] bg-[#cccccc] relative overflow-hidden`}>
                    <div className="text-4xl font-[300] text-black z-20">Let&apos;s build<br/>something great</div>
                    <div className="font-[300] text-black w-full md:w-2/3 z-20">Interested in starting your own website project with me? Excellent! I&apos;d love to talk to you about your idea.</div>
                    <button className="text-black rounded-[30px] border border-neutral-600 px-4 py-2 w-fit">Get in Touch</button>
                    <div className="absolute right-[-250px] z-10 w-[50vh] h-[80vh] blur-xl bg-blue-600 opacity-70 rotate-[-30deg] rounded-full"></div>
                    <div className="absolute right-[-50px] w-[40vh] h-[80vh] blur-xl bg-blue-300 opacity-60 rotate-[-90deg] rounded-full"></div>
                </div>
            </div>
            {/* 3. eudcation & experience */}
            <div className="w-full grid gap-2 grid-cols-1 md:grid-cols-2 min-h-[60vh]">
                {/* experience */}
                <div className=" order-last md:order-first rounded-[30px] border border-neutral-600 p-10 h-full flex flex-col items-start gap-10 bg-[#cccccc] text-black relative overflow-hidden">
                    <div className="absolute right-[-350px] md:right-[-250px] top-[-400px] z-10 w-[50vh] h-[80vh] blur-xl bg-blue-600 opacity-70 rotate-[-15deg] md:rotate-[-30deg] rounded-full"/>
                    <div className="absolute right-[-200px] md:right-[-50px] top-[-400px] w-[40vh] h-[80vh] blur-xl bg-blue-300 opacity-60 rotate-[-90deg] rounded-full"/>
                    <h1 className="text-4xl font-[300] z-20">Work Experience</h1>
                    <div className="w-full flex flex-col gap-10 z-20">
                        {/* hostkicker */}
                        <div className="flex flex-col gap-2">
                            <span className="text-2xl font-[300]">Hostkicker</span>
                            <span className="font-[300] text-neutral-700">Junior Full Stack Developer</span>
                            <span className="font-[300] text-neutral-700">Jun 2024 - Present</span>
                            <div className="flex flex-col text-neutral-800">
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
                            <span className="text-2xl font-[300]">Aulacube</span>
                            <span className="font-[300] text-neutral-700">Frontend Development Intern</span>
                            <span className="font-[300] text-neutral-700">Mar 2024 - Jul 2024</span>
                            <div className="flex flex-col text-neutral-800">
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
                    <h1 className="text-4xl font-[300]">Education</h1>
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
            {/* <Nav /> */}
        </div>
    );
};

export default page;