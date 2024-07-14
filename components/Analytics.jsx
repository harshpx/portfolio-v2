"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_TRACKING_ID = "G-222CM8HCHC";

const Analytics = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const handleRouteChange = (url) => {
            window.gtag("config", GA_TRACKING_ID, {
                page_path: url,
            });
        };

        handleRouteChange(`${pathname}${searchParams}`);
    }, [pathname, searchParams]);

    return null;
};

export default Analytics;
