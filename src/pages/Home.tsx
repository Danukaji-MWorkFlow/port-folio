import { useEffect, useState } from "react";

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
    return (
        <>
            <div className="flex items-center justify-center h-screen ">
                <div className=" grid-cols-1" >
                    <div className="text-center" >
                        <h1 className="text-6xl md:text-9xl font-bold font-Aldrich tracking-widest text-silver-500" >
                            RAWBELL
                        </h1>
                        <h1 className="text-5xl md:text-8xl font-bold font-Aldrich text-silver-500 tracking-extra-wide" >TECHNOLOGIES</h1>
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
                </div>
            </div>
        </>
    );
}

export default Home;