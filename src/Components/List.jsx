import "./List.css";
import PropTypes from "prop-types";
import InputForm from "./InputForm"; 

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
    setRedoStack,
    filter,
}) {
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

    const handleEdit = (id) => {
        const flower = flowers.find((flower) => flower.id === id);
        const farmFlower = farmFlowers.find((flower) => flower.id === id);
        const greenFlower = greenFlowers.find((flower) => flower.id === id);
        setInputValue(flower?.name || farmFlower?.name || greenFlower?.name || "");
        setEditId(id);
    };

    return (
        <>
            <ol>{listItems}</ol>
            <InputForm
                inputValue={inputValue}
                setInputValue={setInputValue}
                editId={editId}
                setEditId={setEditId}
                flowers={flowers}
                setFlowers={setFlowers}
                farmFlowers={farmFlowers}
                setFarmFlowers={setFarmFlowers}
                greenFlowers={greenFlowers}
                setGreenFlowers={setGreenFlowers}
                history={history}
                setHistory={setHistory}
                setRedoStack={setRedoStack}
                filter={filter}
            />
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
    setRedoStack: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};
