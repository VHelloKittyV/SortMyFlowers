
import PropTypes from "prop-types";
import "./Controls.css";

function Controls({
    currentDate,
    flowers,
    setFlowers,
    farmFlowers,
    setFarmFlowers,
    greenFlowers,
    setGreenFlowers,
    history,
    setHistory,
    redoStack,
    setRedoStack
}) {
    const handleClear = () => {
        setHistory([...history, { flowers, farmFlowers, greenFlowers }]);
        setFlowers([]);
        setFarmFlowers([]);
        setGreenFlowers([]);
        setRedoStack([]);
    };

    const handleUndo = () => {
        if (history.length > 0) {
            const previousState = history[history.length - 1];
            setRedoStack([{ flowers, farmFlowers, greenFlowers }, ...redoStack]);
            setFlowers(previousState.flowers);
            setFarmFlowers(previousState.farmFlowers);
            setGreenFlowers(previousState.greenFlowers);
            setHistory(history.slice(0, -1));
        }
    };

    const handleRedo = () => {
        if (redoStack.length > 0) {
            const nextState = redoStack[0];
            setHistory([...history, { flowers, farmFlowers, greenFlowers }]);
            setFlowers(nextState.flowers);
            setFarmFlowers(nextState.farmFlowers);
            setGreenFlowers(nextState.greenFlowers);
            setRedoStack(redoStack.slice(1));
        }
    };

    const handleCopy = () => {
        const allFlowers = [
            `Дата: ${currentDate}`,
            "Голандськи квіти:",
            ...flowers.map((flower) => flower.name),
            "Фермерськи квіти:",
            ...farmFlowers.map((flower) => flower.name),
            "Зелень:",
            ...greenFlowers.map((flower) => flower.name),
        ].join("\n");
        navigator.clipboard.writeText(allFlowers);
    };

    return (
        <div className="control">
            <button type="button" onClick={handleUndo}>
                <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button type="button" onClick={handleRedo}>
                <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
            <button type="button" onClick={handleCopy}>
                <span className="material-symbols-outlined">content_copy</span>
            </button>
            <button type="button" onClick={handleClear}>
                <span className="material-symbols-outlined">scan_delete</span>
            </button>
            <button type="button" >
                <span className="material-symbols-outlined">event_note</span>
            </button>
        </div>
    );
}

Controls.propTypes = {
    currentDate: PropTypes.string.isRequired,
    flowers: PropTypes.array.isRequired,
    setFlowers: PropTypes.func.isRequired,
    farmFlowers: PropTypes.array.isRequired,
    setFarmFlowers: PropTypes.func.isRequired,
    greenFlowers: PropTypes.array.isRequired,
    setGreenFlowers: PropTypes.func.isRequired,
    history: PropTypes.array.isRequired,
    setHistory: PropTypes.func.isRequired,
    redoStack: PropTypes.array.isRequired,
    setRedoStack: PropTypes.func.isRequired
};

export default Controls;
