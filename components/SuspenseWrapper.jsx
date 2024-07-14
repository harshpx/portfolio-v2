"use client";

import { Suspense } from "react";

const SuspenseWrapper = ({ children }) => {
    return <Suspense fallback={null}>{children}</Suspense>;
};

export default SuspenseWrapper;