import "./Header.css";
import { Link } from "react-router-dom";
import whiteLogo from '../assets/MFS icon white-ratio-png.webp';

export default function Header() {
    return (
        <>
            <Link to="/SortMyFlowers">
                <h1>
                    <span>
                        <img className="logo" src={whiteLogo} alt="logo" />
                    </span>

                    Mutabor flower 
                    <span>service</span>
                    
                </h1>
            </Link>
        </>
    );
}
