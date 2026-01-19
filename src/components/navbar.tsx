import { Link } from "react-router-dom";


export default function Navbar(){
    return(
        <nav>
            <ul className="h-28 flex justify-center items-center m-auto gap-10 w-full bg-[#0e1018] text-white backdrop-blur-[10px] border-b-[0.5px] border-gray-800">
                <div className="mr-auto ml-5 flex justify-center items-center">
                    <img src="images/logo.png" alt="" className="w-10 "/>
                    <h2 className="font-bold text-3xl">
                        BrandName
                    </h2>
                </div>
               
                
                <ul className="flex gap-9 items-center backdrop-blur-2xl w-fit p-3 mr-10 text-2xl justify-center">
                <li>
                    <Link rel="stylesheet" to="/">Home</Link>
                </li>
                <li>
                    <Link rel="stylesheet" to="/">Features</Link>
                </li>
                <li>
                    <Link rel="stylesheet" to="/pricing">Pricing</Link>
                </li>
                <li>
                    <Link rel="stylesheet" to="/contact" onClick={() => {console.log('clicked')}}>contact</Link>
                </li>
                <li className="h-auto p-0 m-0 mt-1.5">
                    <Link rel="stylesheet" className="flex items-center justify-center" to="/" onClick={() => {console.log('clicked')}}>
                        <img className="w-8 h-auto" src="images/icon.png"/>
                    </Link>
                </li>
                
            </ul>
            </ul>
        </nav>
    );
}