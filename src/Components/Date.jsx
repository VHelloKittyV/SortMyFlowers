import { useState, useEffect } from "react";
import "./Date.css";
import PropTypes from "prop-types";

export default function DateComponent({ setDate }) {
    const [currentDate, setCurrentDate] = useState(() => {
        const now = new Date();
        return `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`;
    });

    useEffect(() => {
        const now = new Date();
        const formattedDate = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`;
        setCurrentDate(formattedDate);
        setDate(formattedDate);
    }, [setDate]);

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setCurrentDate(newDate);
        setDate(newDate);
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

DateComponent.propTypes = {
    setDate: PropTypes.func.isRequired,
};
