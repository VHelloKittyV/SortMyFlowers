import { Link } from "react-router-dom";
import Card from "./Card";
import "./Archive.css";
import whiteLogo from '../../assets/MFS icon white-ratio-png.webp'

function Archive() {
  return (
    <div className="archive">
      <Link to="/SortMyFlowers">
        <span className="material-symbols-outlined">arrow_back</span>
      </Link>
      <h1>Поставка<span><img className="logo" src={whiteLogo} alt="logo" /></span></h1>

      <Card />
     
     
      
    </div>
  );
}

export default Archive;
