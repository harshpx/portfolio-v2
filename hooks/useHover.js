import { useEffect, useState } from "react";

const useHover = (ref) => {
    const [hovered, setHovered] = useState(false);

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    useEffect(() => {
        const objectRef = ref.current;
        objectRef.addEventListener("mouseenter", enter);
        objectRef.addEventListener("mouseleave", leave);

        return () => {
            objectRef.removeEventListener("mouseenter", enter);
            objectRef.removeEventListener("mouseleave", leave);
        }
    }, []);

    return hovered;
}

export default useHover;