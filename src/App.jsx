import { useState } from "react";
import DateComponent from "./Components/Date";
import Controls from "./Components/Controls";
import TabSection from "./Components/TabSection";
import Header from "./Components/Header";
import "./App.css";

function App() {
    const [currentDate, setCurrentDate] = useState("");
    const [flowers, setFlowers] = useState([]);
    const [farmFlowers, setFarmFlowers] = useState([]);
    const [greenFlowers, setGreenFlowers] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [editId, setEditId] = useState(null);
    const [history, setHistory] = useState([]);
    const [redoStack, setRedoStack] = useState([]);
    

    return (
        <div className="appContainer">
            <Header/>

            <DateComponent setDate={setCurrentDate} />
            <TabSection
                currentDate={currentDate}
                flowers={flowers}
                setFlowers={setFlowers}
                farmFlowers={farmFlowers}
                setFarmFlowers={setFarmFlowers}
                greenFlowers={greenFlowers}
                setGreenFlowers={setGreenFlowers}
                inputValue={inputValue}
                setInputValue={setInputValue}
                editId={editId}
                setEditId={setEditId}
                history={history}
                setHistory={setHistory}
                redoStack={redoStack}
                setRedoStack={setRedoStack}
            />
            <Controls
                currentDate={currentDate}
                flowers={flowers}
                setFlowers={setFlowers}
                farmFlowers={farmFlowers}
                setFarmFlowers={setFarmFlowers}
                greenFlowers={greenFlowers}
                setGreenFlowers={setGreenFlowers}
                history={history}
                setHistory={setHistory}
                redoStack={redoStack}
                setRedoStack={setRedoStack}
            />
            
        </div>
    );
}

export default App;
