import "./List.css";
import { useRef } from "react";
import PropTypes from "prop-types";


export default function List({
    flowers,
    setFlowers,
    farmFlowers,
    setFarmFlowers,
    greenFlowers,
    setGreenFlowers,
    inputValue,
    setInputValue,
    editId,
    setEditId,
    history,
    setHistory,
    // redoStack,
    setRedoStack,
    filter
}) {
    const inputRef = useRef(null);

    function handleDeleteItem(id) {
        const newFlowers = flowers.filter((flower) => flower.id !== id);
        const newFarmFlowers = farmFlowers.filter((flower) => flower.id !== id);
        const newGreenFlowers = greenFlowers.filter((flower) => flower.id !== id);
        setHistory([...history, { flowers, farmFlowers, greenFlowers }]);
        setFlowers(newFlowers);
        setFarmFlowers(newFarmFlowers);
        setGreenFlowers(newGreenFlowers);
        setRedoStack([]);
    }

    const listItems = (filter === 'holland' ? flowers : filter === 'farm' ? farmFlowers : greenFlowers)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((flower) => (
            <li key={flower.id}
                onDoubleClick={() => handleEdit(flower.id)}>
                    <span>{flower.name}</span>
                
                <button
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
                    const updatedGreenFlowers = greenFlowers.map((flower) =>
                        flower.id === editId
                            ? { ...flower, name: inputValue }
                            : flower
                    );

                    setFlowers(updatedFlowers);
                    setFarmFlowers(updatedFarmFlowers);
                    setGreenFlowers(updatedGreenFlowers);
                    setEditId(null);
                }
            } else {
                const names = inputValue
                    .split("\n")
                    .map((name) => name.trim())
                    .filter((name) => name !== "");

                const newFlowers = [];
                const newFarmFlowers = [];
                const newGreenFlowers = [];

                names.forEach((name) => {
                    const newFlower = { id: Date.now() + Math.random(), name };
                    if (filter === "farm") {
                        newFarmFlowers.push(newFlower);
                    } else if (filter === "green") {
                        newGreenFlowers.push(newFlower);
                    } else {
                        newFlowers.push(newFlower);
                    }
                });

                setFlowers([...flowers, ...newFlowers]);
                setFarmFlowers([...farmFlowers, ...newFarmFlowers]);
                setGreenFlowers([...greenFlowers, ...newGreenFlowers]);
            }

            setHistory([...history, { flowers, farmFlowers, greenFlowers }]);
            setInputValue("");
            setRedoStack([]);
            inputRef.current.focus();

            if (e.type === "click") {
                e.preventDefault();
            }
        }
    };

    const handleEdit = (id) => {
        const flower = flowers.find((flower) => flower.id === id);
        const farmFlower = farmFlowers.find((flower) => flower.id === id);
        const greenFlower = greenFlowers.find((flower) => flower.id === id);
        setInputValue(flower?.name || farmFlower?.name || greenFlower?.name || "");
        setEditId(id);
        inputRef.current.focus();
    };

    return (
        <>
            <ol>{listItems}</ol>
            <div className="inputBody">
                <textarea
                    ref={inputRef}
                    rows={1}
                    placeholder="Push the horse to see the magic✨"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) =>
                        e.key === "Enter" && !e.shiftKey && handleSubmit(e)
                    }
                />
                <button type="Submit" onClick={handleSubmit} style={{fontSize:"50px"}}>
                    {/* <span className="material-symbols-outlined checkButton">
                        check
                    </span> */}🦄
                </button>
            </div>
        </>
    );
}

List.propTypes = {
    flowers: PropTypes.array.isRequired,
    setFlowers: PropTypes.func.isRequired,
    farmFlowers: PropTypes.array.isRequired,
    setFarmFlowers: PropTypes.func.isRequired,
    greenFlowers: PropTypes.array.isRequired,
    setGreenFlowers: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    setInputValue: PropTypes.func.isRequired,
    editId: PropTypes.number,
    setEditId: PropTypes.func.isRequired,
    history: PropTypes.array.isRequired,
    setHistory: PropTypes.func.isRequired,
    redoStack: PropTypes.array.isRequired,
    setRedoStack: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};
