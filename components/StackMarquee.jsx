"use client";
import Marquee from "react-fast-marquee";
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

import {
    SiPython,
    SiTensorflow,
    SiScikitlearn,
    SiOpencv,
    SiNumpy,
    SiPandas,
    SiJupyter,
} from "react-icons/si";
import { LiaKaggle } from "react-icons/lia";

// const contentStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "1rem",
//     color: "#fff",
//     fontSize: "20px",
// }

const StackCard = ({ icon, name, colorcode }) => {
    return (
        <div className="flex items-center justify-center text-center gap-x-2 mr-12" style={{color:colorcode ? colorcode : "white"}}>
            <div className="text-4xl sm:text-6xl">{icon}</div>
            <p className="text-2xl sm:text-3xl">{name}</p>
        </div>
    );
};

const StackMarquee = () => {
    return (
        <div className="w-full flex flex-col gap-6 h-full">
            <Marquee gradient={false} speed={50} pauseOnHover>
                <StackCard icon={<SiJavascript />} name="JavaScript" colorcode="yellow"/>
                <StackCard icon={<SiNextdotjs />} name="Next.js" />
                <StackCard icon={<SiCss3 />} name="CSS"/>
                <StackCard icon={<SiReact />} name="React.js" colorcode="#61dbfb"/>
                <StackCard icon={<SiTypescript />} name="TypeScript" />
                <StackCard icon={<SiFramer />} name="Framer" />
                <StackCard icon={<SiSass />} name="Sass" colorcode="#cd669a"/>
                <StackCard icon={<SiMui />} name="Material-UI"/>
                <StackCard icon={<SiHtml5 />} name="HTML5"/>
                <StackCard icon={<SiRedux />} name="Redux" colorcode="#7749bd"/>
                <StackCard icon={<SiTailwindcss />} name="Tailwind CSS" colorcode="#38bdf8"/>
                <StackCard icon={<SiAntdesign />} name="Ant Design" />
            </Marquee>
            <Marquee gradient={false} speed={50} pauseOnHover direction="right">
                <StackCard icon={<SiNodedotjs />} name="Node.js" colorcode="#68a063"/>
                <StackCard icon={<SiExpress />} name="Express.js" />
                <StackCard icon={<SiSocketdotio />} name="Socket.io" />
                <StackCard icon={<SiMongodb />} name="MongoDB" colorcode="#00ed64"/>
                <StackCard icon={<SiMongoose />} name="Mongoose" />
                <StackCard icon={<SiMysql />} name="MySQL" />
                <StackCard icon={<SiPostgresql />} name="PostgreSQL" colorcode="#0277bd"/>
                <StackCard icon={<SiSequelize />} name="Sequelize" />
                <StackCard icon={<SiRedis />} name="Redis" colorcode="#d92c20"/>
                <StackCard icon={<SiFlask />} name="Flask" />
                <StackCard icon={<SiFastapi />} name="FastAPI" colorcode="#05998b"/>
                <StackCard icon={<SiStreamlit />} name="Streamlit" />
            </Marquee>
            <Marquee gradient={false} speed={50} pauseOnHover>
                <StackCard icon={<SiVercel />} name="Vercel" />
                <StackCard icon={<SiGithub />} name="GitHub" />
                <StackCard icon={<SiVisualstudiocode />} name="VS Code" colorcode="#21a1f1"/>
                <StackCard icon={<SiBitbucket />} name="Bitbucket" />
                <StackCard icon={<SiGnubash />} name="GNU Bash" />
                <StackCard icon={<SiHeroku />} name="Heroku" colorcode="#8062a7"/>
                <StackCard icon={<SiAmazonaws />} name="AWS" />
                <StackCard icon={<SiLinux />} name="Linux" />
                <StackCard icon={<SiDebian />} name="Debian" colorcode="#d70a53"/>
                <StackCard icon={<SiSlack />} name="Slack" />
                <StackCard icon={<SiMicrosoftteams />} name="Teams" colorcode="#1169bf"/>
            </Marquee>
            <Marquee gradient={false} speed={50} pauseOnHover direction="right">
                <StackCard icon={<SiPython />} name="Python" colorcode="#4584b6"/>
                <StackCard icon={<SiPandas />} name="Pandas"/>
                <StackCard icon={<SiTensorflow />} name="TensorFlow" colorcode="#ff9000"/>
                <StackCard icon={<SiScikitlearn />} name="Scikit-learn" />
                <StackCard icon={<LiaKaggle />} name="Kaggle" colorcode="#20beff"/>
                <StackCard icon={<SiOpencv />} name="OpenCV" />
                <StackCard icon={<SiJupyter />} name="Jupyter" colorcode="#f37821"/>
                <StackCard icon={<SiNumpy />} name="NumPy" />
            </Marquee>
            {/* <div className="flex items-center justify-center p-2 w-full h-auto aspect-20/9">
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
                        swipeable={false}
                        axis="vertical"
                    >
                    
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
                        swipeable={false}
                        axis="vertical"
                    >
                        
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
                        swipeable={false}
                        axis="vertical"
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
                        swipeable={false}
                        axis="vertical"
                    >
                    
                    </Carousel>
                </div>
            </div> */}
        </div>
    );
};

export default StackMarquee;
