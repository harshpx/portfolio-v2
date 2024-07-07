"use client";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Screen = ({ children }) => {
    const pathname = usePathname();
    return (
        <div className="relative min-h-screen min-w-full bg-black text-white">
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
