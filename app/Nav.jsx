"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { GoHomeFill, GoPersonFill } from "react-icons/go";
import { TbAppsFilled } from "react-icons/tb";
import { PiStackFill } from "react-icons/pi";
import { MdMail } from "react-icons/md";
import { RiGraduationCapFill, RiServiceFill } from "react-icons/ri";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import useHover from "@/hooks/useHover";
import useWindowWidth from "@/hooks/useWindowWidth";

const Button = ({icon,text})=>{
    const router = useRouter();
    const pathname = usePathname();
    return (
        <button onClick={()=>router.push(`/${text}`)} className="flex items-center justify-center gap-2">
            <div className="text-3xl rounded-[30px] flex flex-col items-center justify-center hover:scale-125 transition-all duration-200">
                {icon}
            </div>
            <div className={`transition-all duration-150 text-start ${pathname.slice(1)===text ? "w-16" : "w-0 overflow-hidden"}`}>{!pathname.slice(1) ? "Home" : pathname.slice(1)}</div>
        </button>
    )
}

const Nav = () => {
    // const [collapsed, setCollapsed] = useState(false);
    // const {isMobile} = useWindowWidth();

    // useEffect(()=>{
    //     if(isMobile){
    //         setCollapsed(true);
    //     }
    // },[isMobile]);

    return (
        <div className="z-50 fixed bottom-5 left-0 w-full flex items-center justify-center gap-1 pointer-events-none text-white">
            <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto rounded-[30px] bg-neutral-700/80 w-fit px-3 sm:px-5 py-3">
                <Button icon={<GoHomeFill/>} text=""/>
                <Button icon={<TbAppsFilled/>} text="Projects"/>
                <Button icon={<RiServiceFill/>} text="Services"/>
                <Button icon={<MdMail/>} text="Contact"/>
            </div>
        </div>
    );
};

export default Nav;
