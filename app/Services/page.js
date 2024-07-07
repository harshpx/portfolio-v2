import Screen from "@/components/Screen";
import { BsTerminalFill } from "react-icons/bs";
import { IoLayers } from "react-icons/io5";
import { AiOutlineApi } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
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
        </Screen>
    )
};

export default Page;