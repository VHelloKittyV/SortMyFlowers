import { Link } from "react-router-dom";
import "./Archive.css";

function Archive() {
    return (
        <div className="archive">
            <h2>Архив</h2>
            <Link to="/">Назад</Link>
            {/* Ваш контент архива здесь */}
        </div>
    );
}

export default Archive;
