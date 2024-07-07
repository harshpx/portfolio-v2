import "./globals.css";
import Nav from "@/app/Nav";

export const metadata = {
    title: "Harsh Priye",
    description: "Harsh Priye's personal website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/*" href="/code1.png" />
            </head>
            <body className={``}>
                {children}
                <Nav />
            </body>
        </html>
    );
}
