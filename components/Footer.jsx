import { FaRegCopyright } from "react-icons/fa6";
import { SiNextdotjs, SiVercel, SiTailwindcss } from "react-icons/si";
const Footer = () => {
    return (
        <div className="w-full h-fit flex flex-col lg:flex-row items-center justify-between gap-2 p-4 md:p-6 lg:p-8 text-sm sm:text-base text-neutral-300">
            <span className="flex items-center">
                <FaRegCopyright className="text-neutral-300" />
                &nbsp;2024 Harsh Priye,&nbsp;&nbsp;&nbsp;All Rights Reserved
            </span>
            <span className="flex items-center">
                Hosted with&nbsp;&nbsp;
                <SiVercel />
                &nbsp;Vercel
            </span>
            <span className="flex items-center">
                Built with&nbsp;&nbsp;
                <SiNextdotjs />
                &nbsp;Next.js&nbsp;&nbsp;&&nbsp;&nbsp;
                <SiTailwindcss />
                &nbsp;TailwindCSS
            </span>
        </div>
    );
};

export default Footer;
