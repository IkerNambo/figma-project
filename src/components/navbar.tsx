import { Link } from "react-router-dom";


export default function Navbar(){
    return(
        <nav>
            <ul className="flex justify-center items-center m-auto gap-10 w-full bg-[#0e1018] text-white backdrop-blur-[10px] border-b-[0.5px] border-gray-800">
                brand name
                <ul className="flex gap-4 items-center backdrop-blur-2xl w-fit p-3">
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
                <li>
                    <Link rel="stylesheet" to="/contact" onClick={() => {console.log('clicked')}}>Icon</Link>
                </li>
                <ul>
                    <li><a href="figma_pages/pricing.png">Home Figma</a></li>
                    <li><a href="figma_pages/home.png">Pricing Figma</a></li>
                </ul>
            </ul>
            </ul>
            
        </nav>
    );
}