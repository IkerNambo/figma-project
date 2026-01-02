import { Link } from "react-router-dom";


export default function Navbar(){
    return(
        <nav>
            <ul className="flex gap-4 backdrop-blur-2xl bg-amber-300 w-fit p-3 m-auto">
                <li>
                    <Link rel="stylesheet" to="/pricing"> Pricing</Link>
                </li>
                <li>
                    <Link rel="stylesheet" to="/">Home</Link>
                </li>
                <li>
                    <Link rel="stylesheet" to="/contact" onClick={() => {console.log('clicked')}}>contact</Link>
                </li>
            </ul>
        </nav>
    );
}