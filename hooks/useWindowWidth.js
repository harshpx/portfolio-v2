import { useState, useEffect } from "react";

const useWindowWidth = () => {
    const [width, setWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
      );
    
    useEffect(() => {
        if(typeof window !== 'undefined'){
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize)
            };
        }
    }, []);
    
    return {
        width,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024
    }
}

export default useWindowWidth;