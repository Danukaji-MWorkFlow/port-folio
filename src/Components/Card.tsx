interface CardProps{
    title:string;
    content: string;
    footer?:string[];
}

const Card: React.FC<CardProps> = ({title,content,footer})=>{
    return(
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-red-300 bg-opacity-10 border border-gray-200 border-opacity-20">
            <div className="px-6 py-4" >
                <div className="font-bold text-xl mb-2 text-center text-white" >
                    {title}
                </div>
                <p className="text-gray-400 text-center text-base" >
                    {content}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {footer && footer.length> 0 && (
                    footer.map((item, index)=>(
                        <span className="inline-block px-1 py-1 text-sm font-semibold text-gray-700 " key={index}>#{item}</span>
                    ))
                )}
            </div>
        </div>
    );
}

export default Card;