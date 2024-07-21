import "./List.css";
import { useState, useRef } from "react";
import PropTypes from "prop-types";

export default function List({ currentDate }) {
    const [flowers, setFlowers] = useState([]);
    const [farmFlowers, setFarmFlowers] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [editId, setEditId] = useState(null);
    const [history, setHistory] = useState([]);
    const [redoStack, setRedoStack] = useState([]);
    const inputRef = useRef(null); // useRef to keep track of textarea

    const substring = "ферм";

    function handleDeleteItem(id) {
        const newFlowers = flowers.filter((flower) => flower.id !== id);
        const newFarmFlowers = farmFlowers.filter((flower) => flower.id !== id);
        setHistory([...history, { flowers, farmFlowers }]);
        setFlowers(newFlowers);
        setFarmFlowers(newFarmFlowers);
        setRedoStack([]);
    }

    const listItems = flowers
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((flower) => (
            <li key={flower.id}>
                <span onDoubleClick={() => handleEdit(flower.id)}>{flower.name}</span>
                <button
                    style={{ userSelect: "none" }}
                    className="deleteItem"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteItem(flower.id);
                    }}
                >
                    <span className="material-symbols-outlined deleteItem">
                        delete
                    </span>
                </button>
            </li>
        ));

    const listItems2 = farmFlowers
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((flower) => (
            <li key={flower.id}>
                <span onDoubleClick={() => handleEdit(flower.id)}>{flower.name}</span>
                <button
                    style={{ userSelect: "none" }}
                    className="deleteItem"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteItem(flower.id);
                    }}
                >
                    <span className="material-symbols-outlined deleteItem">
                        delete
                    </span>
                </button>
            </li>
        ));

    const handleSubmit = (e) => {
        if (e.key === "Enter" || e.type === "click") {
            if (editId !== null) {
                if (inputValue.trim() === "") {
                    handleDeleteItem(editId);
                } else {
                    const updatedFlowers = flowers.map((flower) =>
                        flower.id === editId
                            ? { ...flower, name: inputValue }
                            : flower
                    );
                    const updatedFarmFlowers = farmFlowers.map((flower) =>
                        flower.id === editId
                            ? { ...flower, name: inputValue }
                            : flower
                    );

                    setFlowers(updatedFlowers);
                    setFarmFlowers(updatedFarmFlowers);
                    setEditId(null);
                }
            } else {
                const names = inputValue
                    .split("\n")
                    .map((name) => name.trim())
                    .filter((name) => name !== "");

                const newFlowers = [];
                const newFarmFlowers = [];

                names.forEach((name) => {
                    const newFlower = { id: Date.now() + Math.random(), name };
                    if (name.toLowerCase().includes(substring.toLowerCase())) {
                        newFarmFlowers.push(newFlower);
                    } else {
                        newFlowers.push(newFlower);
                    }
                });

                setFlowers([...flowers, ...newFlowers]);
                setFarmFlowers([...farmFlowers, ...newFarmFlowers]);
            }

            setHistory([...history, { flowers, farmFlowers }]);
            setInputValue("");
            setRedoStack([]);
            inputRef.current.focus(); // manually set focus to the textarea

            if (e.type === "click") {
                e.preventDefault();
            }
        }
    };

    const handleClear = () => {
        setHistory([...history, { flowers, farmFlowers }]);
        setFlowers([]);
        setFarmFlowers([]);
        setRedoStack([]);
    };

    const handleEdit = (id) => {
        const flowerToEdit =
            flowers.find((flower) => flower.id === id) ||
            farmFlowers.find((flower) => flower.id === id);
        setInputValue(flowerToEdit.name);
        setEditId(id);
    };

    const handleUndo = () => {
        if (history.length > 0) {
            const previousState = history[history.length - 1];
            setRedoStack([{ flowers, farmFlowers }, ...redoStack]);
            setFlowers(previousState.flowers);
            setFarmFlowers(previousState.farmFlowers);
            setHistory(history.slice(0, -1));
        }
    };

    const handleRedo = () => {
        if (redoStack.length > 0) {
            const nextState = redoStack[0];
            setHistory([...history, { flowers, farmFlowers }]);
            setFlowers(nextState.flowers);
            setFarmFlowers(nextState.farmFlowers);
            setRedoStack(redoStack.slice(1));
        }
    };

    const handleCopy = () => {
        const allFlowers = [
            `Дата: ${currentDate}`,
            "Голандськи квіти:",
            ...flowers.map((flower) => flower.name),
            "Фермерськи квіти:",
            ...farmFlowers.map((flower) => flower.name)
        ].join("\n");
        navigator.clipboard.writeText(allFlowers);
    };

    return (
        <>
            <h3>Голандськи квіти</h3>
            <ol>{listItems}</ol>
            <h3>Фермерськи квіти</h3>
            <ol>{listItems2}</ol>

            <div className="inputBody">
                <textarea
                    ref={inputRef} 
                    rows={2}
                    placeholder="Напечатай щось або вставь список"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) =>
                        e.key === "Enter" && !e.shiftKey && handleSubmit(e)
                    }
                />
                <button type="Submit" onClick={handleSubmit}>
                    <span className="material-symbols-outlined checkButton">
                        check
                    </span>
                </button>
            </div>
            <div className="control">
                <button type="button" onClick={handleUndo}>
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button type="button" onClick={handleRedo}>
                    <span className="material-symbols-outlined">
                        arrow_right_alt
                    </span>
                </button>
                <button type="button" onClick={handleCopy}>
                    <span className="material-symbols-outlined">
                        content_copy
                    </span>
                </button>
                <button type="button" onClick={handleClear}>
                    <span className="material-symbols-outlined">scan_delete</span>
                </button>
                <button type="button">
                    <span className="material-symbols-outlined">event_note</span>
                </button>
            </div>
        </>
    );
}

List.propTypes = {
    currentDate: PropTypes.string.isRequired,
};