import "./globals.css";
import Nav from "@/components/Nav";
import Analytics from "@/components/Analytics";
import Script from "next/script";

export const metadata = {
    title: "Harsh Priye",
    description: "Harsh Priye's personal website",
};

const GA_TRACKING_ID = "G-222CM8HCHC";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <Script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_TRACKING_ID}', {
                            page_path: window.location.pathname,
                        });
                    `}
                </Script>
            </head>
            <body>
                <Analytics />
                {children}
                <Nav />
            </body>
        </html>
    );
}
