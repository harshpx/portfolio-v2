"use client";
import { useRouter, usePathname } from "next/navigation";
import { Tooltip } from 'react-tooltip'

import { GoHomeFill, GoPersonFill } from "react-icons/go";
import { TbAppsFilled } from "react-icons/tb";
import { PiStackFill } from "react-icons/pi";
import { MdMail } from "react-icons/md";
import { RiGraduationCapFill, RiServiceFill } from "react-icons/ri";


const Nav = () => {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <div className="z-50 fixed bottom-5 left-0 w-full flex items-center justify-center gap-1 pointer-events-none text-white">
            <Tooltip id="HomeTooltip" effect="solid" place="top" type="dark">Home</Tooltip>
            <Tooltip id="ProjectsTooltip" effect="solid" place="top" type="dark">Projects</Tooltip>
            <Tooltip id="ServicesTooltip" effect="solid" place="top" type="dark">Services</Tooltip>
            <Tooltip id="ContactTooltip" effect="solid" place="top" type="dark">Contact</Tooltip>
            <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto rounded-[30px] bg-neutral-700/80 w-fit px-3 sm:px-5 py-3">
                <button 
                    onClick={()=>router.push(`/`)} 
                    className="flex items-center justify-center gap-2"
                    data-tooltip-id="HomeTooltip"
                >
                    <div className="text-3xl rounded-[30px] flex flex-col items-center justify-center hover:scale-125 transition-all duration-200">
                        <GoHomeFill/>
                    </div>
                    <div className={`transition-all duration-150 text-start ${pathname==="/" ? "w-16" : "w-0 overflow-hidden"}`}>Home</div>
                </button>
                <button 
                    onClick={()=>router.push(`/Projects`)} 
                    className="flex items-center justify-center gap-2"
                    data-tooltip-id="ProjectsTooltip"
                >
                    <div className="text-3xl rounded-[30px] flex flex-col items-center justify-center hover:scale-125 transition-all duration-200">
                        <TbAppsFilled/>
                    </div>
                    <div className={`transition-all duration-150 text-start ${pathname==="/Projects" ? "w-16" : "w-0 overflow-hidden"}`}>Projects</div>
                </button>
                <button 
                    onClick={()=>router.push(`/Services`)} 
                    className="flex items-center justify-center gap-2"
                    data-tooltip-id="ServicesTooltip"
                >
                    <div className="text-3xl rounded-[30px] flex flex-col items-center justify-center hover:scale-125 transition-all duration-200">
                        <RiServiceFill/>
                    </div>
                    <div className={`transition-all duration-150 text-start ${pathname==="/Services" ? "w-16" : "w-0 overflow-hidden"}`}>Services</div>
                </button>
                <button 
                    onClick={()=>router.push(`/Contact`)} 
                    className="flex items-center justify-center gap-2"
                    data-tooltip-id="ContactTooltip"
                >
                    <div className="text-3xl rounded-[30px] flex flex-col items-center justify-center hover:scale-125 transition-all duration-200">
                        <MdMail/>
                    </div>
                    <div className={`transition-all duration-150 text-start ${pathname==="/Contact" ? "w-16" : "w-0 overflow-hidden"}`}>Contact</div>
                </button>
            </div>
        </div>
    );
};

export default Nav;
