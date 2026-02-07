import Card from "../components/card"

export default function Home(){
    return(
        <>
            
            <div className="relative text-white h-fit bg-(--main-blue) w-full">

                <div className="absolute bg-[#a9baff] w-200 h-100 left-1/2 -translate-x-1/2 rounded-full blur-[160px] opacity-17"/>

                
                <div>
                    <div className=" flex flex-col m-auto justify-center items-center pt-40 gap-7">
                        <h1 className="text-6xl font-bold">Build faster, Ship sooner.</h1>
                        <p className="text-gray-200 text-center text-[26px]">Accelerate your development workflow with our powerful <br /> tools and frameworks.</p>
                        <button className="w-70 h-17 rounded-[7px] bg-[#1871ff] text-[28px] font-semibold">Get Started</button>
                    </div> 

                    <div className="flex justify-center mt-30">
                        <div className="flex flex-col justify-center align-center text-center gap-10">
                            <hr />
                            <h2 className="font-bold text-4xl">Features</h2>
                            <ul className="flex gap-10 mb-10">
                                <li>
                                    <Card image={"images/assets/power.png"}  title={"Speed Optimization"} description={"Boost your performance with our optimized solutions"}/>
                                </li>
                                <li>
                                    <Card image={""}  title={"Easy Integrations"} description={"Seamlessly connect with your favorite services"}/>
                                </li>
                                <li>
                                    <Card image={""}  title={"Safe & Secure"} description={"Top-Notch security for peace of your mind"}/>
                                </li>
                            </ul>
                            <hr />
                        </div>
                    </div>
                 
                        
                </div>
            </div>
            
        </>
        )
}