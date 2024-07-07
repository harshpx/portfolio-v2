import Footer from "./Footer";

const Screen = ({children}) => {
    return (
        <div className="relative min-h-screen min-w-full bg-black text-white flex flex-col gap-2 p-2">
            {children}
            <Footer/>
        </div>
    )
};

export default Screen;