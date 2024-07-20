import DateComponent from "./Components/Date";
import List from "./Components/List";
import Footer from "./Components/Footer";
import "./App.css";
import { useState } from "react";

function App() {
    const [currentDate, setCurrentDate] = useState("");

    return (
        <>
            <h1>Поставка🌸</h1>
            <DateComponent setDate={setCurrentDate} />
            <List currentDate={currentDate} />
            <Footer/>
        </>
    );
}

export default App;
