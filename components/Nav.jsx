"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { GoHomeFill, GoPersonFill } from "react-icons/go";
import { TbAppsFilled } from "react-icons/tb";
import { PiStackFill } from "react-icons/pi";
import { MdMail } from "react-icons/md";
import { RiGraduationCapFill, RiServiceFill } from "react-icons/ri";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import useHover from "@/hooks/useHover";
import useWindowWidth from "@/hooks/useWindowWidth";

const Button = ({icon,text})=>{
    const ref = useRef(null);
    const hovered = useHover(ref);
    const {isMobile} = useWindowWidth();
    return (
        <Link href={`#${text}`} ref={ref} className="flex items-center justify-center gap-2">
            <div className="text-2xl sm:text-3xl md:text-4xl rounded-[30px] flex flex-col items-center justify-center hover:scale-125 transition-all duration-200">
                {icon}
            </div>
            <div className={`${hovered && !isMobile ? "w-16" : "w-0 overflow-hidden"} transition-all duration-200 text-nowrap`}>{decodeURI(text)}</div>
        </Link>
    )
}

const Nav = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {isMobile} = useWindowWidth();

    useEffect(()=>{
        if(isMobile){
            setCollapsed(true);
        }
    },[isMobile]);

    return (
        <div className="z-50 fixed bottom-5 md:bottom-10 left-0 w-full flex items-center justify-center">
            <div className="rounded-[30px] bg-gradient-to-b from-neutral-500/50 to-neutral-600/60 w-fit px-5 py-3 flex items-center justify-center gap-2 sm:gap-3">
                {!collapsed && <div className="flex items-center gap-2 sm:gap-3">
                    <Button icon={<GoHomeFill/>} text="Home" />
                    <Button icon={<GoPersonFill/>} text="About"/>
                    <Button icon={<RiGraduationCapFill/>} text="Ed&Exp"/>
                    <Button icon={<PiStackFill/>} text="Stack"/>
                    <Button icon={<TbAppsFilled/>} text="Projects"/>
                    <Button icon={<RiServiceFill/>} text="Services"/>
                    <Button icon={<MdMail/>} text="Contact"/>
                </div>}
                <div className="text-2xl sm:text-3xl md:text-4xl rounded-[30px] flex flex-col items-center justify-center hover:scale-125 transition-all duration-200">
                    {collapsed ? <FaChevronCircleRight onClick={()=>setCollapsed(false)}/> : <FaChevronCircleLeft onClick={()=>setCollapsed(true)}/>}
                </div>
            </div>
        </div>
    );
};

export default Nav;
