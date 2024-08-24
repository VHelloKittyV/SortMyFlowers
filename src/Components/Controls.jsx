import PropTypes from "prop-types";
import "./Controls.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Controls({
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
    
    useEffect(() => {
        try {
            const savedFlowers = localStorage.getItem("flowers");
            const savedFarmFlowers = localStorage.getItem("farmFlowers");
            const savedGreenFlowers = localStorage.getItem("greenFlowers");
            const savedHistory = localStorage.getItem("history");
            const savedRedoStack = localStorage.getItem("redoStack");

            if (savedFlowers) setFlowers(JSON.parse(savedFlowers));
            if (savedFarmFlowers) setFarmFlowers(JSON.parse(savedFarmFlowers));
            if (savedGreenFlowers) setGreenFlowers(JSON.parse(savedGreenFlowers));
            if (savedHistory) setHistory(JSON.parse(savedHistory));
            if (savedRedoStack) setRedoStack(JSON.parse(savedRedoStack));

            // console.log("Данные загружены из localStorage");
        } catch (error) {
            // console.error("Ошибка при загрузке данных из localStorage", error);
        }
    }, [setFlowers, setFarmFlowers, setGreenFlowers, setHistory, setRedoStack]);

  
    useEffect(() => {
        if (flowers.length > 0) {
            try {
                localStorage.setItem("flowers", JSON.stringify(flowers));
                // console.log("flowers сохранены в localStorage:", flowers);
            } catch (error) {
                // console.error("Ошибка при сохранении flowers в localStorage", error);
            }
        }
    }, [flowers]);

    useEffect(() => {
        if (farmFlowers.length > 0) {
            try {
                localStorage.setItem("farmFlowers", JSON.stringify(farmFlowers));
                // console.log("farmFlowers сохранены в localStorage:", farmFlowers);
            } catch (error) {
                // console.error("Ошибка при сохранении farmFlowers в localStorage", error);
            }
        }
    }, [farmFlowers]);

    useEffect(() => {
        if (greenFlowers.length > 0) {
            try {
                localStorage.setItem("greenFlowers", JSON.stringify(greenFlowers));
                // console.log("greenFlowers сохранены в localStorage:", greenFlowers);
            } catch (error) {
                // console.error("Ошибка при сохранении greenFlowers в localStorage", error);
            }
        }
    }, [greenFlowers]);

    useEffect(() => {
        if (history.length > 0) {
            try {
                localStorage.setItem("history", JSON.stringify(history));
                // console.log("history сохранены в localStorage:", history);
            } catch (error) {
                // console.error("Ошибка при сохранении history в localStorage", error);
            }
        }
    }, [history]);

    useEffect(() => {
        if (redoStack.length > 0) {
            try {
                localStorage.setItem("redoStack", JSON.stringify(redoStack));
                // console.log("redoStack сохранены в localStorage:", redoStack);
            } catch (error) {
                // console.error("Ошибка при сохранении redoStack в localStorage", error);
            }
        }
    }, [redoStack]);

    const handleClear = () => {
        if (confirm("Стерти?🤨")) {
            // setHistory([...history, { flowers, farmFlowers, greenFlowers }]);
            setFlowers([]);
            setFarmFlowers([]);
            setGreenFlowers([]);
            setRedoStack([]);

            localStorage.clear()
            // localStorage.removeItem("flowers");
            // localStorage.removeItem("farmFlowers");
            // localStorage.removeItem("greenFlowers");
            localStorage.removeItem("history");
            // localStorage.removeItem("redoStack");
        }
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
        alert("Готовий 😎");
        const allFlowers = [
            `📅 Дата: ${currentDate}`,
            "🚛 Голандськи квіти:",
            ...flowers.map((flower) => flower.name),
            "👨‍🌾 Фермерськи квіти:",
            ...farmFlowers.map((flower) => flower.name),
            "🌿 Зелень:",
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
                <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button type="button" onClick={handleCopy}>
                <span className="material-symbols-outlined">content_copy</span>
            </button>
            <button type="button" onClick={handleClear}>
                <span className="material-symbols-outlined">scan_delete</span>
            </button>
            <button type="button" onClick={handleCopy}>
                <span className="material-symbols-outlined">file_save</span>
            </button>
            <Link to="/SortMyFlowers/archive">
                <button type="button">
                    <span className="material-symbols-outlined">event_note</span>
                </button>
            </Link>
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
    setRedoStack: PropTypes.func.isRequired,
};
