"use client";
import Image from "next/image";
import Screen from "@/components/Screen";
import StackMarquee from "@/components/StackMarquee";


import codelab1 from "@/assets/codelab1.png";
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

    return (
        <Screen>
            <div id="Projects" className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex flex-col items-start justify-end gap-6 p-10 rounded-[30px] border border-neutral-600 bg-gradient-to-b from-neutral-800 to-black md:min-h-[40vh]">
                    <span className="text-5xl font-[300]">Projects</span>
                    <span className="font-[300]">My work has crossed many sectors.<br/>I&apos;ve built websites for startups, household names, as well as a number of personal projects.<br/>Always with a focus on reliability and efficiency.</span>
                </div>
                <div id="Stack" className="flex flex-col items-center justify-start p-10 md:px-0 md:py-10 gap-10 w-full min-h-[40vh] rounded-[30px] border border-neutral-600 bg-gradient-to-b from-neutral-800 to-black">
                    <h1 className="text-5xl font-[300]">My Stack</h1>
                    <StackMarquee/>
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
            {/* tech stack */}
            
        </Screen>
    )
}

export default Page;