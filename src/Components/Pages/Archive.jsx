import { Link } from "react-router-dom";
import Card from "./Card";
import "./Archive.css";
import Header from "../Header";

function Archive() {
  return (
    <div className="archive">
      <Link to="/SortMyFlowers">
        <span className="material-symbols-outlined">arrow_back</span>
      </Link>
      <Header/>

      <Card />

    </div>
  );
}

export default Archive;
