interface CardProps {
    title: string;
    content: string;
    footer: string;
    cardnumber: string;
}

const Card: React.FC<CardProps> = ({ title, content, footer, cardnumber }) => {
    return (
        <div className="max-w-sm overflow-hidden shadow-lg bg-red-300 bg-opacity-10 border border-gray-200 border-opacity-20">
            <div className="px-6 py-4" >

                <div className="text-2xl py-5 mb-2 text-left font-sans text-white " >
                    <span className="text-gray-500 text-sm " >0{cardnumber}</span>
<br/>
                    <span>{title}</span>
                </div>
                <p className="text-gray-400 py-5 text-left text-base" >
                    {content}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 py-5">
                <div className=" flex py-4   " >
                    <div className="w-8 h-8 rounded-full bg-transparent border items-center text-white bg-gray-600 flex justify-center">
                        <span className="material-symbols-outlined w-6 h-6">
                            north_east
                        </span>
                    </div>
                    <span className=" text-gray-500 ml-4 py-1 font-sans  ">{footer}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;