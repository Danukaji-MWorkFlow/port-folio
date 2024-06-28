
interface CardData {
    title: string;
    content: string;
    uptitle: string;
    list: string[];
    time: string;
}

const StepCard: React.FC<CardData> = ({ title, content, uptitle, list, time }) => {
    return (
        <div className="w-full overflow-hidden shadow-lg bg-red-300 bg-opacity-10 border border-gray-200 border-opacity-20">
            <div className="px-6 py-4" >
                <div className="justify-end text-left flex">
                    <span className=" border bg-opacity-5 text-sm font-sans text-gray-500 px-1 py-1 border-opacity-15" >
                        {time}
                    </span>
                </div>
                <div className="text-2xl py-5 mb-2 text-left font-sans text-gray-500 " >
                    <span className="text-gray-500 text-sm " >{uptitle}</span>
                    <br />
                    <span >{title}</span>
                </div>
                <p className="text-gray-400 py-5 text-left text-base" >
                    {content}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 py-5">
                <div className=" flex py-4   " >
                    <ul className="list-disc list-inside" >
                        {list.map((item, index) => (
                            <li className="list-item text-gray-500 py-2 text-left text-base" key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default StepCard;