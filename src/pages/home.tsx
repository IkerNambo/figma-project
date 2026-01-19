
export default function Home(){
    return(
        <>
            
            <div className="relative text-white h-screen bg-(--main-blue) w-full">

                <div className="absolute bg-[#a9baff] w-200 h-100 left-1/2 -translate-x-1/2 rounded-full blur-[160px] opacity-17"/>

                
                <div>
                    <div className=" flex flex-col m-auto justify-center items-center pt-40 gap-7">
                        <h1 className="text-6xl font-bold">Build faster, Ship sooner.</h1>
                        <p className="text-gray-200 text-center text-[26px]">Accelerate your development workflow with our powerful <br /> tools and frameworks.</p>
                        <button className="w-70 h-17 rounded-[7px] bg-[#1871ff] text-[28px] font-semibold">Get Started</button>
                    </div>   
                 
                        
                </div>
            </div>
            
        </>
        )
}