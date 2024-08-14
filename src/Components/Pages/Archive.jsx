import { Link } from "react-router-dom";
import Card from "./Card";
import "./Archive.css";

function Archive() {
  return (
    <div className="archive">
      <Link to="/SortMyFlowers">
        <span className="material-symbols-outlined">arrow_back</span>
      </Link>
      <h1>Поставки</h1>
      <h2>Місяць</h2>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Archive;
