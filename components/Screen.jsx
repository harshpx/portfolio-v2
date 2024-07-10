"use client";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import useWindowWidth from "@/hooks/useWindowWidth";

const Screen = ({ children }) => {
    const {isMobile} = useWindowWidth();
    const pathname = usePathname();
    return (
        <div className="relative h-screen overflow-y-scroll min-w-full bg-black text-white scrollbar-w-[10px] scrollbar-thumb-neutral-500 scrollbar-track-black scrollbar-thumb-rounded-full scrollbar-none md:scrollbar">
            <AnimatePresence mode="wait">
                <motion.div
                    key={pathname}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-2 p-2"
                >
                        {children}
                        <Footer />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Screen;
