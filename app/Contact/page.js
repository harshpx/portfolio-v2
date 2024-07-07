import Link from "next/link";
import Screen from "@/components/Screen";
import Footer from "@/components/Footer";
import { IoMdMailUnread } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill, RiServiceFill } from "react-icons/ri";
import { TbAppsFilled } from "react-icons/tb";
const Page = () => {
    return (
        <Screen>
            <div id="Contact" className={`flex flex-col items-center justify-center gap-20 p-10 w-full min-h-[80vh] border border-neutral-600 rounded-[30px] bg-[#cccccc] relative overflow-hidden`}>
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
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="relative overflow-hidden p-10 min-h-[40vh] w-full flex flex-col justify-between items-start rounded-[30px] border border-neutral-600">
                    <span className="text-4xl font-[300]">View my work</span>
                    <span className="font-[300] lg:w-2/3">My work has crossed many sectors. I've built websites for startups, household names, as well as a number of personal projects. Always with a focus on reliability and efficiency.</span>
                    <Link href="#" className="flex items-center justify-center gap-2 flex-nowrap text-[14px] rounded-[30px] border border-neutral-600 px-4 py-2 h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">
                        <div className=""><TbAppsFilled size={20}/></div>
                        <span className="w-full">View Projects</span>
                    </Link >
                    <div className="sphere"/>
                </div>
                <div className="relative overflow-hidden p-10 min-h-[40vh] w-full flex flex-col justify-between items-start gap-4 rounded-[30px] border border-neutral-600">
                    <span className="text-4xl font-[300] z-20">Checkout Services</span>
                    <span className="font-[300] lg:w-2/3 z-20">I offer a range of services to help you get your website up and running. From design to development, I can help you with every step of the process.</span>
                    <Link href="#" className="flex items-center justify-center gap-2 flex-nowrap text-[14px] rounded-[30px] border border-neutral-600 px-4 py-2 h-[40px] hover:border-black hover:bg-green-600 transition-all duration-300">
                        <div className=""><RiServiceFill size={20}/></div>
                        <span className="w-full">View Services</span>
                    </Link>
                    <div className="absolute right-[-400px] md:right-[-350px] bottom-[-300px] z-10 w-[50vh] h-[80vh] blur-2xl bg-green-600 opacity-80 rotate-[45deg] rounded-full"/>
                    <div className="absolute right-[-80px] md:right-[-20px] bottom-[-450px] md:bottom-[-450px] w-[40vh] h-[80vh] blur-xl bg-green-300 opacity-40 rotate-[-90deg] rounded-full"/>
                </div>
            </div>
        </Screen>
    )
};

export default Page;
