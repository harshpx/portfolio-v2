"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { TiStarburst } from "react-icons/ti";
import {
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTypescript,
    SiFramer,
    SiSass,
    SiMui,
    SiReact,
    SiNextdotjs,
    SiRedux,
    SiTailwindcss,
    SiAntdesign,
} from "react-icons/si";
import {
    SiNodedotjs,
    SiExpress,
    SiSocketdotio,
    SiFlask,
    SiFastapi,
    SiStreamlit,
    SiMongodb,
    SiMongoose,
    SiMysql,
    SiPostgresql,
    SiSequelize,
    SiRedis,
} from "react-icons/si";
import {
    SiVercel,
    SiGithub,
    SiVisualstudiocode,
    SiBitbucket,
    SiGnubash,
    SiHeroku,
    SiAmazonaws,
    SiLinux,
    SiDebian,
    SiSlack,
    SiMicrosoftteams,
} from "react-icons/si";

import { SiPython, SiTensorflow, SiScikitlearn, SiOpencv, SiNumpy, SiPandas, SiJupyter } from "react-icons/si";
import { LiaKaggle } from "react-icons/lia";


// const contentStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "1rem",
//     color: "#fff",
//     fontSize: "20px",
// }

const StackCard = ({ icon, name }) => {
    return (
        <div className="flex items-center justify-center text-center gap-x-2 text-white">
            <div className="text-4xl sm:text-7xl">{icon}</div>
            <p className="text-2xl sm:text-4xl">{name}</p>
        </div>
    );
};

const Crousel = () => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 h-full">
            <div className="flex items-center justify-center p-2 w-full h-auto aspect-20/9">
                <div className="w-full">
                    <Carousel
                        showArrows={false}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                        autoPlay={true}
                        interval={2000}
                        infiniteLoop={true}
                        stopOnHover={false}
                    >
                        <StackCard icon={<SiJavascript />} name="JavaScript" />
                        <StackCard icon={<SiNextdotjs />} name="Next.js" />
                        <StackCard icon={<SiCss3 />} name="CSS" />
                        <StackCard icon={<SiReact />} name="React.js" />
                        <StackCard icon={<SiTypescript />} name="TypeScript" />
                        <StackCard icon={<SiFramer />} name="Framer" />
                        <StackCard icon={<SiSass />} name="Sass" />
                        <StackCard icon={<SiMui />} name="Material-UI" />
                        <StackCard icon={<SiHtml5 />} name="HTML" />
                        <StackCard icon={<SiRedux />} name="Redux" />
                        <StackCard icon={<SiTailwindcss />} name="Tailwind CSS"/>
                        <StackCard icon={<SiAntdesign />} name="Ant Design" />
                    </Carousel>
                </div>
            </div>
            <div className="flex items-center justify-center p-2 w-full h-auto aspect-20/9">
                <div className="w-full">
                    <Carousel
                        showArrows={false}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                        autoPlay={true}
                        interval={2000}
                        infiniteLoop={true}
                        stopOnHover={false}
                    >
                        <StackCard icon={<SiNodedotjs />} name="Node.js" />
                        <StackCard icon={<SiExpress />} name="Express.js" />
                        <StackCard icon={<SiSocketdotio />} name="Socket.io" />
                        <StackCard icon={<SiMongodb />} name="MongoDB" />
                        <StackCard icon={<SiMongoose />} name="Mongoose" />
                        <StackCard icon={<SiMysql />} name="MySQL" />
                        <StackCard icon={<SiPostgresql />} name="PostgreSQL" />
                        <StackCard icon={<SiSequelize />} name="Sequelize" />
                        <StackCard icon={<SiRedis />} name="Redis" />
                        <StackCard icon={<SiFlask />} name="Flask" />
                        <StackCard icon={<SiFastapi />} name="FastAPI" />
                        <StackCard icon={<SiStreamlit />} name="Streamlit" />
                    </Carousel>
                </div>
            </div>
            <div className="flex items-center justify-center p-2 w-full h-auto aspect-20/9">
                <div className="w-full">
                    <Carousel
                        showArrows={false}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                        autoPlay={true}
                        interval={2000}
                        infiniteLoop={true}
                        stopOnHover={false}
                    >
                        <StackCard icon={<SiVercel />} name="Vercel" />
                        <StackCard icon={<SiGithub />} name="GitHub" />
                        <StackCard icon={<SiVisualstudiocode />} name="VS Code" />
                        <StackCard icon={<SiBitbucket />} name="Bitbucket" />
                        <StackCard icon={<SiGnubash />} name="GNU Bash" />
                        <StackCard icon={<SiHeroku />} name="Heroku" />
                        <StackCard icon={<SiAmazonaws />} name="AWS" />
                        <StackCard icon={<SiLinux />} name="Linux" />
                        <StackCard icon={<SiDebian />} name="Debian" />
                        <StackCard icon={<SiSlack />} name="Slack" />
                        <StackCard icon={<SiMicrosoftteams />} name="Teams" />
                    </Carousel>
                </div>
            </div>
            <div className="flex items-center justify-center p-2 w-full h-auto aspect-20/9">
                <div className="w-full">
                    <Carousel
                        showArrows={false}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                        autoPlay={true}
                        interval={2000}
                        infiniteLoop={true}
                        stopOnHover={false}
                    >
                        <StackCard icon={<SiPython />} name="Python" />
                        <StackCard icon={<SiTensorflow />} name="TensorFlow" />
                        <StackCard icon={<SiScikitlearn />} name="Scikit-learn" />
                        <StackCard icon={<SiOpencv />} name="OpenCV" />
                        <StackCard icon={<SiNumpy />} name="NumPy" />
                        <StackCard icon={<SiPandas />} name="Pandas" />
                        <StackCard icon={<SiJupyter />} name="Jupyter" />
                        <StackCard icon={<LiaKaggle />} name="Kaggle" />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Crousel;
