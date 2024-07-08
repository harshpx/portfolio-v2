import Link from "next/link";
import Screen from "@/components/Screen";
import { BsTerminalFill } from "react-icons/bs";
import { IoLayers } from "react-icons/io5";
import { AiOutlineApi } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbAppsFilled } from "react-icons/tb";
const Page = () => {
    return (
        <Screen>
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
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="relative overflow-hidden p-10 min-h-[40vh] w-full flex flex-col justify-between items-start gap-4 rounded-[30px] border border-neutral-600">
                <span className="text-4xl font-[300]">View my work</span>
                    <span className="font-[300] lg:w-2/3">My work has crossed many sectors. I&apos;ve built websites for startups, household names, as well as a number of personal projects. Always with a focus on reliability and efficiency.</span>
                    <Link href="/Projects" className="z-20 flex items-center justify-center gap-2 flex-nowrap text-[14px] rounded-[30px] border border-neutral-600 px-4 py-2 h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">
                        <div className=""><TbAppsFilled size={20}/></div>
                        <span className="w-full">View Projects</span>
                    </Link >
                    <div className="absolute right-[-400px] md:right-[-350px] bottom-[-300px] z-10 w-[50vh] h-[80vh] blur-2xl bg-green-600 opacity-80 rotate-[45deg] rounded-full"/>
                    <div className="absolute right-[-80px] md:right-[-20px] bottom-[-450px] md:bottom-[-450px] w-[40vh] h-[80vh] blur-xl bg-green-300 opacity-40 rotate-[-90deg] rounded-full"/>
                </div>
                <div className="relative overflow-hidden p-10 min-h-[40vh] w-full flex flex-col justify-between items-start gap-4 rounded-[30px] border border-neutral-600 bg-[#cccccc] text-black">
                    <div className="text-4xl font-[300] z-20">Let&apos;s build<br/>something great</div>
                    <div className="font-[300] w-full md:w-2/3 z-20">Interested in starting your own website project with me? Excellent! I&apos;d love to talk to you about your idea.</div>
                    <Link href='/Contact' className="z-20 flex items-center justify-center gap-2 flex-nowrap text-[14px] rounded-[30px] border border-neutral-600 px-4 py-2 h-[40px] hover:text-white hover:bg-black transition-all duration-300">
                        <span className="w-full">Get in Touch</span>
                    </Link>
                    <div className="absolute right-[-250px] z-10 w-[50vh] h-[80vh] blur-xl bg-blue-600 opacity-70 rotate-[-30deg] rounded-full"></div>
                    <div className="absolute right-[-50px] w-[40vh] h-[80vh] blur-xl bg-blue-300 opacity-60 rotate-[-90deg] rounded-full"></div>
                </div>
            </div>
        </Screen>
    )
};

export default Page;