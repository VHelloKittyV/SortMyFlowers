import { useState } from "react";
import DateComponent from "./Components/Date";
import Controls from "./Components/Controls";
import TabSection from "./Components/TabSection";
// import Footer from "./Components/Footer";
import "./App.css";
// import  blackLogo from './assets/MFS icon black-ratio-png.webp'
import  whiteLogo from './assets/MFS icon white-ratio-png.webp'

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
            <h1>Поставка<span><img className="logo" src={whiteLogo} alt="logo" /></span></h1>
            

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
            {/* <Footer/> */}
        </div>
    );
}

export default App;
