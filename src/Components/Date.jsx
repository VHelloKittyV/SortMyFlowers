import { useState } from "react";
import "./Date.css";

export default function Date({ setDate }) {
    const [currentDate, setCurrentDate] = useState("");

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setCurrentDate(newDate);
        setDate(newDate); // Передаем дату обратно в App
    };

    return (
        <div className="date">
            <input 
                type="text" 
                placeholder="Дата поставки"  
                value={currentDate} 
                onChange={handleDateChange}
            />
        </div>
    );
}
