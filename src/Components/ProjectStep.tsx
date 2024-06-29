import React from 'react';
import StepCard from './StepCard';

const StepCardDetails = [
    {
        title: "DISCOVERY CALL",
        content: "Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?",
        uptitle: "WE DO MATCH",
        list: ["We get to know each other better", "Determine how I can best assist you", "Understand the goals you have for your website"],
        time: "2 HOURS"
    },
    {
        title: "CONCEPT & STRATEGY",
        content: "Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.",
        uptitle: "WE NEED A PLAN",
        list: ["UX Design", "Wireframes", "Interactive Prototype"],
        time: "2 WEEKS"
    }, {
        title: "WEB DESIGN",
        content: "Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.",
        uptitle: "SOME MAGIC",
        list: ["High-end web design tailored to your brand", "nteractive prototype of the design"],
        time: "2 WEEKS"
    }, {
        title: "DEVELOPMENT",
        content: "In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.",
        uptitle: "MORE MAGIC",
        list: ["Custom framer website", "Modular web design systems", "CMS integration"],
        time: "2 WEEKS"
    }, {
        title: "WEBSITE ONBOARDING",
        content: "In a personal Framer workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized Framer video tutorials that you can access at any time. Edit your Framer website without a complicated backend or the need for an additional programmer. It's as simple as that.",
        uptitle: "READY TO GO",
        list: ["Personal workshop", "Personalized video tutorials", "Edit text and images directly on your website"],
        time: "2 HOURS"
    },

];

const ProjectStep: React.FC = () => {

    return (
        <div className='flex grid-cols-11 gap-2 justify-center items-center'>
            <div className='col-span-1 mr-5 ml-5'>
                <div className='hidden lg:grid  items-center justify-center'>
                    <div className="w-12 h-12 rounded-full bg-transparent border text-white bg-red-400 bg-opacity-10 flex items-center justify-center">
                        <span className="">
                            1
                        </span>
                    </div>
                    <div className="transform top-full my-11 w-px lg:h-80 bg-red-300 bg-opacity-25 mx-auto"></div>
                    <div className="w-12 h-12 rounded-full bg-transparent border text-white bg-red-400 bg-opacity-10 flex items-center justify-center">
                        <span className="text-white">
                            2
                        </span>
                    </div>
                    <div className="transform top-full my-11 w-px h-80 bg-red-300 bg-opacity-25 mx-auto"></div>
                    <div className="w-12 h-12 rounded-full bg-transparent border text-white bg-red-400 bg-opacity-10 flex items-center justify-center">
                        <span className="text-white">
                            3
                        </span>
                    </div>
                    <div className="transform top-full my-11 w-px h-80 bg-red-300 bg-opacity-25 mx-auto"></div>
                    <div className="w-12 h-12 rounded-full bg-transparent border text-white bg-red-400 bg-opacity-10 flex items-center justify-center">
                        <span className="text-white">
                            4
                        </span>
                    </div>
                    <div className="transform top-full my-11 w-px h-80 bg-red-300 bg-opacity-25 mx-auto"></div>
                    <div className="w-12 h-12 rounded-full bg-transparent border text-white bg-red-400 bg-opacity-10 flex items-center justify-center">
                        <span className="text-white">
                            5
                        </span>
                    </div>
                </div>
            </div>
            <div className='col-span-9'>
                {StepCardDetails.map((card, index) => (
                    <div className='grid'>
                        <StepCard
                            key={index}
                            title={card.title}
                            content={card.content}
                            uptitle={card.uptitle}
                            list={card.list}
                            time={card.time} />
                    </div>
                ))};
            </div>
        </div>
    );
};

export default ProjectStep;