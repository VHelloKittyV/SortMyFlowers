import { useState } from "react";
import Header from "../Header";
import ControlsButton from "../ControlsButton";
import handleEditItem from "../List";
import handleDeleteItem from "../List";
import dictionary from "./flowerTranslate.json";
import "./Dictionary.css";

export default function Dictionary() {
    const [search, setSearch] = useState("");

    function handleSearchChange(e) {
        setSearch(e.target.value);
    }

    return (
        <>
            <Header />
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleSearchChange}
            />
            {dictionary
                .filter(
                    (item) =>
                        item.original_name
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                        item.translated_name
                            .toLowerCase()
                            .includes(search.toLowerCase())
                )
                .map((item, index) => (
                    <div className="itemBox" key={index}>
                        <div>
                            <p className="original_name">{item.original_name}</p>

                            <p className="translated_name">{item.translated_name}</p>
                        </div>
                        <div>
                            <ControlsButton
                                onClick={handleEditItem}
                                sign="edit"
                                // signText="edit"
                            />
                            <ControlsButton
                                onClick={handleDeleteItem}
                                sign="delete"
                            />
                        </div>
                    </div>
                ))}
        </>
    );
}
