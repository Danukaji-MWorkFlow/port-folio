import { useEffect, useState } from "react";
import LogoAnim from '../Components/LogoAnim';
import Card from "../Components/Card";
import IC3D from "../Components/IC3D";

function Home() {
    const [textToShow, setTextToShow] = useState('');
    useEffect(() => {
        const originalText = 'RAWBELL TECHNOLOGIES'
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= originalText.length) {
                setTextToShow(originalText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }

        }, 250);
        return () => clearInterval(interval);
    }, []);

    const cardDetails = [
        {
            title: 'WEB DESIGN',
            content: 'Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.',
            footer: 'ABOUT WEB DESIGN'
        },
        {
            title: 'SOFTWARE DEVELOPMENT',
            content: 'Custom software solutions that streamline your business processes, enhance productivity, and provide a competitive edge.',
            footer: 'ABOUT SOFTWARE DEVELOPMENT'
        },
        {
            title: 'E-COMMERCE',
            content: 'E-commerce solutions that boost your online presence, enhance user experience, and drive sales through seamless integration and optimization.',
            footer: 'ABOUT E-COMMERXCE SOLUTION'
        }
    ];
    return (
        <>
            <div className="flex my-10 items-center justify-center h-screen ">
                <div className=" grid-cols-1" >
                    <div className="text-center" >
                        <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold font-Aldrich tracking-widest text-silver-500" >
                            RAWBELL
                        </h1>
                        <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold font-Aldrich text-silver-500 tracking-extra-wide" >TECHNOLOGIES</h1>
                    </div>
                    <div className="text-center" >
                        <span className="text-xl md:text-2xl font-Alerta text-neutral-600 text-center" >
                            Premium Web Design, Development, and SEO services to help your business stand out.
                        </span>
                    </div>
                    <div className=" items-center flex py-4 justify-center  " >
                        <div className="w-12 h-12 rounded-full bg-transparent border text-white hover:bg-gray-600 flex items-center justify-center">
                            <span className="material-symbols-outlined">
                                arrow_downward
                            </span>
                        </div>
                        <span className=" text-gray-500  text-xl ml-4 font-Alata">Our Services</span>
                    </div>
                    <div className="grid grid-cols-12 gap-4 justify-center py-5  " >
                        <div className="col-span-12 md:col-span-12 text-white  border-collapse">
                            <LogoAnim />
                        </div>
                    </div>
                    <div className="flex items-center justify-center" >
                        <Card
                            cardnumber = "1"
                            title="WEB DESIGN"
                            content="Visually stunning web designs that captivate your audience by blending your brand voice and customer needs."
                            footer="FOOTER ITEM"
                        />

                    </div>
                    <div className="grid grid-cols-3 mx-auto gap-4 justify-center">
                        <div className="col-span-1 rounded">
                            <p className="text-gray-300 text-4xl font-bold text-center" >Project Process</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;