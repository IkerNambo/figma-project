


export default function Card({image, title, description}){
    return(
        <div className="bg-[linear-gradient(360deg,#0D0F14_0%,#1C1F2B_100%)]
                        h-80 w-80
                        border-2 border-[#272727]
                        rounded-2xl
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.55)]
                        flex justify-center items-center
">
            <ul className="flex flex-col justify-center items-center">
                <li>
                    <img src={image} alt="" className="w-30 h-auto shadow-black shadow-2xl p-0 m-0"/>
                </li>
                <li>
                    <h3 className="font-bold text-[30px]">{title}</h3>
                </li>
                <li>
                    <p className="text-[15px] ">{description}</p>
                </li>
            </ul>
        </div>
    );
}