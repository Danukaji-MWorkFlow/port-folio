import LogoAnim from '../Components/LogoAnim';
import Card from "../Components/Card";
import IC3D from "../Components/IC3D";

function Home() {
    
    const cardDetails = [
        {
            title: 'WEB DESIGN',
            content: 'Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.',
            footer: 'ABOUT WEB DESIGN',
            link: ''
        },
        {
            title: 'SOFTWARE DEVELOPMENT',
            content: 'Custom software solutions that streamline your business processes, enhance productivity, and provide a competitive edge.',
            footer: 'ABOUT SOFTWARE DEVELOPMENT',
            link: ''
        },
        {
            title: 'E-COMMERCE',
            content: 'E-commerce solutions that boost your online presence, enhance user experience, and drive sales through seamless integration and optimization.',
            footer: 'ABOUT E-COMMERCE SOLUTION',
            link: ''
        }
    ];

    return (
        <>
            <div className="flex mt-20 items-center justify-center">
                <div className="grid mt-10 grid-cols-1 py-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold font-Aldrich tracking-widest text-silver-500">
                            RAWBELL
                        </h1>
                        <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold font-Aldrich text-silver-500 tracking-extra-wide">
                            TECHNOLOGIES
                        </h1>
                    </div>
                    <div className="text-center">
                        <span className="text-xl md:text-2xl font-Alerta text-neutral-600">
                            Premium Web Design, Development, and SEO services to help your business stand out.
                        </span>
                    </div>
                    <div className="items-center flex py-4 justify-center">
                        <div className="w-12 h-12 rounded-full bg-transparent border text-white hover:bg-gray-600 flex items-center justify-center">
                            <span className="material-symbols-outlined">
                                arrow_downward
                            </span>
                        </div>
                        <span className="text-gray-500 text-xl ml-4 font-Alata">Our Services</span>
                    </div>
                    <div className="grid py-20 grid-cols-12 gap-4 justify-center">
                        <div className="col-span-12 text-white">
                            <LogoAnim />
                        </div>
                    </div>
                    <div className="flex  items-center justify-center py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {cardDetails.map((card, index) => (
                                <Card
                                    key={index}
                                    cardnumber={(index + 1).toString()}
                                    title={card.title}
                                    content={card.content}
                                    footer={card.footer}
                                />
                            ))}
                        </div>
                    </div>
                    <p className=" text-red-200 text-center">THE PROCESS</p>
                    <h1 className="text-red-200 text-center text-8xl font-Aldrich" >Your Project</h1>
                    <h1 className="text-red-200 text-center text-8xl font-cursive" >in 5 steps</h1>
                    <p className="text-red-200 text-center font-Alerta" >Our process ensures that we create a Project <br/> tailored to your business needs.</p>
                    <div className="grid grid-cols-3 mx-auto gap-4 justify-center">
                   
                        <div className="col-span-3 rounded">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
