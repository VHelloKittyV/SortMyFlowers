import "./InputForm.css"
import React, { useRef } from "react";
import PropTypes from "prop-types";

export default function InputForm({
    inputValue,
    setInputValue,
    editId,
    setEditId,
    flowers,
    setFlowers,
    farmFlowers,
    setFarmFlowers,
    greenFlowers,
    setGreenFlowers,
    history,
    setHistory,
    setRedoStack,
    filter
}) {
    const inputRef = useRef(null);

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

    return (
        
        <div className="inputBody" >
            <textarea

                ref={inputRef}
                rows={0}
                placeholder="Push the horse to see the magic✨"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) =>
                    e.key === "Enter" && !e.shiftKey && handleSubmit(e)
                }
            />
            <button onClick={handleSubmit}>
                🦄
            </button>
        </div>
        
    );
}

InputForm.propTypes = {
    inputValue: PropTypes.string.isRequired,
    setInputValue: PropTypes.func.isRequired,
    editId: PropTypes.number,
    setEditId: PropTypes.func.isRequired,
    flowers: PropTypes.array.isRequired,
    setFlowers: PropTypes.func.isRequired,
    farmFlowers: PropTypes.array.isRequired,
    setFarmFlowers: PropTypes.func.isRequired,
    greenFlowers: PropTypes.array.isRequired,
    setGreenFlowers: PropTypes.func.isRequired,
    history: PropTypes.array.isRequired,
    setHistory: PropTypes.func.isRequired,
    setRedoStack: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};
